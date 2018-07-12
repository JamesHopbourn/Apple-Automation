## Keyboard Maestro
![](https://github.com/JamesHopbourn/Apple-Automation/raw/master/Keyboard%20Maestro/PIC/keyboard.jpg)

### OmniFocus
自动化添加当前网页文章到 OmniFocus 的阅读列表上下文中，默认使用 option+L 激活。

#### 配置
1. 在 Safari 的个人收藏文件夹中新建名称为「⚙️」的文件夹。（因为还有其他 JS 脚本，所以统一放在同一个文件夹中整理起来更方便一些。）
2. 收藏任意一个网页，然后将网页名称改为「OmniFocus」。
3. 用下面的 JS 代码替换掉原来的网页地址，如果需要请按照个人便好进行修改 context，estimate。

```
javascript:window.location='omnifocus:///add?note='+encodeURIComponent(window.location)+'&name=🔖 '+encodeURIComponent(document.title.replace(/GitHub - |丨.*|-.*|\|.*|【.*】|“|”|……|[.*]|「|」|！|–.* |\(|\)|\[|\]|Medium|_.*| ｜.*|_.*/,""))+'&context=📕📕 Reading Lists'+'&estimate=04 mins'
```
<img src="/Keyboard%20Maestro/PIC/OmniFocus.gif" width="640" height="360"/>

### DEVONthink
自动化添加当前网页文章到 DEVONthink 中，默认使用 option+; 激活。

#### 配置
1. 在 Safari 的个人收藏文件夹中新建名称为「JS」的文件夹。（因为还有其他 JS 脚本，所以统一放在同一个文件夹中整理起来更方便一些。）
2. 收藏任意一个网页，然后将网页名称改为「DEVON」。3. 用下面的 JS 代码替换掉原来的网页地址，如果需要请按照个人便好进行修改 context，estimate。
3. 用下面的 JS 代码替换掉原来的网页地址。

```
javascript:window.location='x-devonthink://clip?title='+encodeURIComponent(document.title)+'&location='+encodeURIComponent(window.location)+'&referrer='+encodeURIComponent(document.referrer)+'&width='+window.innerWidth+'&text='+encodeURIComponent(getSelection())+'&source='+encodeURIComponent(document.documentElement.outerHTML)+ '&encoding='+encodeURIComponent(document.characterSet);
```
<img src="/Keyboard%20Maestro/PIC/DEVONthink.gif" width="640" height="360"/>

### AirDrop
自动发送当前 Safari 当前阅读页面到 AirDrop 的第一个设备中，默认使用 option+A 激活。

<img src="/Keyboard%20Maestro/PIC/AirDrop.gif" width="640" height="360"/>