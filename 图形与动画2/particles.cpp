#include <GL/glut.h>
#include <math.h>
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include "3rdParty/SOIL.h"


#define	MAX_PARTICLES	200        	// Number of particles to create
#define PI              3.14159f
#define RHO             50
#define LIFE            5.0f
#define TIME            0.01f

float windowHeight, windowWidth;
float mouseX = 0.0f, mouseY = 0.0f;
float initx = 0.0f, inity = 0.0f;
GLuint texture[2];

typedef struct						// Create a Structure for Particle
{
	float	life;					// Particle Life
	float   init_life;
	float	speed_aging;			// Aging speed

	float	r;						// Red value
	float	g;						// Green value
	float	b;						// Blue value

	float	x;						// X position
	float	y;						// Y position
	float	z;						// Z position

	float	v_x;					// X velocity
	float	v_y;					// Y velocity
	float	v_z;					// Z velocity

	float	a_x;					// X acceleration
	float	a_y;					// Y acceleration
	float	a_z;					// Z acceleration

	float   size;
}
particle;							// Particles structure

particle particles[MAX_PARTICLES];	// Particle array (Room for particle info)



//�����ڸı��Сʱ��GLUT���������
void ChangeSize(int w, int h)
{
	float aspectRatio;

	//��ֹ��0����
	if (h == 0) h = 1;

	//���ӿ�����Ϊ���ڵĴ�С
	glViewport(0, 0, w, h);

	//��������ϵͳ
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	//���������������ҡ��ס���������Զ��
	aspectRatio = (float)w / (float)h;

	if (w <= h) {
		windowWidth = 100;
		windowHeight = 100 / aspectRatio;
		glOrtho(-100.0, 100.0, -windowHeight, windowHeight, 1.0, -1.0);
	}
	else {
		windowWidth = 100.0 * aspectRatio;
		windowHeight = 100;
		glOrtho(-windowWidth, windowWidth, -100.0, 100.0, 1.0, -1.0);
	}

	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
}

void MouseClick(int button, int state, int x, int y) {
	if (button == GLUT_LEFT_BUTTON && state == GLUT_DOWN) {
		// ֱ��ʹ�ô�������
		initx = x;
		inity = y;
		mouseX = (float)((float)(5.0f / 16.0f) * (float)x - 100.0f);
		mouseY =(float)((float)(-5.0f / 16.0f) * (float)y + 100.0f);
	}
}

int InitPaticleSystem(void)
{
	float theta, phi, rho;

	for (int i = 0; i < MAX_PARTICLES; i++) {
		particles[i].init_life = LIFE + rand() % 10 / 10.0;
		particles[i].life = particles[i].init_life;
		particles[i].speed_aging = TIME;

		particles[i].r = 1.0f;
		particles[i].g = 0.7f;
		particles[i].b = 0.8f;

		particles[i].x = 0.0f;
		particles[i].y = -50.0f; 
		particles[i].z = 0.0f;

		// ��ʼ�����Ӵ�С
		particles[i].size = 4.0f;

		theta = (rand() % 360) * PI / 180;
		phi = 90 * PI / 180;
		rho = rand() % RHO;
		particles[i].v_x = float(sinf(phi) * cosf(theta) * rho);	// Initialize velocity
		particles[i].v_y = float(sinf(phi) * sin(theta) * rho);
		particles[i].v_z = float(cosf(phi) * rho);
	}

	return true;
}

int LoadGLTextures() {
	texture[0] = SOIL_load_OGL_texture
	(
		"E:/CodeBase/vsproject/openglshiyan/images/1.bmp",
		SOIL_LOAD_AUTO,
		SOIL_CREATE_NEW_ID,
		SOIL_FLAG_INVERT_Y
	);

	if (texture[0] == 0) {
		return false;
		glBindTexture(GL_TEXTURE_2D, texture[0]);
		glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
		glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
	}
	return true;
}

void RenderScene(void) {
	
	//glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glClear( GL_DEPTH_BUFFER_BIT);
	// ��������
	glEnable(GL_TEXTURE_2D);
	glBindTexture(GL_TEXTURE_2D, texture[0]);
	glPushMatrix();

	// ���Ƹ����������ڵĺ�ɫ����
	glColor4f(0.0f, 0.0f, 0.0f, 0.1f); // ���ú�ɫ
	glBegin(GL_QUADS);
	glVertex2f(-windowWidth, -windowHeight);
	glVertex2f(windowWidth, -windowHeight);
	glVertex2f(windowWidth, windowHeight);
	glVertex2f(-windowWidth, windowHeight);
	glEnd();

	for (int i = 0; i < MAX_PARTICLES; i++)					         // All particles
	{
		float x = particles[i].x;						        // Position of particle
		float y = particles[i].y;
		float z = particles[i].z;

		// ���������������ڵ�����С��͸����
		float size = particles[i].size* particles[i].life / particles[i].init_life;
		float alpha = particles[i].life / particles[i].init_life;
		// Draw particle using RGB values, alpha value based on it's life
		glBindTexture(GL_TEXTURE_2D, texture[0]);
		glBegin(GL_TRIANGLE_STRIP);
		glColor4f(particles[i].r, particles[i].g, particles[i].b, alpha);
		// ������������Ͷ�������
		glTexCoord2f(0.0f, 0.0f); glVertex3f(x - size, y - size, z);
		glTexCoord2f(1.0f, 0.0f); glVertex3f(x + size, y - size, z);
		glTexCoord2f(1.0f, 1.0f); glVertex3f(x + size, y + size, z);
		glTexCoord2f(0.0f, 1.0f); glVertex3f(x - size, y + size, z);

		glEnd();
	}
	glPopMatrix(); // �ָ�����ľ���״̬ 
	
	glutSwapBuffers();

}


void Update() {
	for (int i = 0; i < MAX_PARTICLES; i++) {
		particles[i].x += particles[i].v_x * TIME;
		particles[i].y += particles[i].v_y * TIME;
		particles[i].z += particles[i].v_z * TIME;

		particles[i].v_x += particles[i].a_x * TIME;
		particles[i].v_y += (particles[i].a_y ) * TIME; // ����������ٶ�
		particles[i].v_z += particles[i].a_z * TIME;

		particles[i].life -= particles[i].speed_aging;

		// ����Ƿ���߽緢����ײ
		if (particles[i].x > windowWidth || particles[i].x < -windowWidth)
			particles[i].v_x = -particles[i].v_x;
		if (particles[i].y > windowHeight || particles[i].y < -windowHeight) {
			particles[i].v_y = -particles[i].v_y;
		}

		float theta, phi, rho;
		if (particles[i].life < 0.0f) { // ֻ��������������ʱ����
			particles[i].init_life = LIFE + rand() % 10 / 10.0;
			particles[i].life = particles[i].init_life;

			std::cout << "�任ǰ��xΪ" << initx << std::endl;
			std::cout << "�任ǰ��yΪ" << inity << std::endl;
			std::cout << "�任���xΪ"<<mouseX << std::endl;
			std::cout << "�任���yΪ" << mouseY << std::endl;
			particles[i].x = mouseX;
			particles[i].y = mouseY;
			particles[i].z = 0.0f;

			theta = (rand() % 360) * PI / 180;
			phi = 90 * PI / 180;
			rho = rand() % RHO;
			particles[i].v_x = float(sinf(phi) * cosf(theta) * rho);	// Initialize velocity
			particles[i].v_y = float(sinf(phi) * sin(theta) * rho);
			particles[i].v_z = float(cosf(phi) * rho);
		}
	}
}



int InitGL(GLvoid) {
	if (!LoadGLTextures()) {
		return false;
	}
	glShadeModel(GL_SMOOTH);
	glClearColor(0.0f, 0.0f, 0.0f, 0.5f);
	glClearDepth(1.0f);
	glDisable(GL_DEPTH_TEST);
	glEnable(GL_BLEND);
	glBlendFunc(GL_SRC_ALPHA, GL_ONE);
	glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);
	glHint(GL_POINT_SMOOTH_HINT, GL_NICEST);
	glEnable(GL_TEXTURE_2D);
	glBindTexture(GL_TEXTURE_2D, texture[0]);

	return true;
}

void TimerFunction(int value) {
	Update();
	glutPostRedisplay();
	glutTimerFunc(10, TimerFunction, 1);
}

// Setup the rendering state
void SetupRC(void)
{
	glEnable(GL_BLEND);
	glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
}

int main(int argc, char** argv) {

	// init GLUT and create window
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(640, 640);
	glutCreateWindow("����Ч��");

	if (!InitGL()) {
		printf("Initialization Failed.");
		return false;
	}
	
	// register callbacks
	glutDisplayFunc(RenderScene);
	glutReshapeFunc(ChangeSize);
	glutTimerFunc(10, TimerFunction, 1);

	glutMouseFunc(MouseClick);
	// Setup the rendering state
	SetupRC();
	InitPaticleSystem();

	// enter GLUT event processing loop
	glutMainLoop();

	return 0;
}