javascript:(function(){
url = encodeURIComponent(window.location);
url = url.match(/zhihu|sspai|github|mp.weixin.qq.com|bilibili|youtube|v.qq|taobao|jd.com|dangdang|douban|pediy|freebuf|iosre|csdn|segmentfault|stackoverflow|cnblogs/g);
//🛒🛒 Shopping					'jd.com'||'taobao'||'douban'||'dangdang'
//🤔🤔 What Why How				'zhihu'||'quora'
//📑📑 SSPAI Article			'sspai'||'ifanr'||'pingwest'
//📖📖 Reading Lists			'default'||'mp.weixin.qq.com'
//🎬🎬 Movies to watch			'youtube'||'bilibili'||'v.qq'
//👍👍 GitHub Project			'github'
//⚙️⚙️ Reverse Engineering		'pediy'||'freebuf'||'iosre'||'csdn'||'segmentfault'||'stackoverflow'||'cnblogs'
switch (url[0]) {
//url 统一排序：note + name + context + （estimate + autosave）
	case 'sspai'||'ifanr'||'pingwest':
     	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
     	 +'&name='+encodeURIComponent(document.title.replace(/- 少数派/g,""))
     	 +'&context=📑📑 SSPAI Article'
     	 +'&estimate=10 mins&autosave=true';
	   break;
   	case 'zhihu'||'quora':
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
		 +'&name='+encodeURIComponent(document.title.replace(/ - 知乎|\(.*?(私信|消息).*?\)/g,""))
		 +'&context=🤔🤔 What Why How'
		 +'&estimate=10 mins&autosave=true';
   		break;
	case 'jd.com'||'taobao'||'douban'||'dangdang':
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
		 +'&name='+encodeURIComponent(document.title.replace(/-淘宝网|- 京东.*?/g,""))
		 +'&context=🛒🛒 Shopping'
		 +'&estimate=01 mins&autosave=true';
    	break;
	case 'youtube'||'bilibili'||'v.qq':
	  url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	   +'&name='+encodeURIComponent(document.title.replace(/- YouTube|\(\d+\)|_.*?bilibili|_腾讯视频/g,""))
	   +'&context=🎬🎬 Movies to watch'
	   +'&estimate=20 mins&autosave=true';
	  break;
	case 'github':
	  url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	   +'&name='+encodeURIComponent(document.title.replace(/github/g,""))
	   +'&context=👍👍 GitHub Project'
	   +'&estimate=30 mins&autosave=true';
	  break;
	case 'pediy'||'freebuf'||'iosre'||'csdn'||'segmentfault'||'stackoverflow'||'cnblogs':
	  url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	  +'&name='+encodeURIComponent(document.title.replace(/-看雪安全论坛|-.*?\|.*?|- FreeBuf.*?|CSDN博客|SegmentFault 思否|Stack Overflow|博客园/g,""))
	  +'&context=⚙️⚙️ Reverse Engineering'
	  +'&estimate=20 mins&autosave=true';
	  break;
	case 'mp.weixin.qq.com':
		code = (document.documentElement.outerHTML);
		title = code.match(/msg_title = ".*"/g);
		title = title[0].replace(/msg_title = "|"/g,'');
		nickname = code.match(/var nickname = ".*"/);
		nickname = nickname[0].replace(/var nickname = "|"/g,'');
		author = code.match(/js_preview_reward_author_name">.*<\/div>/);
		author = author[0].replace(/js_preview_reward_author_name">|<\/div>/g,'');
		switch(nickname[0]){
			case '玉树芝兰':
				url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+"  "+author+"  "+nickname
				 +'&name='+title
				 +'&context=玉树芝兰'
				 +'&estimate=10 mins&autosave=true';
				break;
		  default:
				url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+"  "+author+"  "+nickname
				 +'&name='+title
				 +'&context=📖📖 Reading Lists'
				 +'&estimate=05 mins&autosave=true';
				break;
		}
	  break;
  	default:
	  url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	  +'&name='+encodeURIComponent(document.title.replace(/\(\d+\)| (-|–|_|\|) (简书|MBA智库百科|维基百科，自由的百科全书|Medium)|(-|_)(什么值得买|使用评测|PingWest 品玩)/g,""))
	  +'&context=📖📖 Reading Lists'
	  +'&estimate=05 mins&autosave=true';
	  break;
}
alert(url);
window.open(url,'_self');
})();