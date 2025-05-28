x=imread('../Lenna.bmp');
x=rgb2gray(x); %彩图转化为灰度图
figure(1);
subplot(121);
imshow(x); %显示原图
title('原图')
y=jpegencode(x,20);%进行近似 jpeg 编码
X=jpegdecode(y); %进行解码
subplot(122);
imshow(X);
title('jpeg压缩后')
e=double(x)-double(X);
[m,n]=size(e);
erms=sqrt(sum(e(:).^2)/(m*n)) %计算均方根误差
cr=imageratio(x,y) %计算压缩比
