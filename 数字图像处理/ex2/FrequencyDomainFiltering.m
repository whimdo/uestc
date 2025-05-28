%频域滤波
[Im, map] = imread ('../room.tif');
f = Im;   %读取图片
F=fft2(f);             %对图像进行傅立叶变换
S=fftshift(log(1+abs(F)));%对变换后图像进行队数变化，并对其坐标平移，使其中心化
S=gscale(S);             %将频谱图像标度在0-256的范围内
figure,imshow(S),title('图片频谱图像');              %显示频谱图像
h=fspecial('sobel');        %产生空间‘sobel’模版
figure,freqz2(h),title('频域滤波器图像')         %查看相应频域滤波器的图像
PQ=paddedsize(size(f));   %产生滤波时所需大小的矩阵
H=freqz2(h,PQ(1),PQ(2)); %产生频域中的‘sobel’滤波器
H1=ifftshift(H);         %重排数据序列，使得原点位于频率矩阵的左上角
figure;
subplot(1,2,1),imshow(abs(H),[]),title('sobel滤波器频域图形');       %以图形形式显示滤波器
subplot(1,2,2),imshow(abs(H1),[]),title('重排列后的sobel滤波器频域图形')
gs=imfilter(double(f),h);  %用模版h进行空域滤波
gf=dftfilt(f,H1);         %用滤波器对图像进行频域滤波
figure;
subplot(2,2,1),imshow(gs,[]),title('空域滤波')    
subplot(2,2,2),imshow(gf,[]),title('频域滤波')
subplot(2,2,3),imshow(abs(gs),[]),title('空域滤波(绝对值)')
subplot(2,2,4),imshow(abs(gf),[]),title('频域滤波(绝对值)')
[Im, map] = imread ('../number.tif');
f = ind2gray(Im, map);   %读取图片
PQ=paddedsize(size(f));  %产生滤波时所需大小的矩阵
D0=0.05*PQ(1);        %设定高斯高通滤波器的阈值
H=hpfilter('gaussian',PQ(1),PQ(2),D0);    %产生高斯高通滤波器
g=dftfilt(f,H);         %对图像进行滤波
figure;subplot(1,2,1),imshow(f),title('原图像');subplot(1,2,2),imshow(g,[]),title('高斯高通滤波后');      %显示滤波后图像
