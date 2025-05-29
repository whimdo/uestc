#pragma once
/**************************************************************************

File: Physics2.h  

Prepared by Erkin Tunca for nehe.gamedev.net

**************************************************************************/
#include<vector>
#include "Physics1.h" // Physics1.h �� Physics2.h ģ���������

class Spring // һ����ʾ�����ڲ�Ħ���ĵ������������ʵ�Ķ��󡣸õ�����һ���������ȣ����ɲ�ʩ���κ����ĳ��ȣ�
{
public:
    Mass* mass1; // ����һ�˵ĵ�һ���ʵ�
    Mass* mass2; // ������һ�˵ĵڶ����ʵ�

    float springConstant; // ��ʾ���ɸնȵĳ���
    float springLength; // ���ɲ�ʩ�����ĳ���
    float frictionConstant; // ���ڵ����ڲ�Ħ���ĳ���

    Spring(Mass* mass1, Mass* mass2,
           float springConstant, float springLength, float frictionConstant) // ���캯��
    {
        this->springConstant = springConstant; // ���õ��ɸն�
        this->springLength = springLength; // ���õ��ɳ���
        this->frictionConstant = frictionConstant; // ����Ħ������

        this->mass1 = mass1; // �����ʵ�1
        this->mass2 = mass2; // �����ʵ�2
    }

    void solve() // solve() ������ʩ�����ķ���
    {
        Vector3D springVector = mass1->pos - mass2->pos; // �����ʵ�֮���ʸ��

        float r = springVector.length(); // �����ʵ�֮��ľ���

        Vector3D e, force; // ��ʼ��Ϊ��

        if (r != 0) // ��������㣬��� r �Ƿ�Ϊ��
        {
            e = springVector / r;
            force += e * (r - springLength) * (-springConstant); // ����������ӵ�����

            force += -e * (mass1->vel * e - mass2->vel * e) * frictionConstant; // ��Ħ������ӵ����У��õ����ɵľ���
        }
        mass1->applyForce(force); // ʩ�������ʵ�1
        mass2->applyForce(-force); // ʩ���෴�������ʵ�2
    }
};

/*
RopeSimulation ��� Simulation ���������μ� Physics1.h������ģ����һ��ͨ���������ӵĵ�״���ӵ����ӡ�
��Щ���ɾ����ڲ�Ħ�����������ȡ����ӵ�һ���ڿռ��й̶���һ���㣬��Ϊ��Vector3D ropeConnectionPos����
����ͨ��������void setRopeConnectionVel(Vector3D ropeConnectionVel)���ⲿ�ƶ����ӵ���һ�㡣
RopeSimulation �����˿���Ħ����һ��ƽ����棨����棩�����߷���Ϊ +y��RopeSimulation ʵ���˸ñ���ʩ�ӵ�����
�ڴ����У��ñ��汻��Ϊ��ground����
*/
class RopeSimulation : public Simulation // һ������ģ��������ƽ������Լ������໥���õĶ���
{
public:
    Spring** springs; // ���ʵ�ĵ��ɣ�Ӧ���� [numOfMasses - 1] ����

    Vector3D gravitation; // �������ٶȣ����������������ʵ㣩

    Vector3D ropeConnectionPos; // ��������ϵͳ�е�һ���ʵ㣨�������� 0��λ�õĿռ��

    Vector3D ropeConnectionVel; // �����ƶ� ropeConnectionPos �ı�����ͨ����������ǿ��԰ڶ����ӣ�

    RopeSimulation( // һ���� 11 �������ĳ������캯��
        int numOfMasses, // 1. �ʵ�����
        float m, // 2. ÿ���ʵ������
        float springConstant, // 3. ���ɸն��ж��
        float springLength, // 4. ���ɲ�ʩ���κ����ĳ���
        float springFrictionConstant, // 5. �����ڲ�Ħ������
        Vector3D gravitation // 6. �������ٶ�
    ) : Simulation(numOfMasses, m) // ����ʹ��ÿ���ʵ������ m �����ʵ�
    {
        this->gravitation = gravitation;

        int a;
        for (a = 0; a < numOfMasses; ++a) // ѭ�������ʵ�ĳ�ʼλ��
        {
            masses[a]->pos.x = a * springLength; // ���ʵ�λ������Ϊ�����ھ���� springLength �� x λ��
            masses[a]->pos.y = 0; // �� y λ������Ϊ 0��ʹ������ڵ���ˮƽ
            masses[a]->pos.z = 0; // �� z λ������Ϊ 0��ʹ�俴������
        }

        springs = new Spring*[numOfMasses - 1]; // ���� [numOfMasses - 1] ������ָ�루���� numOfMasses ��Ҫ [numOfMasses - 1] �����ɣ�

        for (a = 0; a < numOfMasses - 1; ++a) // ����ÿ�����ɵ�ѭ��
        {
            // ͨ������Ϊ��a�����ʵ����һ������Ϊ��a + 1�����ʵ㴴������
            springs[a] = new Spring(masses[a], masses[a + 1],
                                    springConstant, springLength, springFrictionConstant);
        }
    }

    void release() // ��д release() ��������Ϊ�����е�����Ҫɾ��
    {
        Simulation::release(); // �ø����ͷ�����

        for (int a = 0; a < numOfMasses - 1; ++a) // ɾ�����е��ɵ�ѭ��
        {
            delete(springs[a]);
            springs[a] = NULL;
        }

        delete(springs);
        springs = NULL;
    }

    void solve() // ��д solve() ��������ΪҪʩ����
    {
        int a;
        for (a = 0; a < numOfMasses - 1; ++a) // Ӧ�����е��ɵ���
        {
            springs[a]->solve(); // �ڡ�a��������Ӧ��Ӧ������
        }

        for (a = 0; a < numOfMasses; ++a) // ����һ��ѭ��Ӧ�������ʵ�Ĺ�����
        {
            masses[a]->applyForce(gravitation * masses[a]->m); // ����
        }
    }

    void simulate(float dt) // ��д simulate(float dt) ��������ΪҪģ�� ropeConnectionPos ���˶�
    {
        Simulation::simulate(dt); // ����Ӧģ���ʵ�

        ropeConnectionPos += ropeConnectionVel * dt; // �������� ropeConnectionPos ��λ��

        masses[0]->pos = ropeConnectionPos; // �ʵ�0��λ������Ϊ ropeConnectionPos
        masses[0]->vel = ropeConnectionVel; // �ʵ���ٶ�����Ϊ ropeConnectionVel
    }

    void setRopeConnectionVel(Vector3D ropeConnectionVel) // ���� ropeConnectionVel �ķ���
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
        // ����ˮƽ����
        for (int i = 0; i < numHorizontalRopes; ++i)
        {
            RopeSimulation* rope = new RopeSimulation(numMassesPerRope, massValue, springConstant, springLength, springFrictionConstant, gravitation);
            rope->ropeConnectionPos = Vector3D(0, i * springLength, 0);
            horizontalRopes.push_back(rope);
        }

        // ������ֱ����
        for (int i = 0; i < numVerticalRopes; ++i)
        {
            RopeSimulation* rope = new RopeSimulation(numMassesPerRope, massValue, springConstant, springLength, springFrictionConstant, gravitation);
            rope->ropeConnectionPos = Vector3D(i * springLength, 0, 0);
            verticalRopes.push_back(rope);
        }

        // ����ˮƽ�ʹ�ֱ����
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


/*//����ģ��
class GridSimulation : public Simulation
{
public:
    int rows, cols; // ������к�����
    Spring*** springs; // �洢���ɵĶ�ά����
    Vector3D gravitation; // �������ٶ�

    GridSimulation(
        int rows, // 1. ���������
        int cols, // 2. ���������
        float m, // 3. ÿ���ʵ������
        float springConstant, // 4. ���ɸն�
        float springLength, // 5. ������Ȼ����
        float springFrictionConstant, // 6. ����Ħ������
        Vector3D gravitation // 7. �������ٶ�
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
                masses[index]->pos = Vector3D(j * springLength, i * springLength, 0); // ���ó�ʼλ��
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
                    // ˮƽ����
                    springs[i][j] = new Spring(masses[i * cols + j], masses[i * cols + (j + 1)], springConstant, springLength, springFrictionConstant);
                }
                if (i < rows - 1)
                {
                    // ��ֱ����
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
        // ������������Ӷ�����߼�������������ض�ģ������
    }
};*/
