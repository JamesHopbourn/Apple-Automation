var text = draft.content;

var folderTag = text.match(/@folder\(.+?\)/g);
if (folderTag != null) {
	var target = '/folder/' + folderTag[0].slice(8,-1);
} else {

var projectTag = text.match(/@project\(.+?\)/g);
	if (projectTag != null) {
		var target = '/task/' + projectTag[0].slice(9,-1);
	} else {
		var target = 'inbox';
	}
}

// 处理来自 Web Capture Extension 的链接
weblink = text.match(/\[.*\]\(.*\)/g);
if (weblink != null) {
   text = text.match(/\[.*\]/g);
   //text = text.replace(/\[/gi, "")
   link = text.match(/\(http.*\)/g);
   text = title+" @estimate(05 min) @context(📖📖 阅读列表)"+"\n"+link
   target = 'inbox';
}

draft.defineTag('text',text);
draft.defineTag('target',target);

//Open a URL: omnifocus:///paste?content=[[text]]&target=[[target]]&x-success=drafts4://