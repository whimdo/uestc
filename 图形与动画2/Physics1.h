#pragma once
/**************************************************************************

File: Physics1.h

Prepared by Erkin Tunca for nehe.gamedev.net

**************************************************************************/



#include <math.h>

// class Vector3D		---> ���ڱ�ʾ��ά��������ά�ռ��еĵ�Ķ���
class Vector3D
{
public:
	float x;									// �� Vector3D �� x ֵ
	float y;									// �� Vector3D �� y ֵ
	float z;									// �� Vector3D �� z ֵ

	Vector3D()									// ���캯������ x = y = z = 0
	{
		x = 0;
		y = 0;
		z = 0;
	}

	Vector3D(float x, float y, float z)			// ���캯������ʼ���� Vector3D �� x��y �� z ֵ
	{
		this->x = x;
		this->y = y;
		this->z = z;
	}

	Vector3D& operator= (Vector3D v)			// operator= �������� v ��ֵ���ø��� Vector3D�����磺v1 = v2 ��ʾ�� v2 ��ֵ���õ� v1 ��
	{
		x = v.x;
		y = v.y;
		z = v.z;
		return *this;
	}

	Vector3D operator+ (Vector3D v)				// operator+ ���ڽ����� Vector3D ��ӣ�����һ���µ� Vector3D
	{
		return Vector3D(x + v.x, y + v.y, z + v.z);
	}

	Vector3D operator- (Vector3D v)				// operator- ���ڼ������� Vector3D �Ĳ����һ���µ� Vector3D
	{
		return Vector3D(x - v.x, y - v.y, z - v.z);
	}

	Vector3D operator* (Vector3D v)			// operator* ���ڽ� Vector3D ����һ��ֵ����ֵ���� Vector3D �� x��y �� z ֵ
	{
		return Vector3D(x * v.x, y * v.y, z * v.z);
	}

	Vector3D& operator+= (Vector3D v)			// operator+= ���ڽ���һ�� Vector3D ��ӵ��� Vector3D ��
	{
		x += v.x;
		y += v.y;
		z += v.z;
		return *this;
	}

	Vector3D& operator-= (Vector3D v)			// operator-= ���ڴӸ� Vector3D �м�ȥ��һ�� Vector3D
	{
		x -= v.x;
		y -= v.y;
		z -= v.z;
		return *this;
	}

	Vector3D operator* (float value)			// operator* ���ڽ��� Vector3D ����һ��ֵ����ֵ���� Vector3D �� x��y �� z ֵ
	{
		return Vector3D(x * value, y * value, z * value);
	}

	Vector3D operator/ (float value)			// operator/ ���ڽ��� Vector3D ����һ��ֵ����ֵ���� Vector3D �� x��y �� z ֵ
	{
		return Vector3D(x / value, y / value, z / value);
	}

	Vector3D& operator*= (float value)			// operator*= ���ڽ��� Vector3D ����һ��ֵ
	{
		x *= value;
		y *= value;
		z *= value;
		return *this;
	}

	Vector3D& operator/= (float value)			// operator/= ���ڽ��� Vector3D ����һ��ֵ
	{
		x /= value;
		y /= value;
		z /= value;
		return *this;
	}

	Vector3D operator- ()						// operator- ���ڽ��� Vector3D �� x��y �� z ȡ��
	{
		return Vector3D(-x, -y, -z);
	}

	float length()								// length() ���ظ� Vector3D �ĳ���
	{
		return sqrtf(x * x + y * y + z * z);
	};

	void unitize()								// unitize() ʹ�� Vector3D ��һ����ʹ�䷽�򱣳ֲ��䣬������Ϊ 1
	{
		float length = this->length();

		if (length == 0)
			return;

		x /= length;
		y /= length;
		z /= length;
	}

	Vector3D unit()								// unit() ����һ���µ� Vector3D������ֵ�Ǹ� Vector3D �ĵ�λ���汾
	{
		float length = this->length();

		if (length == 0)
			return *this;

		return Vector3D(x / length, y / length, z / length);
	}

};

// class Mass			---> ���ڱ�ʾ�����Ķ���
class Mass
{
public:
	float m;									// ����ֵ
	Vector3D pos;								// λ��
	Vector3D vel;								// �ٶ�
	Vector3D force;								// �ڸ�������ʩ�ӵ���

	Mass(float m)								// ���캯��
	{
		this->m = m;
	}

	/*
	void applyForce(Vector3D force) ������������������ⲿ����
	��ĳһʱ�̣������ж����ԴӰ����������Щ����ʸ���͹����˸�ʱ�������������ϵľ�����
	*/
	void applyForce(Vector3D force)
	{
		this->force += force;					// �ⲿ����ӵ�����������
	}

	/*
	void init() ��������ֵ����Ϊ��
	*/
	void init()
	{
		force.x = 0;
		force.y = 0;
		force.z = 0;
	}

	/*
	void simulate(float dt) ��������ʱ��仯��dt���������������ٶȺ���λ�á�
	����ʹ��һ�ֳ�Ϊ��ŷ����������ģ�ⷽ����ŷ��������������׼ȷ�����Ǽ򵥡�
	�������������ڳ������������Ƶ��Ϸ����֪�Ĵ��������ģ�⡣
	*/
	void simulate(float dt)
	{
		vel += (force / m) * dt;				// �仯���ٶȼӵ��ٶ���
		// �仯����ٶȣ�force / m����ʱ��仯�ɱ���

		pos += vel * dt;						// �仯��λ�üӵ�λ����
		// λ�ñ仯���ٶȳ���ʱ��仯
	}

};

// class Simulation		---> ����ģ����������������
class Simulation
{
public:
	int numOfMasses;								// �������е���������
	Mass** masses;									// ����ͨ��ָ�������档������ Mass** ��ʾһ��һά���飩

	Simulation(int numOfMasses, float m)			// ���캯������һЩ����������ֵΪ m
	{
		this->numOfMasses = numOfMasses;

		masses = new Mass * [numOfMasses];			// ����һ��ָ������

		for (int a = 0; a < numOfMasses; ++a)		// ���ǽ�����������е�ÿһ��ָ��
			masses[a] = new Mass(m);				// ����һ����Ϊָ��� Mass ������������
	}

	virtual void release()							// ɾ������������
	{
		for (int a = 0; a < numOfMasses; ++a)		// ���ǽ�ɾ������ȫ��
		{
			delete(masses[a]);
			masses[a] = NULL;
		}

		delete(masses);
		masses = NULL;
	}

	Mass* getMass(int index)
	{
		if (index < 0 || index >= numOfMasses)		// �����������������
			return NULL;							// �򷵻� NULL

		return masses[index];						// ��ȡ������������
	}

	virtual void init()								// �÷���������ÿ�������� init() ����
	{
		for (int a = 0; a < numOfMasses; ++a)		// ���ǽ���ʼ��ÿ������
			masses[a]->init();						// ���������� init() ����
	}

	virtual void solve()							// û��ʵ�֣���Ϊ������������в���Ҫ��
	{
		// �ڸ߼������У�����������ᱻ��д���һ���һЩ��������������
	}

	virtual void simulate(float dt)					// ͨ��ʱ��ı仯��������
	{
		for (int a = 0; a < numOfMasses; ++a)		// ���ǽ�����ÿ������
			masses[a]->simulate(dt);				// �����������õ��µ�λ�ú��µ��ٶ�
	}

	virtual void operate(float dt)					// ���ģ�����������
	{
		init();										// ����1����������Ϊ��
		solve();									// ����2��Ӧ����
		simulate(dt);								// ����3��ͨ��ʱ��ı仯��������
	}

};