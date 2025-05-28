RGB = imread('../cameraman.tif');
RGB2 = imadd(RGB,50);
RGB3 = imadd(RGB,-50);
figure;
subplot(1,3,1),imshow(RGB);
subplot(1,3,2),imshow(RGB2);
subplot(1,3,3),imshow(RGB3);
