Bookmarklet 调用远程脚本

为什么要使用远程脚本：bookmarklet 代码长度限制是 2000
字，且后期维护有点麻烦，所以使用远程脚本会比直接插入代码方便。

Chrome 书签地址：
```
javascript: (function() {
    var js = document.createElement('script');
    js.setAttribute('src', 'JavaScript 脚本地址');
    document.body.appendChild(js);
})();
```

本地 JavaScript 示例代码：
```
(function(){alert('hello world')})();
```

本地 JavaScript OmniFocus 示例代码：
```
javascript:(function(){
url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
     	 +'&name='+encodeURIComponent(document.title)
     	 +'&estimate=10 mins&autosave=true';
       window.open(url,'_self');
})();
```

直接调用这个本地文件会提示：Not allowed to load local resource
  
所以我们需要把这个脚本上传到服务器上或者本地搭建环境，我个人建议是使用本地搭建环境：crontab 配合 pyhton 实现

开机自启
```
crontab -e

@reboot cd ~/Coding;python -m SimpleHTTPServer
```
