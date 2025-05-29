#pragma once
#include "Physics1.h"									//Physics2.h模拟需要Physics1.h

class Spring											//表示具有内摩擦的弹簧绑定两个质量的对象。弹簧
	//有一个正常长度（弹簧不施加任何力的长度）
{
public:
	Mass* mass1;										//弹簧一端的第一个质量
	Mass* mass2;										//弹簧另一端的第二个质量

	float springConstant;								//表示弹簧刚度的常数
	float springLength;									//弹簧不施加力的长度
	float frictionConstant;								//用于弹簧内摩擦的常数

	Spring(Mass* mass1, Mass* mass2,
		float springConstant, float springLength, float frictionConstant)		//构造函数
	{
		this->springConstant = springConstant;									//设置弹簧常数
		this->springLength = springLength;										//设置弹簧长度
		this->frictionConstant = frictionConstant;								//设置摩擦常数

		this->mass1 = mass1;													//设置mass1
		this->mass2 = mass2;													//设置mass2
	}

	void solve()																	//solve()方法：应用力的方法
	{
		Vector3D springVector = mass1->pos - mass2->pos;							//两个质量之间的向量

		float r = springVector.length();											//两个质量之间的距离

		Vector3D e, force;															//力最初为零

		if (r != 0)																	//避免除以零，检查r是否为零
		{
			e = springVector / r;
			force += e * (r - springLength) * (-springConstant);	//弹簧力添加到力中

			force += -e * (mass1->vel * e - mass2->vel * e) * frictionConstant;						//摩擦力添加到力中,通过此添加，我们得到弹簧的净力			
		}
		mass1->applyForce(force);													//力应用于mass1
		mass2->applyForce(-force);													//力的相反方向应用于mass2
	}

};

/*
RopeSimulation类派生自Simulation类（参见Physics1.h）。它模拟一个绳子，绳子由使用弹簧绑定的点状粒子组成。
弹簧具有内摩擦和正常长度。绳子的一端在空间中固定在一个称为“Vector3D ropeConnectionPos”的点上。
这个点可以通过一个名为“void setRopeConnectionVel(Vector3D ropeConnectionVel)”的方法在外部移动。RopeSimulation
创建空气摩擦和一个法线方向为+y的平面表面（或地面）。RopeSimulation实现了这个表面施加的力。在代码中，这个表面被称为“ground”。
*/
class RopeSimulation : public Simulation				//模拟绳子与平面表面和空气交互的对象
{
public:
	Spring** springs;									//绑定质量的弹簧（需要[numOfMasses - 1]个）

	Vector3D gravitation;								//重力加速度（重力将应用于所有质量）

	Vector3D ropeConnectionPos;							//用于设置系统中第一个质量（索引为0的质量）位置的空间中点

	Vector3D ropeConnectionVel;						//用于移动ropeConnectionPos的变量（通过这个，我们可以摆动绳子）

	int numOfMassesWidth;
	int numOfMassesHeight;
	RopeSimulation(										//一个有11个参数的长构造函数在此开始
		int numOfMassesWidth,
		int numOfMassesHeight,//1. 质量的数量
		float m,										//2. 每个质量的重量
		float springConstant,							//3. 弹簧刚度
		float springLength,
		float springYOffset,//4. 弹簧不施加力的长度
		float springFrictionConstant,					//5. 弹簧内摩擦常数
		Vector3D gravitation							//6. 重力加速度

	) : Simulation(numOfMassesWidth* numOfMassesHeight, m)					//超类创建每个质量的重量m
	{
		this->gravitation = gravitation;
		this->numOfMassesWidth = numOfMassesWidth;
		this->numOfMassesHeight = numOfMassesHeight;
		int x, y;
		for (y = 0; y < numOfMassesHeight; y++) {
			for (x = 0; x < numOfMassesWidth; x++) {
				int index = y * numOfMassesWidth + x;
				masses[index]->pos.x = x * springLength;
				masses[index]->pos.y = y * springLength;
				masses[index]->pos.z = 0;
			}
		}

		springs = new Spring * [(numOfMassesWidth - 1) * (numOfMassesHeight - 1) * 4];
		int springsindex = 0;		//为弹簧创建[numOfMasses - 1]个指针
		//（对于numOfMasses，需要[numOfMasses - 1]个弹簧）
		for (y = 0; y < numOfMassesHeight; y++) {
			for (x = 0; x < numOfMassesWidth; x++) {
				int index = y * numOfMassesWidth + x;
				if (x < numOfMassesWidth - 1) {
					springs[springsindex] = new Spring(masses[index], masses[index + 1], springConstant, springLength, springFrictionConstant);
					springsindex++;
				}
				if (y < numOfMassesHeight - 1) {
					springs[springsindex] = new Spring(masses[index], masses[index + numOfMassesWidth], springConstant, springLength, springFrictionConstant);
					springsindex++;
				}
			}
		}

	}

	void release()										//覆盖release()，因为我们有要删除的弹簧
	{
		Simulation::release();							//让超类释放自己

		for (int a = 0; a < numOfMasses - 1; ++a)		//开始循环删除所有弹簧
		{
			delete(springs[a]);
			springs[a] = NULL;
		}

		delete(springs);
		springs = NULL;
	}

	void solve()										//覆盖solve()，因为我们有要应用的力
	{
		int a;
		for (a = 0; a < (numOfMassesWidth) * (numOfMassesHeight - 1) * 2; ++a)		//应用所有弹簧的力
		{
			springs[a]->solve();						//索引为"a"的弹簧应该应用其力
		}

		for (a = 0; a < numOfMasses; ++a)				//开始循环应用对所有质量都通用的力
		{
			masses[a]->applyForce(gravitation * masses[a]->m);				//重力
		}
	}

	void simulate(float dt)								//覆盖simulate(float dt)，因为我们想模拟ropeConnectionPos的运动
	{
		Simulation::simulate(dt);						//超类将模拟质量

		ropeConnectionPos += ropeConnectionVel * dt;	//迭代ropeConnectionPos的位置

		masses[0]->pos = ropeConnectionPos + Vector3D(-2, 3, 0);				//索引为"0"的质量应该位于ropeConnectionPos处
		masses[0]->vel = ropeConnectionVel;				//质量的速度设置为与ropeConnectionVel相等

		masses[numOfMasses - numOfMassesWidth]->pos = ropeConnectionPos - Vector3D(-2, -3, 0);
		masses[numOfMasses - numOfMassesWidth]->vel = ropeConnectionVel;
	}

	void setRopeConnectionVel(Vector3D ropeConnectionVel)	//设置ropeConnectionVel的方法
	{
		this->ropeConnectionVel = ropeConnectionVel;
	}

};
