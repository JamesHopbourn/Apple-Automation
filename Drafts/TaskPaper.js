var text = draft.content;

text = text.replace(/sod/gi, "@context(1️⃣)")
text = text.replace(/sfs/gi, "@context(5⃣️)")
text = text.replace(/sfw/gi, "@context(🔟5⃣️)")
text = text.replace(/sss/gi, "@context(3⃣️0⃣️)")
text = text.replace(/tk/gi, "@context(👋👋 物品拿取)")
text = text.replace(/buy/gi, "@context(🛒🛒 购物清单)")
text = text.replace(/chat/gi, "@context(💬️💬️ 沟通交流) ")
text = text.replace(/wwh/gi, "@context(🤔🤔 知乎问题 : 疑问)")
text = text.replace(/mov/gi, "@context(🎬🎬 电影视频 : 清单)")
text = text.replace(/rel/gi, "@context(📖📖 阅读列表)")
text = text.replace(/td/gi, "@flagged @due(bToday 22:00)")
text = text.replace(/tm/gi, "@estimate(01 min) @flagged @due(Tomorrow 12:00) @context(1️⃣)")
text = text.replace(/ssp/gi, "@context(✏️✏️ 文章写作)")
text = text.replace(/myc/gi, "@context(💭 James Here Channel)")
text = text.replace(/vv/gi, " → ")

// 处理项目清单任务
var folderTag = text.match(/@folder\(.+?\)/g);
if (folderTag != null) {
	target = '/folder/' + folderTag[0].slice(8,-1);
} else {
    projectTag = text.match(/@project\(.+?\)/g);
	if (projectTag != null) {
	   target = '/task/' + projectTag[0].slice(9,-1);
	} else {
	   target = 'inbox';
	}
}

// 处理来自 Web Capture Extension 的链接
weblink = text.match(/\[.*\]\(.*\)/g);
if (weblink != null) {
   title = text.match(/\[.*\]/g);
   link = text.match(/\(http.*\)/g);
   text = "- 🔖 "+title+" @estimate(05 min) @context(📕📕 Reading Lists)"+"\n"+link
   target = 'inbox';
}

draft.defineTag('text',text);
draft.defineTag('target',target);

//Open a URL: omnifocus:///paste?content=[[text]]&target=[[target]]&x-success=drafts4://