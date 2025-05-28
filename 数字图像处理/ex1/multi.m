[Im, map] = imread ('../Fig0438(a)(bld_600by600).tif');
if isempty(map)
    I = Im; % 如果没有颜色图，直接使用图像数据
else
    I = ind2gray(Im, map); % 如果有颜色图，则转换为灰度图
end
J = immultiply(I,1.5);
figure;
subplot(1,2,1),imshow(I);
subplot(1,2,2),imshow(J);
