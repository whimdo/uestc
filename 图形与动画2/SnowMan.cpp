#include <GL/glut.h>
#include <stdlib.h>
#include<math.h>
float angle = 0.0;
float lx = 0.0f, lz = -1.0f;
float x = 0.0f, z = 5.0f;
//设置光源的强度、位置
GLfloat LightAmbient[] = { 1.0f, 1.0f, 1.0f, 1.0f };
GLfloat LightDiffuse[] = { 1.0f, 1.0f, 1.0f, 1.0f };
GLfloat LightPosition[] = { 0.0f,0.0f,2.0f,1.0f };
bool light;//是否开光
GLfloat gray[] = { 0.9f, 0.0f, 0.0f, 1.0f };

//透视投影实现窗口刷新函数
void changeSize(GLsizei w, GLsizei h) {
	GLfloat fAspect;
	//防止为0
	if (h == 0)
		h = 1;

	glViewport(0, 0, w, h);
	fAspect = (GLfloat)w / (GLfloat)h;

	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	gluPerspective(60.0f, fAspect, 1.0, 400.0);

	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
}

void drawSnowMan() {
	glColor3f(1.0f, 1.0f, 1.0f);

	GLfloat snowman_body_ambient[] = { 0.0f, 0.0f, 0.1f, 1.0f };
	GLfloat snowman_body_diffuse[] = { 0.0f, 0.0f, 0.1f, 1.0f };
	GLfloat snowman_body_specular[] = { 0.5f, 0.5f, 0.5f, 1.0f };
	GLfloat snowman_body_shininess[] = { 100.0f };

	glMaterialfv(GL_FRONT, GL_AMBIENT, snowman_body_ambient);
	glMaterialfv(GL_FRONT, GL_DIFFUSE, snowman_body_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, snowman_body_specular);
	glMaterialfv(GL_FRONT, GL_SHININESS, snowman_body_shininess);
	//身体
	glTranslatef(0.0f, 0.75f, 0.0f);
	glutSolidSphere(0.75f, 20, 20);

	//头部
	GLfloat snowman_head_ambient[] = { 0.0f, 0.1f, 0.0f, 1.0f };
	GLfloat snowman_head_diffuse[] = { 0.0f, 0.1f, 0.0f, 1.0f };
	GLfloat snowman_head_specular[] = { 0.5f, 0.5f, 0.5f, 1.0f };
	GLfloat snowman_head_shininess[] = { 100.0f };

	glMaterialfv(GL_FRONT, GL_AMBIENT, snowman_head_ambient);
	glMaterialfv(GL_FRONT, GL_DIFFUSE, snowman_head_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, snowman_head_specular);
	glMaterialfv(GL_FRONT, GL_SHININESS, snowman_head_shininess);
	glTranslatef(0.0f, 1.0f, 0.0f);
	glutSolidSphere(0.25f, 20, 20);

	//眼睛
	glPushMatrix();
	glColor3f(0.0f, 0.0f, 0.0f);
	glTranslatef(0.05f, 0.10f, 0.18f);
	glutSolidSphere(0.05f, 10, 10);
	glTranslatef(-0.1f, 0.0f, 0.0f);
	glutSolidSphere(0.05f, 10, 10);
	glPopMatrix();

	//鼻子
	glColor3f(1.0f, 0.5f, 0.5f);
	glRotatef(0.0f, 1.0f, 0.0f, 0.0f);
	glutSolidCone(0.08f, 0.5f, 10, 2);
}

void renderScene(void) {
	//清楚深度和颜色缓存
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	//重设
	glLoadIdentity();
	//设置相机
	gluLookAt(
		x, 1.0f, z,
		x + lx, 1.0f, z + lz,
		0.0f, 1.0f, 0.0f
	);

	//画地面
	glColor3f(0.9f, 0.9f, 0.9f);
	glBegin(GL_QUADS);
	glVertex3f(-100.0f, 0.0f, -100.0f);
	glVertex3f(-100.0f, 0.0f, 100.0f);
	glVertex3f(100.0f, 0.0f, 100.0f);
	glVertex3f(100.0f, 0.0f, -100.0f);
	glEnd();

	//画36雪人
	for(int i = -3;i<3;i++)
		for (int j = -3; j < 3; j++) {
			glPushMatrix();
			glTranslatef(i * 10.0, 0, j * 10.0);
			drawSnowMan();
			glPopMatrix();
		}
	glutSwapBuffers();
}

void processNormalKeys(unsigned char key, int x, int y) {
	switch (key) {
		case 27:
			exit(0);
			break;
		case '1':
			light = !light;
			light ? glEnable(GL_LIGHTING) : glDisable(GL_LIGHTING);
			break;
	}
	;
}

void processSpecialKeys(int key, int xx, int yy) {
	float fraction = 0.1f;

	switch (key) {
	case GLUT_KEY_LEFT:
		angle -= 0.01f;
		lx = sin(angle);
		lz = -cos(angle);
		break;
	case GLUT_KEY_RIGHT:
		angle += 0.01f;
		lx = sin(angle);
		lz = -cos(angle);
		break;
	case GLUT_KEY_UP:
		x += lx * fraction;
		z += lz * fraction;
		break;
	case GLUT_KEY_DOWN:
		x -= lx * fraction;
		z -= lz * fraction;
		break;
	}
}

int main(int argc, char** argv) {
	//初始化glut创建窗口
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(320, 320);
	glutCreateWindow("snowman_1");

	glutDisplayFunc(renderScene);
	glutReshapeFunc(changeSize);
	glutIdleFunc(renderScene);
	glutKeyboardFunc(processNormalKeys);
	glutSpecialFunc(processSpecialKeys);

	glEnable(GL_DEPTH_TEST);
	
	//启用光照
	glEnable(GL_LIGHTING);
	glEnable(GL_LIGHT1);
	//设置光照
	glLightfv(GL_LIGHT1, GL_AMBIENT, LightAmbient);
	glLightfv(GL_LIGHT1, GL_DIFFUSE, LightDiffuse);
	glLightfv(GL_LIGHT1, GL_POSITION, LightPosition);
	
	glutMainLoop();
	return 1;
}
