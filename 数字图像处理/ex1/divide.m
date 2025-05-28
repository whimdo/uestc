I = imread('../cameraman.tif');
background =  imopen(I,strel('disk',15));
I2 = imsubtract(I, background);
Ip = imdivide(I,I2);
figure,imshow(Ip, []),title('原图和减背景后的图像相除的图像');
