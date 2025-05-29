#include "E:/vstudio/ͼ��ѧʵ��1/glut.h"
#include "E:/vstudio/ͼ��ѧʵ��1/SOIL.h"													
#include <stdio.h>
#include <stdlib.h>	
#include <math.h>
#include <vector>

#define PI 3.14159f


struct Vector3 {
    float x, y, z;
};
GLuint water_texture;
float amplitude[2] = { 0.01,0.04 };//�𶯷���

float wavelength[2] = { 0.2,0.3 };//����

float speed[2] = { -0.2,-0.2 };//�����ٶ�

float center[2][2] = { {0.0,1.01},{0.0,-1.01} };//��Դ

const int RESOLUTION = 120.0;//�����ܶ�

int left_click, right_click;
float ox = 0.0f, oy = 0.0f;

static float rotate_x = 30;
static float rotate_y = 15;
static float translate_z = 4;
int wire_frame = 0;
int normals = 0;
int numWaves = 2;

static float surface[6 * RESOLUTION * (RESOLUTION + 1)];
static float normal[6 * RESOLUTION * (RESOLUTION + 1)];

GLfloat LightAmbient[] = { 1.0f, 1.0f, 1.0f, 1.0f };
GLfloat LightDiffuse[] = { 1.0f, 1.0f, 1.0f, 1.0f };
GLfloat LightPosition[] = { 1.0f, 1.0f, 0.5f, 0.0f };
GLuint image_texture1;
GLuint image_texture2;


float dot(int i, float x, float y) {
    float cx = x - center[i][0];
    float cy = y - center[i][1];
    return sqrt(cx * cx + cy * cy);
}

float wave(int i, float x, float y, float time) {
    float frequency = 2 * PI / wavelength[i];
    float phase = speed[i] * frequency;
    float theta = dot(i, x, y);
    return amplitude[i] * sin(theta * frequency + time * phase);
}

float waveHeight(float x, float y, float time) {
    float height = 0.0;
    for (int i = 0; i < numWaves; i++)
        height += wave(i, x, y, time);
    return height;
}

float dWavedx(int i, float x, float y, float time) {
    float frequency = 2 * PI / wavelength[i];
    float phase = speed[i] * frequency;
    float theta = dot(i, x, y);
    float A = amplitude[i] * x * frequency / theta;
    return A * cos(theta * frequency + time * phase);
}

float dWavedy(int i, float x, float y, float time) {
    float frequency = 2 * PI / wavelength[i];
    float phase = speed[i] * frequency;
    float theta = dot(i, x, y);
    float A = amplitude[i] * y * frequency / theta;
    return A * cos(theta * frequency + time * phase);
}

Vector3 waveNormal(float x, float y, float time) {
    float dx = 0.0;
    float dy = 0.0;
    for (int i = 0; i < numWaves; i++) {
        dx += dWavedx(i, x, y, time);
        dy += dWavedy(i, x, y, time);
    }
    Vector3 n;
    n.x = -dx;
    n.y = 5.0;
    n.z = -dy;

    float l = sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
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

void renderScene(void) {
    const float t = glutGet(GLUT_ELAPSED_TIME) / 1000.0;
    const float delta = 2.0 / RESOLUTION;
    const unsigned int length = 2 * (RESOLUTION + 1);
    unsigned int i, j;
    float x, y;
    unsigned int indice, preindice;

    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();
    glTranslatef(0, 0, -translate_z);
    glRotatef(rotate_y, 1, 0, 0);
    glRotatef(rotate_x, 0, 1, 0);

    for (j = 0; j < RESOLUTION; j++) {
        y = (j + 1) * delta - 1;
        for (i = 0; i <= RESOLUTION; i++) {
            indice = 6 * (i + j * (RESOLUTION + 1));

            x = i * delta - 1;
            surface[indice + 3] = x;
            surface[indice + 4] = waveHeight(x, y, t);
            surface[indice + 5] = y;
            if (j != 0) {
                preindice = 6 * (i + (j - 1) * (RESOLUTION + 1));
                surface[indice] = surface[preindice + 3];
                surface[indice + 1] = surface[preindice + 4];
                surface[indice + 2] = surface[preindice + 5];
            }
            else {
                surface[indice] = x;
                surface[indice + 1] = waveHeight(x, -1, t);
                surface[indice + 2] = -1;
            }
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

    glBindTexture(GL_TEXTURE_2D, water_texture);

    glColor4f(0.1f, 0.7f, 0.7f, 0.7f);
    glEnableClientState(GL_NORMAL_ARRAY);
    glEnableClientState(GL_VERTEX_ARRAY);
    glNormalPointer(GL_FLOAT, 0, normal);
    glVertexPointer(3, GL_FLOAT, 0, surface);

    glBegin(GL_QUADS);
    glNormal3f(0.0f, 0.0f, 1.0f);
    glVertex3f(-1.0f, -0.2f, -1.0f);
    glVertex3f(-1.0f, -0.2f, 1.0f);
    glVertex3f(1.0f, -0.2f, 1.0f);
    glVertex3f(1.0f, -0.2f, -1.0f);
    glEnd();

    for (i = 0; i < RESOLUTION; i++)
        glDrawArrays(GL_TRIANGLE_STRIP, i * length, length);

    glDisable(GL_TEXTURE_2D);

    if (normals != 0) {
        glColor3f(1, 0, 0);
        glBegin(GL_LINES);
        for (j = 0; j < RESOLUTION; j++)
            for (i = 0; i <= RESOLUTION; i++) {
                indice = 6 * (i + j * (RESOLUTION + 1));
                glVertex3fv(&(surface[indice]));
                glVertex3f(surface[indice] + normal[indice] / 50,
                    surface[indice + 1] + normal[indice + 1] / 50,
                    surface[indice + 2] + normal[indice + 2] / 50);
            }
        glEnd();
    }
    

   

    glutSwapBuffers();
    glutPostRedisplay();
}

int LoadGLTextures() {
    water_texture = SOIL_load_OGL_texture(
        "C:/Users/dududu/Desktop/reflection.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_INVERT_Y
    );

    if (water_texture == 0) {
        return false;
    }

    glBindTexture(GL_TEXTURE_2D, water_texture);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);

    
    image_texture1 = SOIL_load_OGL_texture(
        "C:/Users/��η/Desktop/reflection.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_INVERT_Y
    );
    if (image_texture1 == 0) {
        return false;
    }
    glBindTexture(GL_TEXTURE_2D, image_texture1);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);

    // Load image texture 2
    image_texture2 = SOIL_load_OGL_texture(
        "C:/Users/��η/Desktop/reflection.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_INVERT_Y
    );
    if (image_texture2 == 0) {
        return false;
    }
    glBindTexture(GL_TEXTURE_2D, image_texture2);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);

    return true;
}

int InitGL() {
    if (!LoadGLTextures())
        return false;
    glClearColor(0.0f, 0.2f, 0.4f, 0.0f);
    glClearDepth(1.0f);
    glEnable(GL_DEPTH_TEST);
    glDepthFunc(GL_LEQUAL);
    glHint(GL_PERSPECTIVE_CORRECTION_HINT, GL_NICEST);

    glLightfv(GL_LIGHT1, GL_AMBIENT, LightAmbient);
    glLightfv(GL_LIGHT1, GL_DIFFUSE, LightDiffuse);
    glLightfv(GL_LIGHT1, GL_POSITION, LightPosition);
    glEnable(GL_LIGHT1);
    glEnable(GL_LIGHTING);

    GLfloat lightPosition[] = { 0.0f, 0.0f, 2.0f, 1.0f }; // x, y, z �ǹ�Դ������ռ��е�λ�ã�1.0f ���������  
    GLfloat lightColor[] = { 0.3f, 0.3f, 1.0f, 0.0f }; // RGBA��ɫ����ɫ  
    // ��Դλ��  
    glLightfv(GL_LIGHT0, GL_POSITION, lightPosition);

    // ��Դ��ɫ��������;��淴�䣩  
    glLightfv(GL_LIGHT0, GL_DIFFUSE, lightColor);
    glLightfv(GL_LIGHT0, GL_SPECULAR, lightColor); // ����߹� 

    // ��Դ����Ϊ���Դ  
    glLightf(GL_LIGHT0, GL_SPOT_CUTOFF, 180.0f);

    // ���ù�Դ  
    glEnable(GL_LIGHT0);

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
    switch (key) {
    case 'q': case 27:
        exit(0);
        break;
    case 'l':
        wire_frame = !wire_frame;
        break;
    case 'n':
        normals = !normals;
        break;
    case 'm':  // �޸��𶯷�������ֵ
        amplitude[0] = amplitude[0] + 0.002;
        amplitude[1] += 0.002;
        break;
    case 'b':  // �޸��𶯷�������ֵ
        amplitude[0] = amplitude[0] - 0.002;
        amplitude[1] -= 0.002;
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

void mouseMotion(int x, int y) {
    if (GLUT_DOWN == left_click) {
        rotate_y = rotate_y + (y - oy) / 5.0;
        rotate_x = rotate_x + (x - ox) / 5.0;
        if (rotate_y > 90)
            rotate_y = 90;
        if (rotate_y < -90)
            rotate_y = -90;
        glutPostRedisplay();
    }
    if (GLUT_DOWN == right_click) {
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
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);
    glutInitWindowPosition(100, 100);
    glutInitWindowSize(800, 600);
    glutCreateWindow("Water Surface Simulation");

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
