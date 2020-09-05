## 安装说明
Highlight.popclipext 是程序包（未打包）  
Highlight.popclipextz 是安装包（已打包）  
选择文件名长的进行安装  

## 功能介绍
Highlight ：将 Bear 中的 ** 转换为 :: 高亮标记

trim：删除文段之间多余的回车

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

- 文件夹名后面要加一个 /
- 记得打包之前要删除 DS_Store  

```
zip -r Highlight.popclipextz Highlight.popclipext/
```
