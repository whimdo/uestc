#include <GL/glut.h>
#include <stdlib.h>

GLfloat x = 0.0f;
GLfloat y = 0.0f;
GLfloat size = 50.0f;

GLfloat xStep = 1.0f;
GLfloat yStep = 1.0f;
GLfloat windowWidth;
GLfloat windowHeight;
GLfloat red = 1.0f, green = 1.0f, blue = 1.0f;

void RenderScene(void) {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(red, green, blue);
    glBegin(GL_TRIANGLES);
    glVertex2f(x, y);
    glVertex2f(x + size, y);
    glVertex2f(x + size / 2, y + size);
    glEnd();
    glutSwapBuffers();
}

void SetupRC(void) {
    glClearColor(0.0f, 0.0f, 1.0f, 1.0f);
}

void TimerFunction(int value) {
    if (x > windowWidth - size || x < -windowWidth)
        xStep = -xStep;
    if (y > windowHeight - size || y < -windowHeight)
        yStep = -yStep;
    x += xStep;
    y += yStep;

    if (x > (windowWidth - size + xStep))
        x = windowWidth - size - 1;
    else if (x < -(windowWidth + xStep))
        x = -windowWidth - 1;

    if (y > (windowHeight - size + yStep))
        y = windowHeight - size - 1;
    else if (y < -(windowHeight + yStep))
        y = -windowHeight - 1;

    glutPostRedisplay();
    glutTimerFunc(10, TimerFunction, 1);
}

void ChangeSize(int w, int h) {
    GLfloat aspectRatio;

    if (h == 0)
        h = 1;
    glViewport(0, 0, w, h);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    aspectRatio = (GLfloat)w / (GLfloat)h;
    if (w <= h) {
        windowWidth = 100.0;
        windowHeight = 100.0 / aspectRatio;
        glOrtho(-100.0, 100.0, -windowHeight, windowHeight, 1.0, -1.0);
    }
    else {
        windowWidth = 100.0 * aspectRatio;
        windowHeight = 100.0;
        glOrtho(-windowWidth, windowWidth, -100.0, 100.0, 1.0, -1.0);
    }
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
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
    case GLUT_KEY_UP:
        xStep = xStep *2;
        yStep = yStep *2;
        break;
    case GLUT_KEY_DOWN:
        xStep = xStep /2;
        yStep = yStep /2;
        break;
    }
}

int main(int argc, char* argv[]) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
    glutInitWindowSize(800, 600);
    glutCreateWindow("三角形运动并反弹");
    glutDisplayFunc(RenderScene);
    glutReshapeFunc(ChangeSize);
    glutTimerFunc(10, TimerFunction, 1);

    glutKeyboardFunc(processNormalKeys);
    glutSpecialFunc(processSpecialKeys);
    SetupRC();
    glutMainLoop();
    return 0;
}
