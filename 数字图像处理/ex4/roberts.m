% 1. 读入图像 'room.tif' 并检查是否为索引图像（有颜色映射）
[Im, map] = imread('../room.tif');
% 2. 检查是否有颜色图（索引图像），如果有则转换为灰度图
if isempty(map)
    f = Im; % 如果没有颜色图，直接使用图像数据
else
    f = ind2gray(Im, map); % 如果有颜色图，则转换为灰度图
end
% 3. 使用Roberts算子提取垂直和水平边缘
[gv, t1] = edge(f, 'roberts', 'vertical'); % 提取垂直边缘
imshow(gv), title('Roberts算子提取垂直边缘'); % 显示垂直边缘
[gb, t2] = edge(f, 'roberts', 'horizontal'); % 提取水平边缘
figure, imshow(gb), title('Roberts算子提取水平边缘'); % 显示水平边缘
% 4. 使用欧几里得距离和街区距离计算梯度的模
% 欧几里得距离（计算梯度模）
[grad_x, grad_y] = gradient(double(f)); % 计算水平和垂直方向的梯度
grad_magnitude_euclid = sqrt(grad_x.^2 + grad_y.^2); % 欧几里得距离
% 显示欧几里得距离计算的梯度模
figure, imshow(grad_magnitude_euclid, []), title('梯度模（欧几里得距离）');
% 街区距离（计算梯度模）
grad_magnitude_cityblock = abs(grad_x) + abs(grad_y); % 街区距离
% 显示街区距离计算的梯度模
figure, imshow(grad_magnitude_cityblock, []), title('梯度模（街区距离）');
T_euclid = 0.3 * max(grad_magnitude_euclid(:)); % 设定阈值
bw_euclid = grad_magnitude_euclid >= T_euclid; % 进行二值化
figure, imshow(bw_euclid), title('二值化图像（欧几里得梯度阈值）');
T_cityblock = 0.3 * max(grad_magnitude_cityblock(:)); % 设定阈值
bw_cityblock = grad_magnitude_cityblock >= T_cityblock; % 进行二值化
figure, imshow(bw_cityblock), title('二值化图像（街区梯度阈值）');
