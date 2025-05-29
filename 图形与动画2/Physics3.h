#pragma once
#include "Physics1.h"									//Physics2.hģ����ҪPhysics1.h

class Spring											//��ʾ������Ħ���ĵ��ɰ����������Ķ��󡣵���
	//��һ���������ȣ����ɲ�ʩ���κ����ĳ��ȣ�
{
public:
	Mass* mass1;										//����һ�˵ĵ�һ������
	Mass* mass2;										//������һ�˵ĵڶ�������

	float springConstant;								//��ʾ���ɸնȵĳ���
	float springLength;									//���ɲ�ʩ�����ĳ���
	float frictionConstant;								//���ڵ�����Ħ���ĳ���

	Spring(Mass* mass1, Mass* mass2,
		float springConstant, float springLength, float frictionConstant)		//���캯��
	{
		this->springConstant = springConstant;									//���õ��ɳ���
		this->springLength = springLength;										//���õ��ɳ���
		this->frictionConstant = frictionConstant;								//����Ħ������

		this->mass1 = mass1;													//����mass1
		this->mass2 = mass2;													//����mass2
	}

	void solve()																	//solve()������Ӧ�����ķ���
	{
		Vector3D springVector = mass1->pos - mass2->pos;							//��������֮�������

		float r = springVector.length();											//��������֮��ľ���

		Vector3D e, force;															//�����Ϊ��

		if (r != 0)																	//��������㣬���r�Ƿ�Ϊ��
		{
			e = springVector / r;
			force += e * (r - springLength) * (-springConstant);	//��������ӵ�����

			force += -e * (mass1->vel * e - mass2->vel * e) * frictionConstant;						//Ħ������ӵ�����,ͨ������ӣ����ǵõ����ɵľ���			
		}
		mass1->applyForce(force);													//��Ӧ����mass1
		mass2->applyForce(-force);													//�����෴����Ӧ����mass2
	}

};

/*
RopeSimulation��������Simulation�ࣨ�μ�Physics1.h������ģ��һ�����ӣ�������ʹ�õ��ɰ󶨵ĵ�״������ɡ�
���ɾ�����Ħ�����������ȡ����ӵ�һ���ڿռ��й̶���һ����Ϊ��Vector3D ropeConnectionPos���ĵ��ϡ�
��������ͨ��һ����Ϊ��void setRopeConnectionVel(Vector3D ropeConnectionVel)���ķ������ⲿ�ƶ���RopeSimulation
��������Ħ����һ�����߷���Ϊ+y��ƽ����棨����棩��RopeSimulationʵ�����������ʩ�ӵ������ڴ����У�������汻��Ϊ��ground����
*/
class RopeSimulation : public Simulation				//ģ��������ƽ�����Ϳ��������Ķ���
{
public:
	Spring** springs;									//�������ĵ��ɣ���Ҫ[numOfMasses - 1]����

	Vector3D gravitation;								//�������ٶȣ�������Ӧ��������������

	Vector3D ropeConnectionPos;							//��������ϵͳ�е�һ������������Ϊ0��������λ�õĿռ��е�

	Vector3D ropeConnectionVel;						//�����ƶ�ropeConnectionPos�ı�����ͨ����������ǿ��԰ڶ����ӣ�

	int numOfMassesWidth;
	int numOfMassesHeight;
	RopeSimulation(										//һ����11�������ĳ����캯���ڴ˿�ʼ
		int numOfMassesWidth,
		int numOfMassesHeight,//1. ����������
		float m,										//2. ÿ������������
		float springConstant,							//3. ���ɸն�
		float springLength,
		float springYOffset,//4. ���ɲ�ʩ�����ĳ���
		float springFrictionConstant,					//5. ������Ħ������
		Vector3D gravitation							//6. �������ٶ�

	) : Simulation(numOfMassesWidth* numOfMassesHeight, m)					//���ഴ��ÿ������������m
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
		int springsindex = 0;		//Ϊ���ɴ���[numOfMasses - 1]��ָ��
		//������numOfMasses����Ҫ[numOfMasses - 1]�����ɣ�
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

	void release()										//����release()����Ϊ������Ҫɾ���ĵ���
	{
		Simulation::release();							//�ó����ͷ��Լ�

		for (int a = 0; a < numOfMasses - 1; ++a)		//��ʼѭ��ɾ�����е���
		{
			delete(springs[a]);
			springs[a] = NULL;
		}

		delete(springs);
		springs = NULL;
	}

	void solve()										//����solve()����Ϊ������ҪӦ�õ���
	{
		int a;
		for (a = 0; a < (numOfMassesWidth) * (numOfMassesHeight - 1) * 2; ++a)		//Ӧ�����е��ɵ���
		{
			springs[a]->solve();						//����Ϊ"a"�ĵ���Ӧ��Ӧ������
		}

		for (a = 0; a < numOfMasses; ++a)				//��ʼѭ��Ӧ�ö�����������ͨ�õ���
		{
			masses[a]->applyForce(gravitation * masses[a]->m);				//����
		}
	}

	void simulate(float dt)								//����simulate(float dt)����Ϊ������ģ��ropeConnectionPos���˶�
	{
		Simulation::simulate(dt);						//���ཫģ������

		ropeConnectionPos += ropeConnectionVel * dt;	//����ropeConnectionPos��λ��

		masses[0]->pos = ropeConnectionPos + Vector3D(-2, 3, 0);				//����Ϊ"0"������Ӧ��λ��ropeConnectionPos��
		masses[0]->vel = ropeConnectionVel;				//�������ٶ�����Ϊ��ropeConnectionVel���

		masses[numOfMasses - numOfMassesWidth]->pos = ropeConnectionPos - Vector3D(-2, -3, 0);
		masses[numOfMasses - numOfMassesWidth]->vel = ropeConnectionVel;
	}

	void setRopeConnectionVel(Vector3D ropeConnectionVel)	//����ropeConnectionVel�ķ���
	{
		this->ropeConnectionVel = ropeConnectionVel;
	}

};
