/**************************************************************************

  File: Lesson40.cpp

  Based on Jeff Molofee's Basecode Example

  Modified by Erkin Tunca for nehe.gamedev.net

**************************************************************************/


#include <GL/glut.h>	// ����NeHeGL��ͷ�ļ�
#include <stdio.h>
#include <stdlib.h>
#include "Physics2.h"	// ����Physics2.h��ͷ�ļ�

/*
  class RopeSimulation �Ǵ��� Simulation ����μ� Physics1.h�����������ġ���ģ��һ�����е�״���Ӻ͵��ɵ����ӡ����ɾ����ڲ�Ħ�����������ȡ�
  ���ӵ�һ���ȶ��ڿռ��е�һ������Ϊ��Vector3D ropeConnectionPos���ĵ��ϡ�����ͨ������ "void setRopeConnectionVel(Vector3D ropeConnectionVel)" 
  �ⲿ�ƶ��˵㡣RopeSimulation ��������Ħ����һ������ָ�� +y �����ƽ����棨����棩��RopeSimulation ʵ�����������ʩ�ӵ�����
  �ڴ����У��ñ��汻��Ϊ��ground����
*/
RopeSimulation* ropeSimulation = new RopeSimulation(
	80,						// 80�����ӣ��ʵ㣩
	0.05f,					// ÿ�����ӵ�����Ϊ50��
	500.0f,				// ���ӵĵ��ɳ���
	0.05f,					// ���ɵ���������
	0.2f,					// �����ڲ�Ħ��ϵ��
	Vector3D(0, -9.81f, 0)); // �������ٶ�

int InitGL(GLvoid)	// ���� OpenGL �����ö�������
{
	ropeSimulation->getMass(ropeSimulation->numOfMasses - 1)->vel.z = 10.0f;

	glClearColor(0.0f, 0.0f, 0.0f, 0.5f);	// ��ɫ����
	glClearDepth(1.0f);	// ������Ȼ�����
	glShadeModel(GL_SMOOTH);	// ѡ��ƽ����ɫ
	glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);	// ����͸�Ӽ���Ϊ��׼ȷ��

	return true;	// ��ʼ���ɹ�
}

void Deinitialize(void)	// ����������κ��û��Զ����ȥ��ʼ������
{
	ropeSimulation->release();	// �ͷ� ropeSimulation
	delete(ropeSimulation);	// ɾ�� ropeSimulation
	ropeSimulation = NULL;
}

void changeSize(int w, int h) {

	// ��ֹ�����㣬������̫��ʱ�����ܴ������Ϊ��Ĵ��ڣ���
	if (h == 0)
		h = 1;
	float ratio = w * 1.0 / h;

	// ʹ��ͶӰ����
	glMatrixMode(GL_PROJECTION);

	// ���þ���
	glLoadIdentity();

	// �����ӿ�Ϊ��������
	glViewport(0, 0, w, h);

	// ������ȷ��͸��ͶӰ��
	gluPerspective(45.0f, ratio, 0.1f, 100.0f);

	// ����ģ����ͼ
	glMatrixMode(GL_MODELVIEW);
}

void Update()	// ִ���˶�����
{
	ropeSimulation->operate(0.001);
}

void renderScene(void) {

	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();	// ����ģ����ͼ����

	// �������λ�� Z ���Ϸ� 40 �״���
	// ���Ϸ�������Ϊ Y ����ʹ�� +X ָ���Ҳ࣬+Y ָ�򴰿��Ϸ���
	gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0);

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);	// �����Ļ����Ȼ�����

	// ����
	Update();

	// ��ʼ�������ӡ�
	glColor3ub(255, 255, 0);	// ������ɫΪ��ɫ
	for (int a = 0; a < ropeSimulation->numOfMasses - 1; ++a)
	{
		Mass* mass1 = ropeSimulation->getMass(a);
		Vector3D* pos1 = &mass1->pos;

		Mass* mass2 = ropeSimulation->getMass(a + 1);
		Vector3D* pos2 = &mass2->pos;

		glLineWidth(4);
		glBegin(GL_LINES);
		glVertex3f(pos1->x, pos1->y, pos1->z);
		glVertex3f(pos2->x, pos2->y, pos2->z);
		glEnd();
	}
	// �������ӽ�����

	glFlush();	// ˢ�� GL ��Ⱦ����

	glutSwapBuffers();
}

void processNormalKeys(unsigned char key, int x, int y) {

	if (key == 's') {
		Vector3D ropeConnectionVel;
		ropeConnectionVel.x = 0.0;
		ropeConnectionVel.y = 0.0;
		ropeConnectionVel.z = 0.0;
		ropeSimulation->setRopeConnectionVel(ropeConnectionVel);
	}
	if (key == 27) {

		// Ӧ�ý���
		Deinitialize();	// �û������ȥ��ʼ��

		exit(0);
	}
}

void processSpecialKeys(int key, int x, int y) {

	Vector3D ropeConnectionVel;	// ����һ����ʱ�� Vector3D
	switch (key) {
	case GLUT_KEY_RIGHT:	// �Ҽ�ͷ�Ƿ��£�
		ropeConnectionVel.x += 1.0f;	// �� +X ����������ٶ�
		break;
	case GLUT_KEY_LEFT:	// ���ͷ�Ƿ��£�
		ropeConnectionVel.x -= 1.0f;	// �� -X ����������ٶ�
		break;
	case GLUT_KEY_UP:
		ropeConnectionVel.y += 1.0f;	// �� +Z ����������ٶ�
		break;
	case GLUT_KEY_DOWN:
		ropeConnectionVel.y -= 1.0f;	// �� -Z ����������ٶ�
		break;
	case GLUT_KEY_PAGE_UP:
		ropeConnectionVel.z += 1.0f;	// �� +Y ����������ٶ�
		break;
	case GLUT_KEY_PAGE_DOWN:
		ropeConnectionVel.z -= 1.0f;	// �� -Y ����������ٶ�
		break;
	}

	ropeSimulation->setRopeConnectionVel(ropeConnectionVel);	// ��ģ������������õ� ropeConnectionVel

}

int main(int argc, char** argv) {
	// ��ʼ�� GLUT ����������
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(320, 320);
	glutCreateWindow("Rope Simulation");

	// ע��ص�����
	glutDisplayFunc(renderScene);
	glutReshapeFunc(changeSize);
	glutIdleFunc(renderScene);

	if (!InitGL()) {
		printf("��ʼ��ʧ�ܡ�");
		return false;
	}

	// �����������
	glutKeyboardFunc(processNormalKeys);
	glutSpecialFunc(processSpecialKeys);

	// ���� GLUT �¼�����ѭ��
	glutMainLoop();

	return 0;
}



