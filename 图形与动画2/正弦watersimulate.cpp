#include "GL\glut.h"
#include "3rdParty/SOIL.h"	
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <vector>

#define PI 3.14159f\

struct Vector3 {
	float x;
	float y;
	float z;
};

float amplitude[3] = {0.03,0.03,0.02};
float wavelength[3] = {0.3,0.3,0.3};
float speed[3] = {-0.2,-0.1,0.1};
float center[3][2] = { {0.0,-1.01},{1.01,0.0},{0.0,1.01}
								};
const int RESOLUTION = 20.0;
GLfloat LightAmbient[] = { 0.9f,0.9f,0.9f,1.0f };
GLfloat LightDiffuse[] = { 0.9f,0.9f,0.9f,1.0f };
GLfloat LightPosition[] = { 1.0f,1.0f,0.5f,0.0f };
int left_click, right_click;
float ox = 0.0f, oy = 0.0f;
GLuint caustic_texture;
static float rotate_x = 30;
static float rotate_y = 15;
static float translate_z = 4;
int wire_frame = 1;
int normals = 1;
int numWaves = 3;
//网格大小由常量 RESOLUTION 指定，水面网格大小定为 RESOLUTION*(RESOLUTION+1)
static float surface[6 * RESOLUTION * (RESOLUTION + 1)];
static float normal[6 * RESOLUTION * (RESOLUTION + 1)];


//水面高度
float dot(int i,float x,float y){
	float cx = x - center[i][0];
	float cy = y - center[i][1];
	return sqrt(cx * cx + cy * cy);
}

float wave(int i,float x, float y, float time) {
	float frequency = 2 * PI / wavelength[i];
	float phase = speed[i] * frequency;
	float theta = dot(i,x, y);
	return amplitude[i] * sin(theta * frequency + time * phase);
}
float waveHeight(float x, float y, float time) {
	float height = 0.0;
	for (int i = 0; i < numWaves; i++)
		height += wave(i, x, y, time);
	return height;
}
//法线计算
float dWavedx(int i,float x, float y, float time) {
	float frequency = 2 * PI / wavelength[i];
	float phase = speed[i] * frequency;
	float theta = dot(i,x, y);
	float A = amplitude[i] * x * frequency / theta;
	return A * cos(theta * frequency + time * phase);
}

float dWavedy(int i,float x, float y, float time) {
	float frequency = 2 * PI / wavelength[i];
	float phase = speed[i] * frequency;
	float theta = dot(i,x, y);
	float A = amplitude[i] * y * frequency / theta;
	return A * cos(theta * frequency + time * phase);
}

Vector3 waveNormal(float x, float y, float time) {//函数 waveNormal 根据函数 dWavedx 和 dWavedy 计算得到法线
	float dx = 0.0;
	float dy = 0.0;
	for (int i = 0; i < numWaves; i++) {
		dx += dWavedx(i, x, y, time);
		dx += dWavedy(i, x, y, time);
	}
	Vector3 n;
	n.x = -dx;
	n.y = 1.0;
	n.z = -dy;

	float l = sqrt(n.x * n.x + n.y * n.y + n.z + n.z);
	if (l != 0) {
		n.x /= l;
		n.y /= l;
		n.z /= l;
	}
	else {
		n.x = 0;
		n.y = 1;
		n.z = 0;
	}
	return n;
}

void renderScene(void)
{
	const float t = glutGet(GLUT_ELAPSED_TIME) / 1000.;
	const float delta = 2. / RESOLUTION;
	const unsigned int length = 2 * (RESOLUTION + 1);
	const float xn = (RESOLUTION + 1) * delta + 1;
	unsigned int i;
	unsigned int j;
	float x;
	float y;
	unsigned int indice;
	unsigned int preindice;

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	glLoadIdentity();
	glTranslatef(0, 0, -translate_z);
	glRotatef(rotate_y, 1, 0, 0);
	glRotatef(rotate_x, 0, 1, 0);

	/* Vertices */
	for (j = 0; j < RESOLUTION; j++)
	{
		y = (j + 1) * delta - 1;
		for (i = 0; i <= RESOLUTION; i++)
		{
			indice = 6 * (i + j * (RESOLUTION + 1));

			x = i * delta - 1;
			surface[indice + 3] = x;
			surface[indice + 4] = waveHeight(x, y, t);
			surface[indice + 5] = y;
			if (j != 0)
			{
				/* Values were computed during the previous loop */
				preindice = 6 * (i + (j - 1) * (RESOLUTION + 1));
				surface[indice] = surface[preindice + 3];
				surface[indice + 1] = surface[preindice + 4];
				surface[indice + 2] = surface[preindice + 5];
			}
			else
			{
				surface[indice] = x;
				surface[indice + 1] = waveHeight(x, -1, t);
				surface[indice + 2] = -1;
			}
			/* Normals */
			Vector3 n = waveNormal(surface[indice], surface[indice + 2], t);
			normal[indice] = n.x;
			normal[indice + 1] = n.y;
			normal[indice + 2] = n.z;

			n = waveNormal(surface[indice + 3], surface[indice + 5], t);
			normal[indice + 3] = n.x;
			normal[indice + 4] = n.y;
			normal[indice + 5] = n.z;

		}
	}


	/* The ground */
	glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
	glColor4f(1.0f, 0.9f, 0.7f, 1.0f);
	glBegin(GL_QUADS);
	glNormal3f(0.0f, 1.0f, 0.0f);
	glVertex3f(-1.0f, 0.0f, -1.0f);
	glVertex3f(-1.0f, 0.0f, 1.0f);
	glVertex3f(1.0f, 0.0f, 1.0f);
	glVertex3f(1.0f, 0.0f, -1.0f);
	glEnd();

	glTranslatef(0, 0.2, 0);

	/* Render wireframe? */
	if (wire_frame != 0)
		glPolygonMode(GL_FRONT_AND_BACK, GL_LINE);


	/* The water */
	//glEnable(GL_TEXTURE_2D);
	glColor4f(0.0f, 0.5f, 1.0f, 1.0f);
	glEnableClientState(GL_NORMAL_ARRAY);
	glEnableClientState(GL_VERTEX_ARRAY);
	glNormalPointer(GL_FLOAT, 0, normal);
	glVertexPointer(3, GL_FLOAT, 0, surface);
	for (i = 0; i < RESOLUTION; i++)
		glDrawArrays(GL_TRIANGLE_STRIP, i * length, length);

	/* Draw normals? */
	if (normals != 0)
	{
		glDisable(GL_TEXTURE_2D);
		glColor3f(1, 0, 0);
		glBegin(GL_LINES);
		for (j = 0; j < RESOLUTION; j++)
			for (i = 0; i <= RESOLUTION; i++)
			{
				indice = 6 * (i + j * (RESOLUTION + 1));
				glVertex3fv(&(surface[indice]));
				glVertex3f(surface[indice] + normal[indice] / 50,
					surface[indice + 1] + normal[indice + 1] / 50,
					surface[indice + 2] + normal[indice + 2] / 50);
			}
		glEnd();
	}

	/* End */
	glutSwapBuffers();
	glutPostRedisplay();
}

int LoadGLTextures() {
	caustic_texture = SOIL_load_OGL_texture
	(
		"E:/计算机图形学/第二学期/实验5/实验五/reflection.jpg",
		SOIL_LOAD_AUTO,
		SOIL_CREATE_NEW_ID,
		SOIL_FLAG_INVERT_Y
	);

	if (caustic_texture == 0) {
		return false;
	}

	glBindTexture(GL_TEXTURE_2D, caustic_texture);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
	
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);
	glEnable(GL_TEXTURE_GEN_S);
	glEnable(GL_TEXTURE_GEN_T);
	glTexGeni(GL_S, GL_TEXTURE_GEN_MODE, GL_SPHERE_MAP);
	glTexGeni(GL_T, GL_TEXTURE_GEN_MODE, GL_SPHERE_MAP);

	return true;
}

int InitGL() {
	if (!LoadGLTextures())
	return false;
	glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
	glClearDepth(1.0f);
	glEnable(GL_DEPTH_TEST);
	glDepthFunc(GL_LEQUAL);
	glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);

	glLightfv(GL_LIGHT1, GL_AMBIENT,LightAmbient);
	glLightfv(GL_LIGHT1,GL_DIFFUSE, LightDiffuse);
	glLightfv(GL_LIGHT1, GL_POSITION, LightPosition);
	glEnable(GL_LIGHT1);
	glEnable(GL_LIGHTING);

	glColorMaterial(GL_FRONT, GL_DIFFUSE);
	glEnable(GL_COLOR_MATERIAL);
	return true;
}

void changeSize(int w, int h) {
	if (h == 0)
		h = 1;
	float ratio = w * 1.0 / h;
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glViewport(0, 0, w, h);
	gluPerspective(45, ratio, 1, 100);
	glMatrixMode(GL_MODELVIEW);
	glutPostRedisplay();
}

void Keyboard(unsigned char key, int x, int y) {
	switch (key){

		case 'q':case 27:
			exit(0);
			break;
		case 'l': //控制网格显示
			wire_frame = !wire_frame;
			break;
		case 'n':  //控制水面高度点的法线显示
			normals = !normals;
			break;
	
	}
}

void Mouse(int button, int state, int x, int y) {
	if (GLUT_LEFT_BUTTON == button)
		left_click = state;
	if (GLUT_RIGHT_BUTTON == button)
		right_click = state;
	ox = x;
	oy = y;
}

void mouseMotion(int x, int y)//接下来实现 mouseMotion 函数。该函数功能如下：- 按下鼠标左键时，控制物体围绕 x，y 轴旋转；- 按下鼠标右键，控制物体沿着 z 轴平移，起到放大缩小的作用；
{
	if (GLUT_DOWN == left_click)
	{
		rotate_y = rotate_y + (y - oy) / 5.0;
		rotate_x = rotate_x + (x - ox) / 5.0;
		if (rotate_y > 90)
			rotate_y = 90;
		if (rotate_y < -90)
			rotate_y = -90;
		glutPostRedisplay();
	}
	if (GLUT_DOWN == right_click)
	{
		translate_z = translate_z + (oy - y) / 50;
		
		if (translate_z < 0.5)
			translate_z = 0.5;
		if (translate_z > 10)
			translate_z = 10;
		glutPostRedisplay();
	}
	ox = x;
	oy = y;
}



int main(int argc, char** argv) {
	glutInit(&argc, argv);//初始化glut  （可不写默认）
	glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);//显示模式初始化 RGB显示模式，单缓冲模式
	glutInitWindowPosition(100, 100);//窗口窗口位置  （可不写默认）
	glutInitWindowSize(500, 500);//窗口大小  （可不写默认）
	glutCreateWindow("水模拟");//窗口名称

	if (!InitGL()) {
		printf("Initialization Failed.");
		return false;
	}

	glutDisplayFunc(renderScene);
	glutReshapeFunc(changeSize);
	
	glutKeyboardFunc(Keyboard);
	glutMouseFunc(Mouse);
	glutMotionFunc(mouseMotion);
	glutMainLoop();
	return 0;

}