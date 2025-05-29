#include "GL\glut.h"
#include "3rdParty/SOIL.h"													// NeHeGL��ͷ�ļ�
#include <stdio.h>
#include <stdlib.h>
#include "Physics3.h"

RopeSimulation* ropeSimulation = new RopeSimulation(
	100,
	100,  // 100���ʵ㣨������
	0.0020f,  // ÿ���ʵ������Ϊ50��
	250.0f,  // ���ӵĵ��ɳ���

	0.025f,
	0.01f,  // �����е��ɵ���������
	0.4f,  // ������Ħ������
	Vector3D(0, -9.81f, 0));  // �������ٶ�����

int InitGL(GLvoid)  // ����OpenGL�����ö����������
{
	ropeSimulation->getMass(ropeSimulation->numOfMasses - 1)->vel.z = 10.0f;

	glClearColor(1.0f, 0.7f, 0.5f, 0.0f);  // ������ɫ
	glClearDepth(1.0f);  // ������Ȼ�����
	glShadeModel(GL_SMOOTH);  // ʹ��ƽ����ɫ
	glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);  // ����͸�Ӽ���Ϊ��׼ȷ�ķ�ʽ

	return true;  // ��ʼ���ɹ�
}

void Deinitialize(void)  // �û��Զ���ķ���ʼ��
{
	ropeSimulation->release();  // �ͷ�����ģ��
	delete(ropeSimulation);  // ɾ������ģ��
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

	// ������ȷ��͸��
	gluPerspective(45.0f, ratio, 0.1f, 100.0f);

	// ����ģ����ͼ
	glMatrixMode(GL_MODELVIEW);
}

void Update()  // ִ���˶�����
{
	ropeSimulation->operate(0.001);
}

void renderScene(void) {
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();  // ����ģ����ͼ����

	// �����λ������ΪZ������40�ס�
	// ��Y������Ϊ������ʹ��+Xָ���Ҳ࣬+Yָ�򴰿��Ϸ���
	gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0);

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);  // �����Ļ����Ȼ�����

	// ����
	Update();

	// ��ʼ�������ӡ�
	glColor3f(1.0, 1.0, 1.0);  // ������ɫΪ��ɫ
	for (int a = 0; a < ropeSimulation->numOfMasses - 1; ++a)
	{
		Mass* mass1 = ropeSimulation->getMass(a);
		Vector3D* pos1 = &mass1->pos;

		Mass* mass2 = ropeSimulation->getMass(a + 1);
		Vector3D* pos2 = &mass2->pos;

		glLineWidth(2);
		glBegin(GL_POINTS);
		glVertex3f(pos1->x, pos1->y, pos1->z);
		glVertex3f(pos2->x, pos2->y, pos2->z);
		glEnd();
	}

	// �������ӽ�����
	glBegin(GL_QUADS);
	glColor3f(0, 0, 0);  // ��ɫ�ĸ���
	glVertex2f(-2, 3.1);  // 
	glVertex2f(-2, 3);  // 
	glVertex2f(2, 3.1);  // 
	glVertex2f(2, 3);  // 
	glEnd();

	glFlush();  // ˢ��OpenGL��Ⱦ��ˮ��

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
		// Ӧ�ó������
		Deinitialize();  // �û��Զ���ķ���ʼ��
		exit(0);
	}
}

void processSpecialKeys(int key, int x, int y) {
	Vector3D ropeConnectionVel;  // ����һ����ʱ��Vector3D
	switch (key) {
	case GLUT_KEY_RIGHT:  // �����Ҽ�ͷ����
		ropeConnectionVel.x += 1.0f;  // ��+X�����������ٶ�
		break;
	case GLUT_KEY_LEFT:  // �������ͷ����
		ropeConnectionVel.x -= 1.0f;  // ��-X�����������ٶ�
		break;
	case GLUT_KEY_UP:
		ropeConnectionVel.y += 1.0f;  // ��+y�����������ٶ�
		break;
	case GLUT_KEY_DOWN:
		ropeConnectionVel.y -= 1.0f;  // ��-y�����������ٶ�
		break;
	case GLUT_KEY_PAGE_UP:
		ropeConnectionVel.z += 1.0f;  // ��+z�����������ٶ�
		break;
	case GLUT_KEY_PAGE_DOWN:
		ropeConnectionVel.z -= 1.0f;  // ��-z�����������ٶ�
		break;
	}

	ropeSimulation->setRopeConnectionVel(ropeConnectionVel);  // ��ģ�������û�õ����������ٶ�
}

int main(int argc, char** argv) {
	// ��ʼ��GLUT����������
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(640, 640);
	glutCreateWindow("��ά����ģ��");

	// ע��ص�����
	glutDisplayFunc(renderScene);
	glutReshapeFunc(changeSize);
	glutIdleFunc(renderScene);
	//drawSquare();

	if (!InitGL()) {
		printf("Initialization Failed.");
		return false;
	}

	// ��������¼�
	glutKeyboardFunc(processNormalKeys);
	glutSpecialFunc(processSpecialKeys);

	// ����GLUT�¼�����ѭ��
	glutMainLoop();

	return 0;
}



