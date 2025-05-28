I = imread('../im1.tif');
J = imread('../im2.tif');
K = imadd(I,J);
figure;
subplot(1,3,1),imshow(I),title('图1')
subplot(1,3,2),imshow(J),title('图2')
subplot(1,3,3),imshow(K),title('叠加后');
