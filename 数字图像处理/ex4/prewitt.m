% 1. 读入图像 'room.tif' 并检查是否为索引图像（有颜色映射）
[Im, map] = imread('../room.tif');

% 2. 检查是否有颜色图（索引图像），如果有则转换为灰度图
if isempty(map)
    f = Im; % 如果没有颜色图，直接使用图像数据
else
    f = ind2gray(Im, map); % 如果有颜色图，则转换为灰度图
end

% 3. 使用edge函数和Prewitt算子提取垂直和水平边缘
% 提取水平边缘
gb = edge(f, 'Prewitt', [], 'horizontal');  % 使用Prewitt算子进行水平边缘检测

% 提取垂直边缘
gv = edge(f, 'Prewitt', [], 'vertical');  % 使用Prewitt算子进行垂直边缘检测

% 显示水平和垂直边缘
figure, imshow(gv,[]), title('Prewitt算子提取垂直边缘');
figure, imshow(gb,[]), title('Prewitt算子提取水平边缘');

% 4. 使用欧几里得距离和街区距离计算梯度的模

% 欧几里得距离（计算梯度模）
grad_x = imfilter(double(f), horiz_filter, 'replicate'); % 水平梯度
grad_y = imfilter(double(f), vert_filter, 'replicate');  % 垂直梯度
grad_magnitude_euclid = sqrt(grad_x.^2 + grad_y.^2); % 欧几里得距离

% 显示欧几里得距离计算的梯度模
figure, imshow(grad_magnitude_euclid, []), title('梯度模（欧几里得距离）');

% 街区距离（计算梯度模）
grad_magnitude_cityblock = abs(grad_x) + abs(grad_y); % 街区距离
% 显示街区距离计算的梯度模
figure, imshow(grad_magnitude_cityblock, []), title('梯度模（街区距离）');

% 5. 二值化处理
% 对欧几里得梯度结果进行二值化
T_euclid = 0.3 * max(grad_magnitude_euclid(:)); % 设定阈值
bw_euclid = grad_magnitude_euclid >= T_euclid; % 进行二值化
figure, imshow(bw_euclid), title('二值化图像（欧几里得梯度阈值）');

% 对街区距离梯度结果进行二值化
T_cityblock = 0.3 * max(grad_magnitude_cityblock(:)); % 设定阈值
bw_cityblock = grad_magnitude_cityblock >= T_cityblock; % 进行二值化
figure, imshow(bw_cityblock), title('二值化图像（街区梯度阈值）');
