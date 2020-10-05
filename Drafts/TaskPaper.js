var text = draft.content;

if (text.match(/Communicate/) != null){
	// 临时变量存储
	var temp = ''
	line = text.split("\n")

	for (var i = 0; i < line.length; i++) {
	var text = line[i]
	// 如果没有横杆给每行加上横杠
    if (text.match(/^- /) == null){ text = '- ' + text }
	var chta = /@context\(\ud83d[\udcac].*\) @due\(today 19:10\)/g
	var chtb = /@context\(\ud83d[\udcac].*\) @due\(today 19:20\)/g
	var chtc = /@context\(\ud83d[\udcac].*\) @due\(today 19:30\)/g
	var chtd = /@context\(\ud83d[\udcac].*\) @due\(today 19:40\)/g
	var chat = /@context\(\ud83d[\udcac].*\) @due\(today 19:50\)/g

	if (text.match(chta) != null){ text = text.replace(/-/,"- 1⃣️ "); }
	if (text.match(chtb) != null){ text = text.replace(/-/,"- 2⃣️ "); }
	if (text.match(chtc) != null){ text = text.replace(/-/,"- 3⃣️ "); }
	if (text.match(chtd) != null){ text = text.replace(/-/,"- 4⃣️ "); }
	if (text.match(chat) != null){ text = text.replace(/-/,"- 💬️ "); }

	// 原本要使用十个关键词，但是想了一下可以用上面的这组关键词+tm关键词代替下面的这五个关键词，所以要安排到明天需要两个关键词实现
	// 例如：输入「某某任务 chta tm」会被文本替换为「某某任务 @context(💬️ Communicate) @due(tom 19:20) @due(tom 20:00)」
	// 但是由于 OmniFocus 的特性，一行中出现两个 @due 以后面的时间为准
	var tchta = /@context\(\ud83d[\udcac].*\) @due\(today 19:10\) @due\(tom .*\)/g
	var tchtb = /@context\(\ud83d[\udcac].*\) @due\(today 19:20\) @due\(tom .*\)/g
	var tchtc = /@context\(\ud83d[\udcac].*\) @due\(today 19:30\) @due\(tom .*\)/g
	var tchtd = /@context\(\ud83d[\udcac].*\) @due\(today 19:40\) @due\(tom .*\)/g
	var tchat = /@context\(\ud83d[\udcac].*\) @due\(today 19:50\) @due\(tom .*\)/g

	if (text.match(tchta) != null){ text = text.replace(/-/,"- 1⃣️ "); text = text.replace(/@due\(tom 18:00\) @context\(5⃣️\)/g,''); text = text.replace(/today/,'tom') }
	if (text.match(tchtb) != null){ text = text.replace(/-/,"- 2⃣️ "); text = text.replace(/@due\(tom 18:00\) @context\(5⃣️\)/g,''); text = text.replace(/today/,'tom') }
	if (text.match(tchtc) != null){ text = text.replace(/-/,"- 3⃣️ "); text = text.replace(/@due\(tom 18:00\) @context\(5⃣️\)/g,''); text = text.replace(/today/,'tom') }
	if (text.match(tchtd) != null){ text = text.replace(/-/,"- 4⃣️ "); text = text.replace(/@due\(tom 18:00\) @context\(5⃣️\)/g,''); text = text.replace(/today/,'tom') }
	if (text.match(tchat) != null){ text = text.replace(/-/,"- 💬️ "); text = text.replace(/@due\(tom 18:00\) @context\(5⃣️\)/g,''); text = text.replace(/today/,'tom') }
	// 临时存储处理完的行
	temp = temp + "\n" + text
	}
	// 删掉首行的临时变量
    text = text.slice(1)
	// 如果有沟通任务安排到明天会被重复加上一个符号，在此删去一个
	text = temp.replace(/1⃣️  1⃣️/,'1⃣️')
	text = text.replace(/2⃣️  2⃣️/,'2⃣️')
	text = text.replace(/3⃣️  3⃣️/,'3⃣️')
	text = text.replace(/4⃣️  4⃣️/,'4⃣️')
	text = text.replace(/💬️  💬️/,'💬️')
}

// 如果不带任何标签自动分配到今天最不紧要的任务
if (text.match(/@context\(.*\)/g) == null){ text = text + " @due(Today 08:00) @context(5⃣️)" }

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