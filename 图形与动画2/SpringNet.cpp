/**************************************************************************

  File: Lesson40.cpp

  Based on Jeff Molofee's Basecode Example

  Modified by Erkin Tunca for nehe.gamedev.net

**************************************************************************/


#include <GL/glut.h>	// 包含NeHeGL的头文件
#include <stdio.h>
#include <stdlib.h>
#include "Physics2.h"	// 包含Physics2.h的头文件

/*
  class RopeSimulation 是从类 Simulation （请参见 Physics1.h）派生而来的。它模拟一个带有点状粒子和弹簧的绳子。弹簧具有内部摩擦和正常长度。
  绳子的一端稳定在空间中的一个被称为“Vector3D ropeConnectionPos”的点上。可以通过方法 "void setRopeConnectionVel(Vector3D ropeConnectionVel)" 
  外部移动此点。RopeSimulation 创建空气摩擦和一个法线指向 +y 方向的平面表面（或地面）。RopeSimulation 实现了这个表面施加的力。
  在代码中，该表面被称为“ground”。
*/
RopeSimulation* ropeSimulation = new RopeSimulation(
	80,						// 80个粒子（质点）
	0.05f,					// 每个粒子的重量为50克
	500.0f,				// 绳子的弹簧常数
	0.05f,					// 弹簧的正常长度
	0.2f,					// 弹簧内部摩擦系数
	Vector3D(0, -9.81f, 0)); // 重力加速度

int InitGL(GLvoid)	// 所有 OpenGL 的设置都在这里
{
	ropeSimulation->getMass(ropeSimulation->numOfMasses - 1)->vel.z = 10.0f;

	glClearColor(0.0f, 0.0f, 0.0f, 0.5f);	// 黑色背景
	glClearDepth(1.0f);	// 设置深度缓冲区
	glShadeModel(GL_SMOOTH);	// 选择平滑着色
	glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);	// 设置透视计算为最准确的

	return true;	// 初始化成功
}

void Deinitialize(void)	// 在这里进行任何用户自定义的去初始化操作
{
	ropeSimulation->release();	// 释放 ropeSimulation
	delete(ropeSimulation);	// 删除 ropeSimulation
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

	// 设置正确的透视投影。
	gluPerspective(45.0f, ratio, 0.1f, 100.0f);

	// 返回模型视图
	glMatrixMode(GL_MODELVIEW);
}

void Update()	// 执行运动更新
{
	ropeSimulation->operate(0.001);
}

void renderScene(void) {

	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();	// 重置模型视图矩阵

	// 将相机定位在 Z 轴上方 40 米处。
	// 将上方向设置为 Y 方向，使得 +X 指向右侧，+Y 指向窗口上方。
	gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0);

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);	// 清除屏幕和深度缓冲区

	// 更新
	Update();

	// 开始绘制绳子。
	glColor3ub(255, 255, 0);	// 设置颜色为黄色
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
	// 绘制绳子结束。

	glFlush();	// 刷新 GL 渲染管线

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

		// 应用结束
		Deinitialize();	// 用户定义的去初始化

		exit(0);
	}
}

void processSpecialKeys(int key, int x, int y) {

	Vector3D ropeConnectionVel;	// 创建一个临时的 Vector3D
	switch (key) {
	case GLUT_KEY_RIGHT:	// 右箭头是否按下？
		ropeConnectionVel.x += 1.0f;	// 在 +X 方向上添加速度
		break;
	case GLUT_KEY_LEFT:	// 左箭头是否按下？
		ropeConnectionVel.x -= 1.0f;	// 在 -X 方向上添加速度
		break;
	case GLUT_KEY_UP:
		ropeConnectionVel.y += 1.0f;	// 在 +Z 方向上添加速度
		break;
	case GLUT_KEY_DOWN:
		ropeConnectionVel.y -= 1.0f;	// 在 -Z 方向上添加速度
		break;
	case GLUT_KEY_PAGE_UP:
		ropeConnectionVel.z += 1.0f;	// 在 +Y 方向上添加速度
		break;
	case GLUT_KEY_PAGE_DOWN:
		ropeConnectionVel.z -= 1.0f;	// 在 -Y 方向上添加速度
		break;
	}

	ropeSimulation->setRopeConnectionVel(ropeConnectionVel);	// 在模拟中设置所获得的 ropeConnectionVel

}

int main(int argc, char** argv) {
	// 初始化 GLUT 并创建窗口
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(320, 320);
	glutCreateWindow("Rope Simulation");

	// 注册回调函数
	glutDisplayFunc(renderScene);
	glutReshapeFunc(changeSize);
	glutIdleFunc(renderScene);

	if (!InitGL()) {
		printf("初始化失败。");
		return false;
	}

	// 处理键盘输入
	glutKeyboardFunc(processNormalKeys);
	glutSpecialFunc(processSpecialKeys);

	// 进入 GLUT 事件处理循环
	glutMainLoop();

	return 0;
}



