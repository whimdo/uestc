#include <GL/glut.h>	// ����NeHeGL��ͷ�ļ�
#include <stdio.h>
#include <stdlib.h>
#include "Physics2.h"

// ��������ඨ����GridSimulation.h��

// ����һ��ȫ�ֵ�GridSimulation����
GridSimulation gridSimulation(10, 10, 1.0f, 1.0f, 1.0f, 0.1f, Vector3D(0, -9.8, 0));

void display()
{
    glClear(GL_COLOR_BUFFER_BIT);
    glLoadIdentity();

    // ��������
    glColor3f(1.0, 1.0, 1.0); // ������ɫΪ��ɫ
    for (int i = 0; i < gridSimulation.rows; ++i)
    {
        for (int j = 0; j < gridSimulation.cols; ++j)
        {
            // �����ʵ�
            // �����ʵ�λ����2D�ģ�����ӳ�䵽��Ļ��
            float x = gridSimulation.masses[i * gridSimulation.cols + j]->pos.x;
            float y = gridSimulation.masses[i * gridSimulation.cols + j]->pos.y;
            glBegin(GL_POINTS);
            glVertex2f(x, y);
            glEnd();

            // ���Ƶ��ɣ�������ڣ�
            if (j < gridSimulation.cols - 1 && gridSimulation.springs[i][j] != nullptr)
            {
                float x1 = gridSimulation.masses[i * gridSimulation.cols + j]->pos.x;
                float y1 = gridSimulation.masses[i * gridSimulation.cols + j]->pos.y;
                float x2 = gridSimulation.masses[i * gridSimulation.cols + j + 1]->pos.x;
                glBegin(GL_LINES);
                float y2 = gridSimulation.masses[i * gridSimulation.cols + j + 1]->pos.y;
                glVertex2f(x1, y1);
                glVertex2f(x2, y2);
                glEnd();
            }

            if (i < gridSimulation.rows - 1 && gridSimulation.springs[i][j] != nullptr)
            {
                float x1 = gridSimulation.masses[i * gridSimulation.cols + j]->pos.x;
                float y1 = gridSimulation.masses[i * gridSimulation.cols + j]->pos.y;
                float x2 = gridSimulation.masses[(i + 1) * gridSimulation.cols + j]->pos.x;
                float y2 = gridSimulation.masses[(i + 1) * gridSimulation.cols + j]->pos.y;
                glBegin(GL_LINES);
                glVertex2f(x1, y1);
                glVertex2f(x2, y2);
                glEnd();
            }
        }
    }

    glutSwapBuffers();
}

int main(int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
    glutInitWindowSize(800, 600);
    glutCreateWindow("Grid Simulation");

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(0, 800, 0, 600, -1, 1);

    glutDisplayFunc(display);
    glutIdleFunc(display);

    glutMainLoop();

    return 0;
}

