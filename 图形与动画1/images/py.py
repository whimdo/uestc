import json
import gzip

# 读取JSON文件内容
with open(r'E:/CodeBase/jst.catalogue/images/Untitled.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 将JSON数据转为字符串
json_str = json.dumps(data)

# 将字符串压缩为gzip格式
with gzip.open('E:/CodeBase/jst.catalogue/images/Untitled.gz', 'wb') as f:
    f.write(json_str.encode('utf-8'))
