[Im, map] = imread ('../electric.tif');
I = ind2gray(Im, map);
J = imnoise(I,'gauss',0.02);              %添加高斯噪声
ave1=fspecial('average',3);              %产生3×3的均值模版
ave2=fspecial('average',5);              %产生5×5的均值模版
K = filter2(ave1,J)/255;                 %均值滤波3×3
L = filter2(ave2,J)/255;                 %均值滤波5×5
M = medfilt2(J,[3 3]);                  %中值滤波3×3模板
N = medfilt2(J,[5 5]);                   %中值滤波5×5模板
subplot(2,3,1),imshow(I),title('原图');
subplot(2,3,2),imshow(J),title('高斯噪声');
subplot(2,3,3),imshow(K),title('均值滤波(3x3)');
subplot(2,3,4),imshow(L),title('均值滤波(5x5)');
subplot(2,3,5),imshow(M),title('中值滤波(3x3)');
subplot(2,3,6),imshow(N),title('中值滤波(5x5)');

J = imnoise(I,'salt & pepper',0.02);       %添加椒盐噪声   
ave1=fspecial('average',3);              %产生3×3的均值模版
ave2=fspecial('average',5);              %产生5×5的均值模版
K = filter2(ave1,J)/255;                 %均值滤波3×3
L = filter2(ave2,J)/255;                 %均值滤波5×5
M = medfilt2(J,[3 3]);                  %中值滤波3×3模板
N = medfilt2(J,[5 5]);                   %中值滤波5×5模板
figure;
subplot(2,3,1),imshow(I),title('原图');
subplot(2,3,2),imshow(J),title('椒盐噪声');
subplot(2,3,3),imshow(K),title('均值滤波(3x3)');
subplot(2,3,4),imshow(L),title('均值滤波(5x5)');
subplot(2,3,5),imshow(M),title('中值滤波(3x3)');
subplot(2,3,6),imshow(N),title('中值滤波(5x5)');
