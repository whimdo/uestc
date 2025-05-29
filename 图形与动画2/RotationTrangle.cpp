

#include <GL/glut.h>
#include <stdlib.h>
GLfloat angle = 0.0;
GLfloat red = 1.0f, green = 1.0f, blue = 1.0f;
GLfloat rotatingspeed = 2.0f;

void renderScene(void)
{
	glClear(GL_COLOR_BUFFER_BIT);//清空色彩缓存区

	glPushMatrix();
	glRotatef(angle, 0.0f, 1.0f, 0.0f);

	glColor3f(red, green, blue);
	glBegin(GL_TRIANGLES);
		glVertex3f(-1.0, -1.0, 0.0);
		glVertex3f(1.0, 0.0, 0.0);
		glVertex3f(0.0, 1.0, 0.0);
	glEnd();
	glPopMatrix();
	glutSwapBuffers();
	glFlush();
}
void SetupRC(void)
{
	glClearColor(0.0f, 0.0f, 1.0f, 1.0f);
	glColor3f(0.2f, 0.0f, 0.2f);
}
void changeSize(int w, int h)
{
	GLfloat aspectRatio;
	if (h == 0) h = 1;

	glViewport(0, 0, w, h);

	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	aspectRatio = (GLfloat)w / (GLfloat)h;

	if (w <= h)
		glOrtho(-1.0, 1.0, -1.0 / aspectRatio, 1.0 / aspectRatio, 1.0, -1.0);
	else
		glOrtho(-1.0 * aspectRatio, 1.0 * aspectRatio, -1.0, 1.0, 1.0, -1.0);
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
}
void TimerFunction(int value) {
	angle += rotatingspeed;
	glutPostRedisplay();
	glutTimerFunc(23, TimerFunction, 1);
}
void processNormalKeys(unsigned char key, int x, int y) {
	if (key == 27)
		exit(0);
}
void processSpecialKeys(int key, int x, int y) {
	switch (key) {
	case GLUT_KEY_F1:
		red = 1.0;
		green = 0.0;
		blue = 0.0;
		break;
	case GLUT_KEY_F2:
		red = 0.0;
		green = 1.0;
		blue = 0.0;
		break;
	case GLUT_KEY_F3:
		red = 0.0;
		green = 0.0;
		blue = 0.0;
		break;
	case GLUT_KEY_LEFT: // 按下左键降低旋转速度
		rotatingspeed -= 0.5f;
		break;
	case GLUT_KEY_RIGHT: // 按下右键增加旋转速度
		rotatingspeed += 0.5f;
		break;
	}
}

int main(int argc, char* argv[])
{
	glutInit(&argc, argv);//初始化glut  （可不写默认）
	glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE);//显示模式初始化 RGB显示模式，单缓冲模式
	glutInitWindowPosition(100, 100);//窗口窗口位置  （可不写默认）
	glutInitWindowSize(400, 400);//窗口大小  （可不写默认）
	glutCreateWindow("键盘控制三角形颜色与旋转速度");//窗口名称
	
	glutDisplayFunc(renderScene);
	glutReshapeFunc(changeSize);
	glutTimerFunc(23, TimerFunction, 1);

	glutKeyboardFunc(processNormalKeys);
	glutSpecialFunc(processSpecialKeys);
	SetupRC();
	glutMainLoop();
	return 0;
}

