% 1. 读入图像 'room.tif' 并检查是否为索引图像（有颜色映射）
[Im, map] = imread('../room.tif');

% 2. 检查是否有颜色图（索引图像），如果有则转换为灰度图
if isempty(map)
    f = Im; % 如果没有颜色图，直接使用图像数据
else
    f = ind2gray(Im, map); % 如果有颜色图，则转换为灰度图
end
% 3. 使用edge函数和log算子提取边缘
% 使用Laplacian of Gaussian (LoG) 算子进行边缘检测
edges_log = edge(f, 'log');

% 4. 显示二值化后的边缘
figure, imshow(edges_log, []), title('Log算子提取的边缘');