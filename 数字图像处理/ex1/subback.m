I = imread('../cameraman.tif');
background =  imopen(I,strel('disk',15));
I2 = imsubtract(I, background);
figure;
subplot(1,2,1),imshow(I);
subplot(1,2,2),imshow(I2);
