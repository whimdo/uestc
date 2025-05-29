#pragma once
/**************************************************************************

File: Physics1.h

Prepared by Erkin Tunca for nehe.gamedev.net

**************************************************************************/



#include <math.h>

// class Vector3D		---> 用于表示三维向量或三维空间中的点的对象
class Vector3D
{
public:
	float x;									// 该 Vector3D 的 x 值
	float y;									// 该 Vector3D 的 y 值
	float z;									// 该 Vector3D 的 z 值

	Vector3D()									// 构造函数，将 x = y = z = 0
	{
		x = 0;
		y = 0;
		z = 0;
	}

	Vector3D(float x, float y, float z)			// 构造函数，初始化该 Vector3D 的 x、y 和 z 值
	{
		this->x = x;
		this->y = y;
		this->z = z;
	}

	Vector3D& operator= (Vector3D v)			// operator= 方法，将 v 的值设置给该 Vector3D。例如：v1 = v2 表示将 v2 的值设置到 v1 上
	{
		x = v.x;
		y = v.y;
		z = v.z;
		return *this;
	}

	Vector3D operator+ (Vector3D v)				// operator+ 用于将两个 Vector3D 相加，返回一个新的 Vector3D
	{
		return Vector3D(x + v.x, y + v.y, z + v.z);
	}

	Vector3D operator- (Vector3D v)				// operator- 用于计算两个 Vector3D 的差，返回一个新的 Vector3D
	{
		return Vector3D(x - v.x, y - v.y, z - v.z);
	}

	Vector3D operator* (Vector3D v)			// operator* 用于将 Vector3D 缩放一个值。该值乘以 Vector3D 的 x、y 和 z 值
	{
		return Vector3D(x * v.x, y * v.y, z * v.z);
	}

	Vector3D& operator+= (Vector3D v)			// operator+= 用于将另一个 Vector3D 添加到该 Vector3D 上
	{
		x += v.x;
		y += v.y;
		z += v.z;
		return *this;
	}

	Vector3D& operator-= (Vector3D v)			// operator-= 用于从该 Vector3D 中减去另一个 Vector3D
	{
		x -= v.x;
		y -= v.y;
		z -= v.z;
		return *this;
	}

	Vector3D operator* (float value)			// operator* 用于将该 Vector3D 缩放一个值。该值乘以 Vector3D 的 x、y 和 z 值
	{
		return Vector3D(x * value, y * value, z * value);
	}

	Vector3D operator/ (float value)			// operator/ 用于将该 Vector3D 缩放一个值。该值除以 Vector3D 的 x、y 和 z 值
	{
		return Vector3D(x / value, y / value, z / value);
	}

	Vector3D& operator*= (float value)			// operator*= 用于将该 Vector3D 缩放一个值
	{
		x *= value;
		y *= value;
		z *= value;
		return *this;
	}

	Vector3D& operator/= (float value)			// operator/= 用于将该 Vector3D 缩放一个值
	{
		x /= value;
		y /= value;
		z /= value;
		return *this;
	}

	Vector3D operator- ()						// operator- 用于将该 Vector3D 的 x、y 和 z 取反
	{
		return Vector3D(-x, -y, -z);
	}

	float length()								// length() 返回该 Vector3D 的长度
	{
		return sqrtf(x * x + y * y + z * z);
	};

	void unitize()								// unitize() 使该 Vector3D 归一化，使其方向保持不变，但长度为 1
	{
		float length = this->length();

		if (length == 0)
			return;

		x /= length;
		y /= length;
		z /= length;
	}

	Vector3D unit()								// unit() 返回一个新的 Vector3D。返回值是该 Vector3D 的单位化版本
	{
		float length = this->length();

		if (length == 0)
			return *this;

		return Vector3D(x / length, y / length, z / length);
	}

};

// class Mass			---> 用于表示质量的对象
class Mass
{
public:
	float m;									// 质量值
	Vector3D pos;								// 位置
	Vector3D vel;								// 速度
	Vector3D force;								// 在该质量上施加的力

	Mass(float m)								// 构造函数
	{
		this->m = m;
	}

	/*
	void applyForce(Vector3D force) 方法用于向质量添加外部力。
	在某一时刻，可能有多个力源影响质量。这些力的矢量和构成了该时刻作用在质量上的净力。
	*/
	void applyForce(Vector3D force)
	{
		this->force += force;					// 外部力添加到质量的力上
	}

	/*
	void init() 方法将力值重置为零
	*/
	void init()
	{
		force.x = 0;
		force.y = 0;
		force.z = 0;
	}

	/*
	void simulate(float dt) 方法根据时间变化（dt）计算质量的新速度和新位置。
	这里使用一种称为“欧拉方法”的模拟方法。欧拉方法并不总是准确，但是简单。
	它适用于我们在常见计算机和视频游戏中所知的大多数物理模拟。
	*/
	void simulate(float dt)
	{
		vel += (force / m) * dt;				// 变化的速度加到速度上
		// 变化与加速度（force / m）和时间变化成比例

		pos += vel * dt;						// 变化的位置加到位置上
		// 位置变化是速度乘以时间变化
	}

};

// class Simulation		---> 用于模拟质量的容器对象
class Simulation
{
public:
	int numOfMasses;								// 该容器中的质量数量
	Mass** masses;									// 质量通过指针来保存。（这里 Mass** 表示一个一维数组）

	Simulation(int numOfMasses, float m)			// 构造函数创建一些质量，质量值为 m
	{
		this->numOfMasses = numOfMasses;

		masses = new Mass * [numOfMasses];			// 创建一个指针数组

		for (int a = 0; a < numOfMasses; ++a)		// 我们将会遍历数组中的每一个指针
			masses[a] = new Mass(m);				// 创建一个作为指针的 Mass 并放入数组中
	}

	virtual void release()							// 删除创建的质量
	{
		for (int a = 0; a < numOfMasses; ++a)		// 我们将删除它们全部
		{
			delete(masses[a]);
			masses[a] = NULL;
		}

		delete(masses);
		masses = NULL;
	}

	Mass* getMass(int index)
	{
		if (index < 0 || index >= numOfMasses)		// 如果索引不在数组中
			return NULL;							// 则返回 NULL

		return masses[index];						// 获取索引处的质量
	}

	virtual void init()								// 该方法将调用每个质量的 init() 方法
	{
		for (int a = 0; a < numOfMasses; ++a)		// 我们将初始化每个质量
			masses[a]->init();						// 调用质量的 init() 方法
	}

	virtual void solve()							// 没有实现，因为这个基本容器中不需要力
	{
		// 在高级容器中，这个方法将会被重写并且会有一些力作用在质量上
	}

	virtual void simulate(float dt)					// 通过时间的变化迭代质量
	{
		for (int a = 0; a < numOfMasses; ++a)		// 我们将遍历每个质量
			masses[a]->simulate(dt);				// 迭代质量，得到新的位置和新的速度
	}

	virtual void operate(float dt)					// 完成模拟的完整过程
	{
		init();										// 步骤1：将力重置为零
		solve();									// 步骤2：应用力
		simulate(dt);								// 步骤3：通过时间的变化迭代质量
	}

};