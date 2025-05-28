I = imread('../im1.tif');
I2 = imread('../im2.tif');
I = im2double(I);
I2 = im2double(I2);
I3 = imlincomb(0.4,I,0.6,I2);
figure;
subplot(1,3,1),imshow(I);
subplot(1,3,2),imshow(I2);
subplot(1,3,3),imshow(I3);
