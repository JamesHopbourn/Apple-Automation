## 当前页面保存到 OmniFocus 待办事项

```
javascript:(function(){
url = encodeURIComponent(window.location);

zhihu = url.match(/zhihu/g);
sspai = url.match(/sspai/g);
video = url.match(/bilibili|youtube.com|v.qq/g);
wechat = url.match(/mp.weixin.qq.com/g);
shopping = url.match(/taobao|jd.com|dangdang/g);
reverse = url.match(/pediy|freebuf|iosre|csdn|github|segmentfault|stackoverflow|cnblogs/g);

if (zhihu !== null) {
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/ - 知乎|\(.*?(私信|消息).*?\)/g,""))+'&context=🤔🤔 What Why How'+'&estimate=10 mins&autosave=true';
} else {
	if (sspai !== null) {
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name=🔖 '+encodeURIComponent(document.title.replace(/- 少数派/g,""))+'&context=📑📑 Research Article'+'&estimate=10 mins&autosave=true';
	} else {
		if (video !== null) {
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/- YouTube|\(\d+\)|_.*?bilibili|_腾讯视频/g,""))+'&context=🎬🎬 Movies to watch'+'&estimate=30 mins&autosave=true';
		} else {
			if (wechat !== null) {
	code = (document.documentElement.outerHTML);
	title = code.match(/msg_title = ".*"/g);
	title = title[0].replace(/msg_title = "|"/g,'');
	nickname = code.match(/var nickname = ".*"/);
	nickname = nickname[0].replace(/var nickname = "|"/g,'');
	author = code.match(/js_preview_reward_author_name">.*<\/div>/);
	author = author[0].replace(/js_preview_reward_author_name">|<\/div>/g,'');
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+"   "+author+"   "+nickname+'&name=🔖 '+title+'&context=📕📕 Reading Lists'+'&estimate=05 mins&autosave=true';
			} else {
				if (shopping !== null) {
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/-淘宝网|- 京东.*?/g,""))+'&context=🛒🛒 Shopping'+'&estimate=05 mins&autosave=true';
				} else {
					if (reverse !== null) {
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/-看雪安全论坛|-.*?\|.*|- FreeBuf.*|- 博客园|- SegmentFault 思否|- Stack Overflow/g,""))+'&context=⚙️⚙️ Reverse Engineering'+'&estimate=30 mins&autosave=true';
					} else {
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name=🔖 '+encodeURIComponent(document.title.replace(/\(.*?(私信|消息).*?\)|\(\d+\)| (-|–|_|\|) (简书|MBA智库百科|维基百科，自由的百科全书|Medium|阮一峰的网络日志|幕后)|(-|_)(什么值得买|使用评测|PingWest 品玩)/g,""))+'&context=📕📕 Reading Lists'+'&estimate=05 mins&autosave=true';
					}
				}
			}
		}
	}
}
window.open(url,'_self');
})();
```

## 视频画中画

```
javascript:document.querySelector("video").webkitSetPresentationMode("picture-in-picture")
```

## 强制使用 HTML5 播放视频

```
javascript:void !function(){var h=function(){var k=document.body.innerHTML;var j=/appsrc : '([\w\W]*)m3u8'/;return k.match(j)[1]+"mp4"};var a=null;var g=null;var b=null;var e="speedVideo";var i=function(){if(document.getElementById(e)!==null){return}g=document.createElement("div");g.style.width="860px";g.style.height="485px";g.style.backgroundColor="#000";g.style.position="absolute";g.style.zIndex=9999;g.style.top="140px";g.style.left=(document.body.clientWidth-860)/2+"px";a=document.createElement("video");a.id="speedVideo";var j=h();if(j===undefined){console.log("Can't get the src.");return}a.style.width="100%";a.style.height="100%";a.autoplay="true";a.src=j;a.controls="controls";b=document.createElement("span");b.innerHTML="x3";b.style.color="#fff";b.style.fontSize="4em";b.style.position="absolute";b.style.top=0;b.style.right="20px";b.style.visibility="hidden";g.appendChild(a);g.appendChild(b);document.body.appendChild(g);document.getElementById("FPlayer").style.display="none";document.onkeypress=c};var f=null;var c=function(l){var j=l.keyCode||l.which||l.charCode;var k=a.playbackRate;switch(j){case 91:k-=0.1;break;case 93:k+=0.1;break;case 43:k+=1;break;case 45:k-=1;break;default:break}k=Math.round(k*100)/100;if(k<=0||k>=32){k=Math.round(a.playbackRate*100)/100}a.playbackRate=k;b.innerHTML="X"+k;b.style.visibility="visible";clearTimeout(f);f=setTimeout(d,400)};var d=function(){b.style.visibility="hidden"};i()}();
```

## 在 IINA 中打开视频

```
javascript:window.location='iina://weblink?url='+encodeURIComponent(window.location)
```

## 网页分屏

```
javascript:document.write('%3CHTML%3E%3CHEAD%3E%3C/HEAD%3E%3CFRAMESET%20COLS=\'50%25,*\'%3E%3CFRAME%20SRC='%20+%20location.href%20+%20'%3E%3CFRAME%20SRC='%20+%20location.href%20+%20'%3E%3C/FRAMESET%3E%3C/HTML%3E')
```