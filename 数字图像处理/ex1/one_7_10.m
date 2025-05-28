% 使用 imread 读入图像 Lenna.jpg 和 cameraman.tif
lenna = imread('../Lenna.jpg');
cameraman = imread('../cameraman.tif');

%使用 imfinfo 获取图像的大小信息
lenna_info = imfinfo('../Lenna.jpg');
cameraman_info = imfinfo('../cameraman.tif');
disp(['Lenna.jpg size: ', num2str(lenna_info.FileSize), ' bytes']);
disp(['cameraman.tif size: ', num2str(cameraman_info.FileSize), ' bytes']);

% 使用 figure 和 imshow 分别显示 Lenna.jpg 和 cameraman.tif 图像
figure;
imshow(lenna);
title('Lenna.jpg');
figure;
imshow(cameraman);
title('Cameraman.tif');

% 使用 im2bw 将灰度图像 cameraman.tif 转化为二值图像，并显示出来
bw_cameraman = im2bw(cameraman);
figure;
imshow(bw_cameraman);
title('Cameraman.tif的二值图像');
