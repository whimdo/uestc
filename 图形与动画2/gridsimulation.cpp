#include <GL/glut.h>	// 包含NeHeGL的头文件
#include <stdio.h>
#include <stdlib.h>
#include "Physics2.h"

// 假设你的类定义在GridSimulation.h中

// 声明一个全局的GridSimulation对象
GridSimulation gridSimulation(10, 10, 1.0f, 1.0f, 1.0f, 0.1f, Vector3D(0, -9.8, 0));

void display()
{
    glClear(GL_COLOR_BUFFER_BIT);
    glLoadIdentity();

    // 绘制网格
    glColor3f(1.0, 1.0, 1.0); // 设置颜色为白色
    for (int i = 0; i < gridSimulation.rows; ++i)
    {
        for (int j = 0; j < gridSimulation.cols; ++j)
        {
            // 绘制质点
            // 假设质点位置是2D的，将其映射到屏幕上
            float x = gridSimulation.masses[i * gridSimulation.cols + j]->pos.x;
            float y = gridSimulation.masses[i * gridSimulation.cols + j]->pos.y;
            glBegin(GL_POINTS);
            glVertex2f(x, y);
            glEnd();

            // 绘制弹簧（如果存在）
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

