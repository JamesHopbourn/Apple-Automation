javascript:(function(){
url = encodeURIComponent(window.location);
url = url.match(/sspai|ifanr|pingwest|zhihu|github|mp.weixin.qq.com|bilibili|youtube|v.qq|taobao|jd.com|dangdang|douban|pediy|freebuf|iosre|csdn|segmentfault|stackoverflow|cnblogs/g);
switch(url[0]){
	case 'sspai':
	case 'ifanr':
	case 'pingwest':
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
     	 +'&name='+encodeURIComponent(document.title.replace(/- 少数派/g,""))
     	 +'&context=📑📑 科技文章 : 少数派'
     	 +'&estimate=10 mins&autosave=true';
		break;

   	case 'zhihu':
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
		 +'&name='+encodeURIComponent(document.title.replace(/ - 知乎|\(.*?(私信|消息).*?\)/g,""))
		 +'&context=🤔🤔 知乎问题 : 回答'
		 +'&estimate=10 mins&autosave=true';
   		break;

   	case 'github':
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	   	 +'&name='+encodeURIComponent(document.title.replace(/github/g,""))
	  	 +'&context=👍👍 开源项目'
	  	 +'&estimate=30 mins&autosave=true';
	  	break;

	case 'mp.weixin.qq.com':
		code = (document.documentElement.outerHTML);
		title = code.match(/msg_title = ".*"/g);
		title = title[0].replace(/msg_title = "|"/g,'');
		nickname = code.match(/var nickname = ".*"/);
		nickname = nickname[0].replace(/var nickname = "|"/g,'');
		author = code.match(/js_preview_reward_author_name">.*<\/div>/);
		author = author[0].replace(/js_preview_reward_author_name">|<\/div>/g,'');
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)+"  "+author+"  "+nickname
		 +'&name='+title
		 +'&context=📖📖 阅读列表'
		 +'&estimate=05 mins&autosave=true';
		break;  	

	case 'jd.com':
	case 'taobao':
	case 'douban':
	case 'dangdang':
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
		 +'&name='+encodeURIComponent(document.title.replace(/-淘宝网|- 京东.*?/g,""))
		 +'&context=🛒🛒 购物清单'
		 +'&estimate=01 mins&autosave=true';
		break;

	case 'youtube':
	case 'bilibili':
	case 'v.qq':
	 	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	  	 +'&name='+encodeURIComponent(document.title.replace(/- YouTube|\(\d+\)|_.*?bilibili|_腾讯视频/g,""))
	   	 +'&context=🎬🎬 电影视频'
	   	 +'&estimate=20 mins&autosave=true';
	   	break;

	case 'pediy':
	case 'freebuf':
	case 'iosre':
	case 'csdn':
	case 'segmentfault':
	case 'stackoverflow':
	case 'cnblogs':
	 	url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	 	 +'&name='+encodeURIComponent(document.title.replace(/-看雪安全论坛|-.*?\|.*?|- FreeBuf.*?|CSDN博客|SegmentFault 思否|Stack Overflow|博客园/g,""))
	 	 +'&context=⚙️⚙️ 逆向工程'
	  	 +'&estimate=20 mins&autosave=true';
	  	break;

	default:
		url = 'omnifocus:///add?note='+encodeURIComponent(window.location)
	  	 +'&name='+encodeURIComponent(document.title.replace(/\(\d+\)| (-|–|_|\|) (简书|MBA智库百科|维基百科，自由的百科全书|Medium)|(-|_)(什么值得买|使用评测|PingWest 品玩)/g,""))
	 	 +'&context=📖📖 阅读列表'
	 	 +'&estimate=05 mins&autosave=true';
		break;
}
window.open(url,'_self');
})();