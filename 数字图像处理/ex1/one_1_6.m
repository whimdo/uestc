flower = imread('../flower.tif');

whos flower;

imshow(flower);

info = imfinfo('../flower.tif');
disp(info);

quality = 80;
imwrite(flower, 'flower.jpg', 'Quality', quality);

imwrite(flower, 'flower.bmp');
