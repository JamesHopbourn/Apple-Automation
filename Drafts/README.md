## 功能特点
- 默认任务安排到今日
- 支持 Web Capture 自动转为任务
- 支持沟通交流时序安排
- 支持从剪切板读取任务

## Web Capture Temple
```
[[selection]]

[[[title]]]([[url]])
```
## Moze
```
Prompt  
葡萄糖|可乐|鸡排

URL
moze://x-callback-url/expense?amount=[[price]]&account={{钱包}}&subcategory=[[category]]&name=[[name]]&x-success=drafts4://
```
  
## 笔记追加内容
```
Prompt
生活日记|生活随记|体重管理|推特存档|快进 ⏩：加速日记|日记 ✅：成功日记|人际 ❤️：恋爱日记|人际 👬：关系日记|学习 💡：课外知识|学习 💬：生财有术|学习 💬：语录摘抄|分类 🎬：电影记录|分类 😴：梦境日记|分类 📰：时事概括

URL
bear://x-callback-url/[[action]]?title=[[title]]&mode=prepend&text=-%20[[date|%Y-%m-%d %-H:%M %A]]%0A[[text]]%0A&open_note=yes&x-success=[[success]]
```
- 行末如果没有中西文句号可以自动补全
- 草稿只含字母 t/T 打开 Prompt 指定日记
- t/T 之后可以带标题参数打开其他指定笔记
- 选择笔记之后将草稿内容追加到笔记顶部
- 可以根据标题指定追加文章只要修改字典键值即可
- 如果字典内不含 Prompt 键值则取 Prompt 值为标题
- 可以自定义追加内容的时间 `[[date|%Y-%m-%d %-H:%M %A]]`
- 可以根据选择的笔记不同在追加笔记之后执行不同的 x-success

### 笔记追加标签
```
Prompt
010 日记/011 生活日记|010 日记/013 社会时事|010 日记/020 恋爱日记|200 生活/250 恋爱知识|300 学习/310 生财有术|300 学习/320 财务知识|300 学习/330 认知提升|300 学习/340 频道存档|400 兴趣/410 单车骑行|400 兴趣/470 投资机会|500 课余/001 政治体制|500 课余/004 课外知识|600 清单列表|800 语录摘抄

URL
bear://x-callback-url/[[action]]?title=[[head]]&text=[[body]][[date]]&tags=[[prompt_button]]&name=[[tag]]&x-success=[[success]]
```
- 草稿只含字母 t/T 打开指定标签
- 草稿内的符号和换行会被预处理替换
- Markdown 列表格式缺少空格自动补全
- 如果是微信文章会在底部加上「复盘清单」的双向链接
- 可以根据选择的标签不同在追加笔记之后执行不同的 x-success

## 插件下载
#### [Alfred](https://drafts4-actions.agiletortoise.com/a/2PS)
用途：类似 macOS 上的 Alfred，使用关键词+内容启动特定的 URL Scheme，默认动作为 TaskPaper，可根据自己需求进行修改。

#### [URL](https://drafts4-actions.agiletortoise.com/a/2PV)
用途：使用 Drafts 内置的函数在 Drafts 内打开网页。

#### [TaskPaper](https://drafts4-actions.agiletortoise.com/a/2PT)
用途：根据 OmniFocus 的 TaskPaper 语法批量添加任务到 OmniFocus 中，配合 TextExpander 进行文本替换。

## 致谢名单
[YuktimH](https://sspai.com/user/47944/updates) 的[神奇搜索](https://sspai.com/post/35377)是 Alfred 的原型。  
[Soff Chen](https://github.com/soffchen) 为 Alfred 优化了代码，取消了区分大小写与标识符判断。  
[Platycodon](https://sspai.com/user/714505/updates) 为批量添加 OmniFocus 任务提供了动作支持，参见[《用 Drafts 实现 OmniFocus 批量添加任务》](https://sspai.com/post/38809)。  
[cpaconnelly](https://twitter.com/cpaconnelly) 设计的 [paste on omnifocus](https://drafts4-actions.agiletortoise.com/a/1xa) 为 TaskPaper 的原型。  
