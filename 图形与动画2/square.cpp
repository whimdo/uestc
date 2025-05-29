#include <GL/glut.h>
#include <stdlib.h>

GLfloat x = 0.0f;
GLfloat y = 0.0f; 
GLfloat rsize = 25;

GLfloat xstep = 1.0f;
GLfloat ystep = 1.0f;
GLfloat windowWidth;
GLfloat windowHeight;


void RenderScene(void) {
	glClear(GL_COLOR_BUFFER_BIT);
	glColor3f(1.0f, 0.0f, 0.0f);
	glRectf(x, y, x + rsize, y - rsize);
	glutSwapBuffers();
}
void SetupRC(void) {
	glClearColor(0.0f, 0.0f, 1.0f, 1.0f);
}
void TimerFunction(int value) {
	if (x > windowWidth - rsize || x < -windowWidth)
		xstep = -xstep;
	if (y > windowHeight || y < -windowHeight + rsize)
		ystep = -ystep;
	x += xstep;
	y += ystep;

	if (x > (windowWidth - rsize + xstep))
		x = windowWidth - rsize - 1;
	else if (x < -(windowWidth + xstep))
		x = -windowWidth - 1;

	if (y > (windowHeight + ystep))
		y = windowHeight - 1;
	else if (y < -(windowHeight - rsize + ystep))
		y = -windowHeight + rsize - 1;
	glutPostRedisplay();
	glutTimerFunc(33, TimerFunction, 1);
}
void ChangeSize(int w, int h) {
	GLfloat aspectRatio;

	if (h == 0)
		h = 1;
	glViewport(0, 0, w, h);
	glMatrixMode(GL_PROJECTION); 
	glLoadIdentity();
	aspectRatio = (GLfloat)w /(GLfloat)h;
	if (w <= h) {
		windowWidth = 100;
		windowHeight = 100 / aspectRatio;
		glOrtho(-100.0, 100.0, -windowHeight, windowHeight, 1.0, -1.0);
	}
	else {
		windowWidth = 100 * aspectRatio;
		windowHeight = 100;
		glOrtho(-windowWidth, windowWidth, -100.0, 100.0, 1.0,-1.0);
	}
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
}

int main(int argc, char* argv[]) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
	glutInitWindowSize(800, 600);
	glutCreateWindow("�߽���ײ");
	glutDisplayFunc(RenderScene);
	glutReshapeFunc(ChangeSize);
	glutTimerFunc(33, TimerFunction, 1);
	SetupRC();
	glutMainLoop();
	return 0;
}
