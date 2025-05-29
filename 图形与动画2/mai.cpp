#include  "3rdParty/SOIL.h"
#include <GL/glut.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>


#define	MAX_PARTICLES	500        	// Number of particles to create
#define PI              3.14159f
#define RHO             50
#define LIFE            3.0f
#define TIME            0.01f

float windowHeight, windowWidth;
GLuint texture[2];
GLfloat size = 50.0f;

typedef struct						// Create a Structure for Particle
{
	float	life;					// Particle Life
	float   init_life;
	float	speed_aging;			// Aging speed

	//粒子颜色
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

	float texCoords[4][2];
	float flag;

}
particle;							// Particles structure

particle particles[MAX_PARTICLES];	// Particle array (Room for particle info)



//当窗口改变大小时由GLUT函数库调用
void ChangeSize(int w, int h)
{
	float aspectRatio;

	//防止被0所除
	if (h == 0) h = 1;

	//把视口设置为窗口的大小
	glViewport(0, 0, w, h);

	//重置坐标系统
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	//建立剪裁区域（左、右、底、顶、近、远）
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


int InitPaticleSystem(void)
{
	float theta, phi, rho;

	for (int i = 0; i < MAX_PARTICLES; i++)				         // Initials all particles
	{
		particles[i].flag = 0;
		particles[i].init_life = LIFE + rand() % 10 / 10.0;		    // Give All The Particles Full Life
		particles[i].life = particles[i].init_life;
		particles[i].speed_aging = float(rand() % 20) / 1000.0f + 0.003;

		particles[i].x = -50.0f;								   // Set position for particle
		particles[i].y = 20.0f;
		particles[i].z = 0.0f;

		theta = (rand() % 360) * PI / 180;
		phi = (rand() % 180) * PI / 180;
		rho = rand() % 100;
		particles[i].v_x = float(sinf(phi) * cosf(theta) * rho);  // Set X Axis Speed And Direction for particle
		particles[i].v_y = float(sinf(phi) * sin(theta) * rho);	  // Set Y Axis Speed And Direction for particle
		particles[i].v_z = float(cosf(phi) * rho);                // Set Z Axis Speed And Direction for particle

		if (particles[i].y < (-windowHeight / 2) && particles[i].flag == 0) {
			particles[i].v_y = -(particles[i].v_y) / ((rand() % 4) + 1.4);
			particles[i].flag = 1;
		}


		//加速度
		particles[i].a_x = 0.0f;							// Set X Axis acceleration
		particles[i].a_y = -100.0f;							// Set Y Axis acceleration
		particles[i].a_z = 0.0f;							// Set Z Axis acceleration
	}

	return true;
}

void RenderScene(void) {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);		  // Clear screen and depth buffer

	glEnable(GL_TEXTURE_2D);
	glBindTexture(GL_TEXTURE_2D, texture[0]);
	glPushMatrix();
	for (int i = 0; i < MAX_PARTICLES; i++)					         // All particles
	{
		float x = particles[i].x;						        // Position of particle
		float y = particles[i].y;
		float z = particles[i].z;

		//绘制正方形粒子
		glBegin(GL_TRIANGLE_STRIP); // Build Quad From A Triangle Strip
		glTexCoord2d(1, 1); glVertex3f(x + 0.5f, y + 0.5f, z); // Top Right
		glTexCoord2d(0, 1); glVertex3f(x - 0.5f, y + 0.5f, z); // Top Left
		glTexCoord2d(1, 0); glVertex3f(x + 0.5f, y - 0.5f, z); // Bottom Right
		glTexCoord2d(0, 0); glVertex3f(x - 0.5f, y - 0.5f, z); // Bottom Left
		glEnd();
	}
	glPopMatrix(); // 恢复保存的矩阵状态  
	glutSwapBuffers();
}

int LoadGLTextures() {
	texture[0] = SOIL_load_OGL_texture
	(
		"E:/CodeBase/vsproject/openglshiyan/images/Glass.bmp",
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

void Update() {

	for (int i = 0; i < MAX_PARTICLES; i++)					// All The Particles
	{
		particles[i].x += particles[i].v_x * TIME;         // update position of particle
		particles[i].y += particles[i].v_y * TIME;
		particles[i].z += particles[i].v_z * TIME;


		if (particles[i].x > windowWidth || particles[i].x < -windowWidth)
			particles[i].v_x = -(particles[i].v_x) / ((rand() % 4) + 1.4);
		if (particles[i].y > windowHeight || particles[i].y < -windowHeight)
			particles[i].v_y = -(particles[i].v_y) / ((rand() % 4) + 1.4);

		//particles[i].flag = 0;
		if (particles[i].y < (-windowHeight / 2) && particles[i].flag == 0) {
			particles[i].v_y = -(particles[i].v_y) / ((rand() % 4) + 1.4);
			particles[i].flag = 1;
		}


		particles[i].v_x += particles[i].a_x * TIME;			// update velocity
		particles[i].v_y += particles[i].a_y * TIME;
		particles[i].v_z += particles[i].a_z * TIME;

		particles[i].life -= particles[i].speed_aging;		// reduce particles life


		float theta, phi, rho;
		if (particles[i].life < 0.0f)					// if particle has reached end of life
		{
			particles[i].init_life = LIFE + rand() % 10 / 10.0;		// Give it new life
			particles[i].life = particles[i].init_life;

			particles[i].x = -80.0f;						// Initialize position
			particles[i].y = 80.0f;
			particles[i].z = 0.0f;


			theta = (rand() % 360) * PI / 180;
			phi = 90 * PI / 180;
			rho = rand() % RHO;
			particles[i].v_x = float(sinf(phi) * cosf(theta) * rho) + 100;// Initialize velocity
			if (particles[i].v_x < 0)
				particles[i].v_x = -particles[i].v_x;
			particles[i].v_y = float(sinf(phi) * sin(theta) * rho);
			particles[i].v_z = float(cosf(phi) * rho);
		}
	}
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

int main(int argc, char** argv) {

	// init GLUT and create window
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DEPTH | GLUT_DOUBLE | GLUT_RGBA);
	glutInitWindowPosition(100, 100);
	glutInitWindowSize(640, 640);
	glutCreateWindow("Particle system");

	if (!InitGL()) {
		printf("Initialization Failed.");
		return false;
	}

	// register callbacks
	glutDisplayFunc(RenderScene);
	glutReshapeFunc(ChangeSize);
	glutTimerFunc(10, TimerFunction, 1);

	// Setup the rendering state
	SetupRC();
	InitPaticleSystem();


	// enter GLUT event processing loop
	glutMainLoop();

	return 0;
}