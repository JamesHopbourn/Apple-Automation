var text = draft.content;

// 如果不带任何标签自动分配到今天最不紧要的任务
if (text.match(/@context\(.*\)/g) == null){ text = text + " @due(Today 23:00) @context(5⃣️)" }

// 如果包含 pbp 关键词就在下一行追加剪切板内容
if (text.match(/pbp/g)) { text = text.replace("pbp", "") + "\n"+ getClipboard(); }

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
if (text.match(/\[.*\]\(.*\)/g)) {
   text = text.match(/\[.*\]/g);
   //text = text.replace(/\[/gi, "")
   link = text.match(/\(http.*\)/g);
   text = title+" @estimate(05 min) @context(📖📖 阅读列表)"+"\n"+link
   target = 'inbox';
}

draft.defineTag('text',text);
draft.defineTag('target',target);