#pragma once
/**************************************************************************

File: Physics2.h  

Prepared by Erkin Tunca for nehe.gamedev.net

**************************************************************************/
#include<vector>
#include "Physics1.h" // Physics1.h 是 Physics2.h 模拟所必需的

class Spring // 一个表示具有内部摩擦的弹簧连接两个质点的对象。该弹簧有一个正常长度（弹簧不施加任何力的长度）
{
public:
    Mass* mass1; // 弹簧一端的第一个质点
    Mass* mass2; // 弹簧另一端的第二个质点

    float springConstant; // 表示弹簧刚度的常数
    float springLength; // 弹簧不施加力的长度
    float frictionConstant; // 用于弹簧内部摩擦的常数

    Spring(Mass* mass1, Mass* mass2,
           float springConstant, float springLength, float frictionConstant) // 构造函数
    {
        this->springConstant = springConstant; // 设置弹簧刚度
        this->springLength = springLength; // 设置弹簧长度
        this->frictionConstant = frictionConstant; // 设置摩擦常数

        this->mass1 = mass1; // 设置质点1
        this->mass2 = mass2; // 设置质点2
    }

    void solve() // solve() 方法：施加力的方法
    {
        Vector3D springVector = mass1->pos - mass2->pos; // 两个质点之间的矢量

        float r = springVector.length(); // 两个质点之间的距离

        Vector3D e, force; // 初始力为零

        if (r != 0) // 避免除以零，检查 r 是否为零
        {
            e = springVector / r;
            force += e * (r - springLength) * (-springConstant); // 将弹簧力添加到力中

            force += -e * (mass1->vel * e - mass2->vel * e) * frictionConstant; // 将摩擦力添加到力中，得到弹簧的净力
        }
        mass1->applyForce(force); // 施加力到质点1
        mass2->applyForce(-force); // 施加相反的力到质点2
    }
};

/*
RopeSimulation 类从 Simulation 类派生（参见 Physics1.h）。它模拟了一个通过弹簧连接的点状粒子的绳子。
这些弹簧具有内部摩擦和正常长度。绳子的一端在空间中固定在一个点，称为“Vector3D ropeConnectionPos”。
可以通过方法“void setRopeConnectionVel(Vector3D ropeConnectionVel)”外部移动绳子的这一点。
RopeSimulation 创建了空气摩擦和一个平面表面（或地面），法线方向为 +y。RopeSimulation 实现了该表面施加的力。
在代码中，该表面被称为“ground”。
*/
class RopeSimulation : public Simulation // 一个用于模拟绳子与平面表面以及空气相互作用的对象
{
public:
    Spring** springs; // 绑定质点的弹簧（应该有 [numOfMasses - 1] 个）

    Vector3D gravitation; // 重力加速度（重力作用于所有质点）

    Vector3D ropeConnectionPos; // 用于设置系统中第一个质点（具有索引 0）位置的空间点

    Vector3D ropeConnectionVel; // 用于移动 ropeConnectionPos 的变量（通过这个，我们可以摆动绳子）

    RopeSimulation( // 一个有 11 个参数的超长构造函数
        int numOfMasses, // 1. 质点数量
        float m, // 2. 每个质点的质量
        float springConstant, // 3. 弹簧刚度有多大
        float springLength, // 4. 弹簧不施加任何力的长度
        float springFrictionConstant, // 5. 弹簧内部摩擦常数
        Vector3D gravitation // 6. 重力加速度
    ) : Simulation(numOfMasses, m) // 父类使用每个质点的质量 m 创建质点
    {
        this->gravitation = gravitation;

        int a;
        for (a = 0; a < numOfMasses; ++a) // 循环设置质点的初始位置
        {
            masses[a]->pos.x = a * springLength; // 将质点位置设置为与其邻居相距 springLength 的 x 位置
            masses[a]->pos.y = 0; // 将 y 位置设置为 0，使其相对于地面水平
            masses[a]->pos.z = 0; // 将 z 位置设置为 0，使其看起来简单
        }

        springs = new Spring*[numOfMasses - 1]; // 创建 [numOfMasses - 1] 个弹簧指针（对于 numOfMasses 需要 [numOfMasses - 1] 个弹簧）

        for (a = 0; a < numOfMasses - 1; ++a) // 创建每个弹簧的循环
        {
            // 通过索引为“a”的质点和另一个索引为“a + 1”的质点创建弹簧
            springs[a] = new Spring(masses[a], masses[a + 1],
                                    springConstant, springLength, springFrictionConstant);
        }
    }

    void release() // 重写 release() 方法，因为我们有弹簧需要删除
    {
        Simulation::release(); // 让父类释放自身

        for (int a = 0; a < numOfMasses - 1; ++a) // 删除所有弹簧的循环
        {
            delete(springs[a]);
            springs[a] = NULL;
        }

        delete(springs);
        springs = NULL;
    }

    void solve() // 重写 solve() 方法，因为要施加力
    {
        int a;
        for (a = 0; a < numOfMasses - 1; ++a) // 应用所有弹簧的力
        {
            springs[a]->solve(); // 第“a”个弹簧应该应用其力
        }

        for (a = 0; a < numOfMasses; ++a) // 开启一个循环应用所有质点的公共力
        {
            masses[a]->applyForce(gravitation * masses[a]->m); // 重力
        }
    }

    void simulate(float dt) // 重写 simulate(float dt) 方法，因为要模拟 ropeConnectionPos 的运动
    {
        Simulation::simulate(dt); // 父类应模拟质点

        ropeConnectionPos += ropeConnectionVel * dt; // 迭代更新 ropeConnectionPos 的位置

        masses[0]->pos = ropeConnectionPos; // 质点0的位置设置为 ropeConnectionPos
        masses[0]->vel = ropeConnectionVel; // 质点的速度设置为 ropeConnectionVel
    }

    void setRopeConnectionVel(Vector3D ropeConnectionVel) // 设置 ropeConnectionVel 的方法
    {
        this->ropeConnectionVel = ropeConnectionVel;
    }

};

class GridRopeSimulation : public Simulation
{
public:
 
    std::vector<RopeSimulation*> horizontalRopes;
    std::vector<RopeSimulation*> verticalRopes;
    std::vector<Spring*> connectionSprings;

    GridRopeSimulation(int numHorizontalRopes, int numVerticalRopes, int numMassesPerRope, float massValue,
        float springConstant, float springLength, float springFrictionConstant, Vector3D gravitation)
        : Simulation(numHorizontalRopes* numVerticalRopes* numMassesPerRope, massValue)
    {
        // 创建水平绳子
        for (int i = 0; i < numHorizontalRopes; ++i)
        {
            RopeSimulation* rope = new RopeSimulation(numMassesPerRope, massValue, springConstant, springLength, springFrictionConstant, gravitation);
            rope->ropeConnectionPos = Vector3D(0, i * springLength, 0);
            horizontalRopes.push_back(rope);
        }

        // 创建垂直绳子
        for (int i = 0; i < numVerticalRopes; ++i)
        {
            RopeSimulation* rope = new RopeSimulation(numMassesPerRope, massValue, springConstant, springLength, springFrictionConstant, gravitation);
            rope->ropeConnectionPos = Vector3D(i * springLength, 0, 0);
            verticalRopes.push_back(rope);
        }

        // 连接水平和垂直绳子
        for (int i = 0; i < numHorizontalRopes; ++i)
        {
            for (int j = 0; j < numVerticalRopes; ++j)
            {
                for (int k = 0; k < numMassesPerRope; ++k)
                {
                    Spring* spring = new Spring(horizontalRopes[i]->masses[k], verticalRopes[j]->masses[k], springConstant, springLength, springFrictionConstant);
                    connectionSprings.push_back(spring);
                }
            }
        }
    }

    void release()
    {
        Simulation::release();

        for (RopeSimulation* rope : horizontalRopes)
        {
            rope->release();
            delete rope;
        }
        horizontalRopes.clear();

        for (RopeSimulation* rope : verticalRopes)
        {
            rope->release();
            delete rope;
        }
        verticalRopes.clear();

        for (Spring* spring : connectionSprings)
        {
            delete spring;
        }
        connectionSprings.clear();
    }

    void solve()
    {
        for (RopeSimulation* rope : horizontalRopes)
            rope->solve();

        for (RopeSimulation* rope : verticalRopes)
            rope->solve();

        for (Spring* spring : connectionSprings)
            spring->solve();
    }

    void simulate(float dt)
    {
        Simulation::simulate(dt);

        for (RopeSimulation* rope : horizontalRopes)
            rope->simulate(dt);

        for (RopeSimulation* rope : verticalRopes)
            rope->simulate(dt);
    }
};


/*//网格模拟
class GridSimulation : public Simulation
{
public:
    int rows, cols; // 网格的行和列数
    Spring*** springs; // 存储弹簧的二维数组
    Vector3D gravitation; // 重力加速度

    GridSimulation(
        int rows, // 1. 网格的行数
        int cols, // 2. 网格的列数
        float m, // 3. 每个质点的质量
        float springConstant, // 4. 弹簧刚度
        float springLength, // 5. 弹簧自然长度
        float springFrictionConstant, // 6. 弹簧摩擦常数
        Vector3D gravitation // 7. 重力加速度
    ) : Simulation(rows * cols, m), rows(rows), cols(cols), gravitation(gravitation)
    {
        int totalMasses = rows * cols;
        masses = new Mass * [totalMasses];

        for (int i = 0; i < rows; ++i)
        {
            for (int j = 0; j < cols; ++j)
            {
                int index = i * cols + j;
                masses[index] = new Mass(m);
                masses[index]->pos = Vector3D(j * springLength, i * springLength, 0); // 设置初始位置
            }
        }

        springs = new Spring * *[rows];
        for (int i = 0; i < rows; ++i)
        {
            springs[i] = new Spring * [cols];
            for (int j = 0; j < cols; ++j)
            {
                springs[i][j] = nullptr;
                if (j < cols - 1)
                {
                    // 水平弹簧
                    springs[i][j] = new Spring(masses[i * cols + j], masses[i * cols + (j + 1)], springConstant, springLength, springFrictionConstant);
                }
                if (i < rows - 1)
                {
                    // 垂直弹簧
                    if (springs[i][j] == nullptr)
                    {
                        springs[i][j] = new Spring(masses[i * cols + j], masses[(i + 1) * cols + j], springConstant, springLength, springFrictionConstant);
                    }
                    else
                    {
                        springs[i][j] = new Spring(masses[i * cols + j], masses[(i + 1) * cols + j], springConstant, springLength, springFrictionConstant);
                    }
                }
            }
        }
    }

    void release() override
    {
        Simulation::release();

        for (int i = 0; i < rows; ++i)
        {
            for (int j = 0; j < cols; ++j)
            {
                if (springs[i][j] != nullptr)
                {
                    delete springs[i][j];
                    springs[i][j] = nullptr;
                }
            }
            delete[] springs[i];
        }
        delete[] springs;
        springs = nullptr;
    }

    void solve() override
    {
        for (int i = 0; i < rows; ++i)
        {
            for (int j = 0; j < cols; ++j)
            {
                if (springs[i][j] != nullptr)
                {
                    springs[i][j]->solve();
                }
            }
        }

        for (int i = 0; i < numOfMasses; ++i)
        {
            masses[i]->applyForce(gravitation * masses[i]->m);
        }
    }

    void simulate(float dt) override
    {
        Simulation::simulate(dt);
        // 可以在这里添加额外的逻辑来处理网格的特定模拟需求
    }
};*/
