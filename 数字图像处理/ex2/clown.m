% 读取图像
I = imread('../小丑.tif');  % 读取原始图像
I_gray = rgb2gray(I);  % 如果是彩色图像，则转换为灰度图像
F = fft2(I_gray);             % 对图像进行傅里叶变换
F_shifted = fftshift(F);      % 将低频部分移到频谱中心
[M, N] = size(F_shifted);  % 获取图像的大小
centerX = round(M / 2);  % 计算频谱中心点
centerY = round(N / 2);  % 计算频谱中心点
points = [
    200,130;
    150,220;
    190,200;
    160,150
];
radius = 10;  % 创建圆形遮罩设置圆形遮罩的半径
mask = ones(M, N);  % 初始化遮罩为全1矩阵
for i = 1:size(points, 1)
    x_center = points(i, 1);  % 异常点的x坐标
    y_center = points(i, 2);  % 异常点的y坐标
    for x = 1:M
        for y = 1:N
            % 计算该位置到异常点的距离
            distance = sqrt((x - x_center)^2 + (y - y_center)^2);
            % 如果距离小于半径，则设置该点为0（表示遮住）
            if distance <= radius
                mask(x, y) = 0;
            end
        end
    end
end
% 应用遮罩到频域图像
F_filtered = F_shifted .* mask;  % 将遮罩应用到傅里叶变换结果上
% 执行傅里叶反变换
F_inv_shifted = ifftshift(F_filtered);  % 将频谱图移回原始位置
I_filtered = ifft2(F_inv_shifted);  % 执行二维反傅里叶变换
I_filtered = real(I_filtered);  % 获取实部
% 显示原图和处理后的图像
figure;
subplot(1, 2, 1), imshow(I_gray, []), title('原图');
subplot(1, 2, 2), imshow(I_filtered, []), title('频域滤波后的图像');
% 显示原频谱图像
A = log(1 + abs(F_shifted));  % 计算频谱的幅度并进行对数变换
A = (A - min(A(:))) / (max(A(:)) - min(A(:))) * 255;  % 归一化频谱
figure;
imshow(A, []), title('原频谱图像');
% 显示处理后的频谱图像
A_filtered = log(1 + abs(F_filtered));  % 计算滤波后的频谱的幅度并进行对数变换
A_filtered = (A_filtered - min(A_filtered(:))) / (max(A_filtered(:)) - min(A_filtered(:))) * 255;  % 归一化频谱
figure;
imshow(A_filtered, []), title('滤波后频谱图像');
