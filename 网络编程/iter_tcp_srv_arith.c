#include <stdio.h>
#include <unistd.h>
#include <stdint.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <signal.h>

#pragma pack(push, 1)
typedef struct {
    int32_t op;
    int64_t op1;
    int64_t op2;
} PDU_RQS;
#pragma pack(pop)

int sigint_flag = 0;
void SigintHandler(int sig) {
    printf("[srv] SIGINT is coming!\n");
    sigint_flag = 1;
}

void CalculateServe(int connfd,char *ip_str,struct sockaddr_in ClientAddress){
    int n = 0;
    PDU_RQS pdu;
    char buf[140]={0};
    char *to_exit = "EXIT";
    char rep_pdu[140] = {0};

    while(1){
        memset(buf,0,140);//清空给缓存区
        n = read(connfd, &pdu, sizeof(PDU_RQS));

        // 网络字节序转换为主机字节序
        pdu.op = ntohl(pdu.op);
        pdu.op1 = be64toh(pdu.op1);
        pdu.op2 = be64toh(pdu.op2);

        int64_t result;
        char opt;

        if (pdu.op == 0x00000009||n<=0){
            printf("[srv] client[%s:%d] is closed!\n", ip_str, (int)ntohs(ClientAddress.sin_port));
            break;
        }
        switch(pdu.op) {
            case 0x00000004: // MUL
                result = pdu.op1 * pdu.op2;
                opt = '*';
                break;
            case 0x00000001: // ADD
                result = pdu.op1 + pdu.op2;
                opt = '+';
                break;
            case 0x00000002: // SUB
                result = pdu.op1 - pdu.op2;
                opt = '-';
                break;
            case 0x00000008: // DIV
                result = pdu.op1 / pdu.op2;
                opt = '/';
                break;
            case 0x00000010: // MOD
                result = pdu.op1 % pdu.op2;
                opt = '%';
                break;
            default:
                sprintf(rep_pdu, "invalid operation");
                write(connfd, rep_pdu, strlen(rep_pdu)+1);
                continue;
        }
        
       
        printf("[rqt_res] %ld %c %ld = %ld\n", pdu.op1, opt, pdu.op2, result);
        result = htobe64(result);
        write(connfd, &result, sizeof(result));

    }
}

int main(int argc,char **argv){

    //安装使用sigint信号处理器
    struct sigaction wmsigaction;
    wmsigaction.sa_flags = 0;
    wmsigaction.sa_handler = SigintHandler;
    sigemptyset(&wmsigaction.sa_mask);
    sigaction(SIGINT, &wmsigaction, NULL);// 注册信号处理器

    char ip_str[20] = {0};// 存放转换后的ip地址
    char CliIpStr[20] = {0};

    struct sockaddr_in ServerAddress, ClientAddress;
    int listenfd, connectfd;
    socklen_t ClientAddress_len;

    listenfd = socket(AF_INET,SOCK_STREAM,0);//建立套接字返回监听套接字

    bzero(&ServerAddress,sizeof(ServerAddress));//初始化服务器地址结构体 ServerAddress
    ServerAddress.sin_family = AF_INET;                  // 地址族协议（IPv4orIPv6）
    ServerAddress.sin_port = htons(atoi(argv[2]));       // 端口
    ServerAddress.sin_addr.s_addr = inet_addr(argv[1]);  // IP地址

    // tes存放返回结果
    const char *tes;
    // 使用inet_ntop函数转换ip
    tes = inet_ntop(AF_INET, &ServerAddress.sin_addr, ip_str, sizeof(ip_str));
    printf("[srv] server[%s:%d]is initializing!\n", ip_str, ntohs(ServerAddress.sin_port));

    if (listenfd < 0) {//检查套接字创建是否成功。如果失败,则打印错误信息并退出程序。
        perror("socket");
        return 1;
    }

    // 给套接字绑定一个端口和IP,ret将检测是否绑定成功
    int ret1 = bind(listenfd, (struct sockaddr *)&ServerAddress, sizeof(ServerAddress));
    if (ret1 < 0) {//如果绑定失败,则打印错误信息并退出程序。
        perror("bind");
        return 1;
    }

    //这些行让监听套接字开始监听传入的连接请求,最大连接请求队列长度为 20。
    int ret2 = listen(listenfd,20);
    if (ret2 < 0) {//如果监听失败,则打印错误信息并退出程序。
        perror("listen");
        return 1;
    }

    while(!sigint_flag){//受理客户端请求大循环
        ClientAddress_len = sizeof(ClientAddress);
        
        connectfd = accept(listenfd, (struct sockaddr *)&ClientAddress, &ClientAddress_len);
        if (connectfd < 0) {
            if (errno == EINTR)
                continue;
            
            perror("accept");
            break;
        } else {
            tes = inet_ntop(AF_INET, &ClientAddress.sin_addr, ip_str, sizeof(ip_str));
            printf("[srv] client[%s:%d] is accepted!\n", ip_str, (int)ntohs(ClientAddress.sin_port));
        }


        CalculateServe(connectfd,ip_str,ClientAddress);
        // 关闭连接
        close(connectfd);
        //printf("[srv] connfd is closed!\n");
    }

    // 关闭监听
    close(listenfd);
    printf("[srv]listenfd is closed!\n");
    printf("[srv]server is going to exit! \n!");
    return 0;

}
