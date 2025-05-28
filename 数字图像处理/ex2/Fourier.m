I = imread('../pollen.jpg');  
imshow(I);
title('原图')

% 用Fourier变换算法对图像作二维Fourier变换
fftI = fft2(I);             % 计算图像的二维离散傅里叶变换
sfftI = fftshift(fftI);     % 将低频部分移动到频谱的中心

% 将其幅度谱进行搬移，并显示频谱
RR = real(sfftI);           % 提取傅里叶变换的实部
II = imag(sfftI);           % 提取傅里叶变换的虚部
A = sqrt(RR.^2 + II.^2);    % 计算幅度谱

% 归一化幅度谱
A = (A - min(min(A))) / (max(max(A)) - min(min(A))) * 225;    

% 显示频谱
figure;
imshow(A);              % 归一化后显示频谱图像
title('傅里叶变换的幅度谱');

% 用傅里叶系数的幅度进行傅里叶反变换
% 重构出幅度图像 (仅使用幅度部分，随机相位)
phase = angle(sfftI);      % 提取相位信息
reconstructed_magnitude = A .* exp(1i * phase);   % 使用幅度和相位合成频域数据
I_reconstructed_magnitude = ifft2(ifftshift(reconstructed_magnitude));  % 傅里叶反变换

% 显示幅度反变换后的图像
figure;
imshow(abs(I_reconstructed_magnitude), []);  % 只显示反变换后的图像的幅度
title('仅用幅度进行傅里叶反变换');

% 用傅里叶系数的相位进行傅里叶反变换
% 重构出相位图像 (仅使用相位部分，随机幅度)
magnitude = A;                % 使用归一化后的幅度谱
reconstructed_phase = magnitude .* exp(1i * angle(sfftI));   % 使用相位和幅度合成频域数据
I_reconstructed_phase = ifft2(ifftshift(reconstructed_phase));  % 傅里叶反变换

% 显示相位反变换后的图像
figure;
imshow(abs(I_reconstructed_phase), []);  % 只显示反变换后的图像的幅度
title('仅用相位进行傅里叶反变换');
