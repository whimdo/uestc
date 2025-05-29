#include <GL/glut.h>	// 包含NeHeGL的头文件
#include <stdio.h>
#include <stdlib.h>
#include "Physics2.h"
#include <vector>

GridRopeSimulation* simulation;

void drawSphere(Vector3D pos, float radius)
{
    glPushMatrix();
    glTranslatef(pos.x, pos.y, pos.z);
    glutSolidSphere(radius, 20, 20);
    glPopMatrix();
}

void display()
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();
    gluLookAt(0, 0, 20, 0, 0, 0, 0, 1, 0);

    int numHorizontalRopes = simulation->horizontalRopes.size();
    int numVerticalRopes = simulation->verticalRopes.size();
    int numMassesPerRope = simulation->horizontalRopes[0]->numOfMasses;

    for (int i = 0; i < numHorizontalRopes; ++i)
    {
        for (int j = 0; j < numMassesPerRope; ++j)
        {
            Vector3D pos = simulation->horizontalRopes[i]->masses[j]->pos;
            drawSphere(pos, 0.1f);
        }
    }

    for (int i = 0; i < numVerticalRopes; ++i)
    {
        for (int j = 0; j < numMassesPerRope; ++j)
        {
            Vector3D pos = simulation->verticalRopes[i]->masses[j]->pos;
            drawSphere(pos, 0.1f);
        }
    }

    glutSwapBuffers();
}

void idle()
{
    static float prevTime = glutGet(GLUT_ELAPSED_TIME);
    float currTime = glutGet(GLUT_ELAPSED_TIME);
    float dt = (currTime - prevTime) / 1000.0f;
    prevTime = currTime;

    simulation->simulate(dt);

    // 固定左上角和右上角的质点
    int numHorizontalRopes = simulation->horizontalRopes.size();
    int numVerticalRopes = simulation->verticalRopes.size();
    int numMassesPerRope = simulation->horizontalRopes[0]->numOfMasses;

    simulation->horizontalRopes[0]->masses[0]->pos = Vector3D(0, 0, 0);
    simulation->horizontalRopes[0]->masses[0]->vel = Vector3D(0, 0, 0);

    float templen = 10.0f;
    simulation->horizontalRopes[numHorizontalRopes - 1]->masses[numMassesPerRope - 1]->pos = Vector3D(numVerticalRopes * templen, 0, 0);
    simulation->horizontalRopes[numHorizontalRopes - 1]->masses[numMassesPerRope - 1]->vel = Vector3D(0, 0, 0);

    glutPostRedisplay();
}

int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(800, 600);
    glutCreateWindow("Grid Rope Simulation");

    glutDisplayFunc(display);
    glutIdleFunc(idle);

    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
    glEnable(GL_DEPTH_TEST);

    int numHorizontalRopes = 10;
    int numVerticalRopes = 10;
    int numMassesPerRope = 20;
    float massValue = 1.0f;
    float springConstant = 100.0f;
    float springLength = 1.0f;
    float springFrictionConstant = 0.9f;
    Vector3D gravitation(0, -9.8f, 0);

    simulation = new GridRopeSimulation(numHorizontalRopes, numVerticalRopes, numMassesPerRope, massValue, springConstant, springLength, springFrictionConstant, gravitation);

    glutMainLoop();

    simulation->release();
    delete simulation;

    return 0;
}