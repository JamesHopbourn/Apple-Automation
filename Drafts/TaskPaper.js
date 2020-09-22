var text = draft.content;

var chta = /@context\(\ud83d[\udcac].*\) @due\(today 19:10\)/g
var chtb = /@context\(\ud83d[\udcac].*\) @due\(today 19:20\)/g
var chtc = /@context\(\ud83d[\udcac].*\) @due\(today 19:30\)/g
var chtd = /@context\(\ud83d[\udcac].*\) @due\(today 19:40\)/g
var chat = /@context\(\ud83d[\udcac].*\) @due\(today 19:50\)/g

var tchta = /@context\(\ud83d[\udcac].*\) @due\(tomorrow 19:10\)/g
var tchtb = /@context\(\ud83d[\udcac].*\) @due\(tomorrow 19:20\)/g
var tchtc = /@context\(\ud83d[\udcac].*\) @due\(tomorrow 19:30\)/g
var tchtd = /@context\(\ud83d[\udcac].*\) @due\(tomorrow 19:40\)/g
var tchat = /@context\(\ud83d[\udcac].*\) @due\(tomorrow 19:50\)/g

if (text.match(chta) != null){ text = "1⃣️ " + text; }
if (text.match(chtb) != null){ text = "2⃣️ " + text; }
if (text.match(chtc) != null){ text = "3⃣️ " + text; }
if (text.match(chtd) != null){ text = "4⃣️ " + text; }
if (text.match(chat) != null){ text = "💬️ " + text; }

if (text.match(tchta) != null){ text = "1⃣️ " + text; }
if (text.match(tchtb) != null){ text = "2⃣️ " + text; }
if (text.match(tchtc) != null){ text = "3⃣️ " + text; }
if (text.match(tchtd) != null){ text = "4⃣️ " + text; }
if (text.match(tchat) != null){ text = "💬️ " + text; }

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
