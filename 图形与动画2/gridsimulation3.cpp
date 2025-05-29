#include "GL\glut.h"
#include "3rdParty/SOIL.h"													// NeHeGL的头文件
#include <stdio.h>
#include <stdlib.h>
#include "Physics3.h"

RopeSimulation* ropeSimulation = new RopeSimulation(
	100,
	100,  // 100个质点（质量）
	0.0020f,  // 每个质点的重量为50克
	250.0f,  // 绳子的弹簧常数

	0.025f,
	0.01f,  // 绳子中弹簧的正常长度
	0.4f,  // 弹簧内摩擦常数
	Vector3D(0, -9.81f, 0));  // 重力加速度向量

int InitGL(GLvoid)  // 所有OpenGL的设置都在这里进行
{
	ropeSimulation->getMass(ropeSimulation->numOfMasses - 1)->vel.z = 10.0f;

	glClearColor(1.0f, 0.7f, 0.5f, 0.0f);  // 背景颜色
	glClearDepth(1.0f);  // 设置深度缓冲区
	glShadeModel(GL_SMOOTH);  // 使用平滑着色
	glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);  // 设置透视计算为最准确的方式

	return true;  // 初始化成功
}

void Deinitialize(void)  // 用户自定义的反初始化
{
	ropeSimulation->release();  // 释放绳子模拟
	delete(ropeSimulation);  // 删除绳子模拟
	ropeSimulation = NULL;
}

void changeSize(int w, int h) {
	// 防止除以零，当窗口太短时（不能创建宽度为零的窗口）。
	if (h == 0)
		h = 1;
	float ratio = w * 1.0 / h;

	// 使用投影矩阵
	glMatrixMode(GL_PROJECTION);

	// 重置矩阵
	glLoadIdentity();

	// 设置视口为整个窗口
	glViewport(0, 0, w, h);

	// 设置正确的透视
	gluPerspective(45.0f, ratio, 0.1f, 100.0f);

	// 返回模型视图
	glMatrixMode(GL_MODELVIEW);
}

void Update()  // 执行运动更新
{
	ropeSimulation->operate(0.001);
}

void renderScene(void) {
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();  // 重置模型视图矩阵

	// 将相机位置设置为Z轴向上40米。
	// 将Y轴设置为正方向，使得+X指向右侧，+Y指向窗口上方。
	gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0);

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);  // 清除屏幕和深度缓冲区

	// 更新
	Update();

	// 开始绘制绳子。
	glColor3f(1.0, 1.0, 1.0);  // 设置颜色为红色
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

	// 绘制绳子结束。
	glBegin(GL_QUADS);
	glColor3f(0, 0, 0);  // 黑色的杆子
	glVertex2f(-2, 3.1);  // 
	glVertex2f(-2, 3);  // 
	glVertex2f(2, 3.1);  // 
	glVertex2f(2, 3);  // 
	glEnd();

	glFlush();  // 刷新OpenGL渲染流水线

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
		// 应用程序结束
		Deinitialize();  // 用户自定义的反初始化
		exit(0);
	}
}

void processSpecialKeys(int key, int x, int y) {
	Vector3D ropeConnectionVel;  // 创建一个临时的Vector3D
	switch (key) {
	case GLUT_KEY_RIGHT:  // 按下右箭头键？
		ropeConnectionVel.x += 1.0f;  // 在+X方向上增加速度
		break;
	case GLUT_KEY_LEFT:  // 按下左箭头键？
		ropeConnectionVel.x -= 1.0f;  // 在-X方向上增加速度
		break;
	case GLUT_KEY_UP:
		ropeConnectionVel.y += 1.0f;  // 在+y方向上增加速度
		break;
	case GLUT_KEY_DOWN:
		ropeConnectionVel.y -= 1.0f;  // 在-y方向上增加速度
		break;
	case GLUT_KEY_PAGE_UP:
		ropeConnectionVel.z += 1.0f;  // 在+z方向上增加速度
		break;
	case GLUT_KEY_PAGE_DOWN:
		ropeConnectionVel.z -= 1.0f;  // 在-z方向上增加速度
		break;
	}

	ropeSimulation->setRopeConnectionVel(ropeConnectionVel);  // 在模拟中设置获得的绳索连接速度
}

int main(int argc, char** argv) {
	// 初始化GLUT并创建窗口
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(640, 640);
	glutCreateWindow("二维网格模拟");

	// 注册回调函数
	glutDisplayFunc(renderScene);
	glutReshapeFunc(changeSize);
	glutIdleFunc(renderScene);
	//drawSquare();

	if (!InitGL()) {
		printf("Initialization Failed.");
		return false;
	}

	// 处理键盘事件
	glutKeyboardFunc(processNormalKeys);
	glutSpecialFunc(processSpecialKeys);

	// 进入GLUT事件处理循环
	glutMainLoop();

	return 0;
}



