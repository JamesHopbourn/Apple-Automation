## 安装说明  
Highlight.popclipext 是程序包（未打包）  
Highlight.popclipextz 是安装包（已打包）  
  
## 功能介绍  
Highlight ：将 Bear 中的 ** 转换为 :: 高亮标记  
trim：删除文段之间多余的回车  
H4：第一行开头添加 Markdown 四级标题标记，其余行合并为一行  
tr：选中行合并为一行  
dot：开头的「数字、」转为「数字. 」
CN：所有的半角符号转为全角符号
  
---  
  
## php 学习备注  
```  
获取选择文本  
$str = getenv('POPCLIP_TEXT');  
  
文本替换  
echo str_replace('**', '::', $str);  
  
正则替换  
echo preg_replace("/(\R){2,}/", "$1", $str);  
```  
  
```  
zip -r Highlight.popclipextz Highlight.popclipext/  
```  
