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

int main(int argc, char *argv[]) {
    char ip_str[20] = {0};

    if (argc != 3) {
        fprintf(stderr, "Usage: %s <server_ip> <server_port>\n", argv[0]);
        return 1;
    }

    struct sockaddr_in serv_addr;
    int sockfd;

    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) {
        perror("socket");
        return 1;
    }

    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(atoi(argv[2]));
    serv_addr.sin_addr.s_addr = inet_addr(argv[1]);

    int ret = connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
    if (ret < 0) {
        perror("connect");
        return 1;
    } else {
        inet_ntop(AF_INET, &serv_addr.sin_addr, ip_str, sizeof(ip_str));
        printf("[cli] server[%s:%d] is connected!\n", ip_str, ntohs(serv_addr.sin_port));
    }

    char buf[140] = {0};
    char *to_exit = "EXIT";
    while (1) {
        memset(buf, 0, sizeof(buf));
        /*printf("Enter calculation (e.g., ADD 1234 5678): ");*/
        fgets(buf, sizeof(buf), stdin);

        int if_exit = strncmp(buf, to_exit, 4);
        if (if_exit == 0){
            printf("[cli] command EXIT received\n");
            PDU_RQS pdu_exit = {0x00000009,1,1};
            pdu_exit.op = htonl(pdu_exit.op);
            pdu_exit.op1 = htobe64(pdu_exit.op1);
            pdu_exit.op2 = htobe64(pdu_exit.op2);
            //write(sockfd, &pdu_exit, sizeof(PDU_RQS));
            break;
        }
           

        char operator[4];
        int64_t operand1, operand2;
        int num_parsed = sscanf(buf, "%3s %ld %ld", operator, &operand1, &operand2);
        if (num_parsed != 3) {
            printf("Invalid input format!\n");
            continue;
        }

        PDU_RQS pdu;
        if(strcmp(operator, "MUL") == 0) {
            pdu.op = 0x00000004;
        } else if(strcmp(operator, "ADD") == 0) {
            pdu.op = 0x00000001;
        } else if(strcmp(operator, "SUB") == 0) {
            pdu.op = 0x00000002;
        } else if(strcmp(operator, "DIV") == 0) {
            pdu.op = 0x00000008;
        } else if(strcmp(operator, "MOD") == 0) {
            pdu.op = 0x00000010;
        } else {
            printf("Invalid operator\n");
            continue;
        }

        pdu.op1 = operand1;
        pdu.op2 = operand2;

        pdu.op = htonl(pdu.op);
        pdu.op1 = htobe64(pdu.op1);
        pdu.op2 = htobe64(pdu.op2);

        write(sockfd, &pdu, sizeof(PDU_RQS));

        int64_t result;
        memset(buf, 0, sizeof(buf));
        int bytes_read = read(sockfd, &result, sizeof(int64_t));
        // 将网络字节序转换为主机字节序
        result = be64toh(result);

        char opt;
        if(strcmp(operator, "MUL") == 0){
                opt = '*';
            }
            else if(strcmp(operator, "ADD") == 0){
                opt = '+';
            }else if(strcmp(operator, "SUB") == 0){
                opt = '-';
            }else if(strcmp(operator, "DIV") == 0){
                opt = '/';
            }else if(strcmp(operator, "MOD") == 0){
                opt = '%';
            }

        printf("[rep_rcv] %ld %c %ld = %ld\n",operand1, opt, operand2, result);

        
    }

    close(sockfd);
    printf("[cli] Connection closed!\n");
    printf("[cli] client is going to exit!\n");
    return 0;
    
    }
