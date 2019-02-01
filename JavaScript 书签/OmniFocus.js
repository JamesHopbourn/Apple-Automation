vascript:(function(){
url = encodeURIComponent(window.location);

zhihu = url.match(/zhihu/g);
sspai = url.match(/sspai/g);
github = url.match(/github.com/);
wechat = url.match(/mp.weixin.qq.com/g);
video = url.match(/bilibili|youtube.com|v.qq/g);
shopping = url.match(/taobao|jd.com|dangdang/g);
reverse = url.match(/pediy|freebuf|iosre|csdn|segmentfault|stackoverflow|cnblogs/g);

if (zhihu !== null) {
	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/ - 知乎|\(.*?(私信|消息).*?\)/g,""))+'&context=🤔🤔 What Why How'+'&estimate=10 mins&autosave=true';
	} else {
		if (sspai !== null) {
			url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/- 少数派/g,""))+'&context=📑📑 SSPAI Article'+'&estimate=10 mins&autosave=true';

		} else {
			if (github !== null) {
				url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/github/g,""))+'&context=👍👍 GitHub Project'+'&estimate=30 mins&autosave=true';
			} else {
				if (wechat !== null) {
					code = (document.documentElement.outerHTML);
					title = code.match(/msg_title = ".*"/g);
					title = title[0].replace(/msg_title = "|"/g,'');
					nickname = code.match(/var nickname = ".*"/);
					nickname = nickname[0].replace(/var nickname = "|"/g,'');
					author = code.match(/js_preview_reward_author_name">.*<\/div>/);
					author = author[0].replace(/js_preview_reward_author_name">|<\/div>/g,'');
					url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+"   "+author+"   "+nickname+'&name=❇️ '+title+'&context=📖📖 Reading Lists'+'&estimate=05 mins&autosave=true';
				} else {
					if (video !== null) {
					url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/- YouTube|\(\d+\)|_.*?bilibili|_腾讯视频/g,""))+'&context=🎬🎬 Movies to watch'+'&estimate=30 mins&autosave=true';
					} else {
						if (shopping !== null) {
							url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/-淘宝网|- 京东.*?/g,""))+'&context=🛒🛒 Shopping'+'&estimate=01 mins&autosave=true';
						} else {
							if (reverse !== null) {
								url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/-看雪安全论坛|-.*?\|.*?|- FreeBuf.*?|CSDN博客|SegmentFault 思否|Stack Overflow|博客园/g,""))+'&context=⚙️⚙️ Reverse Engineering'+'&estimate=30 mins&autosave=true';
							} else {
									url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+'&name='+encodeURIComponent(document.title.replace(/\(\d+\)| (-|–|_|\|) (简书|MBA智库百科|维基百科，自由的百科全书|Medium)|(-|_)(什么值得买|使用评测|PingWest 品玩)/g,""))+'&context=📖📖 Reading Lists'+'&estimate=05 mins&autosave=true';
						}
					}
				}
			}
		}
	}
}

window.open(url,'_self');
})();
