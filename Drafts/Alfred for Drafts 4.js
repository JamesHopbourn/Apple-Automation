var key_list = [];
var input = draft.content;
var default_action = 'task';
var action, content, uri, arr;

var action_list = [
//OmniFocus
    ["task", "drafts4://x-callback-url/runAction?action=TaskPaper&text="],
//搜索引擎
    ["gg", "https://www.google.com/search?q=-baidu%20"],
    ["wx", "http://weixin.sogou.com/weixinwap?query=", 1],
    ["wolf", "http://m.wolframalpha.com/input/?i="],
    
//网上购物
    ["tb", "taobao://s.taobao.com/?q="],
    ["jd", "https://so.m.jd.com/ware/search.action?keyword=", 1],
    ["book", "http://search.m.dangdang.com/search.php?keyword=", 1],
    ["xianyu", "https://s.2.taobao.com/list/list.htm?search_type=item&q=", 1],
    
//文章查询
    ["ssp", "https://www.google.co.jp/search?q=site:sspai.com+"],
    ["mrmad", "https://mrmad.com.tw/?s="],
    ["medium", "https://medium.com/search?q="],

//信息查询
    ["say", "launch://x-callback-url/speak?x-success=drafts4://create&text="],
    ["music", "spotify:search:"],
    ["wiki", "https://zh.m.wikipedia.org/wiki/"],
    ["zhihu", "http://www.zhihu.com/search?q="],
    ["ip", "http://ip.cn/index.php?ip=", 1],
    ["pin", "https://www.pinterest.com/search/pins/?q="],
    ["gh", "https://github.com/search?&q="],
    ["youtube", "https://m.youtube.com/results?q="],
    ["blbl","bilibili://search?keyword="],

//实用工具
    ["test", ""],
    ["encode", ""],
    ["decode", ""],
    ["redeem", "https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/freeProductCodeWizard?mt=8&code="],
    ["tran", "https://translate.google.cn/m/translate#auto/zh-CN/", 1],
    
//社交软件
    ["ins", "instagram://user?username="],
    ["tw", "tweetbot:///post?text="],
    ["twuser", "tweetbot:///follow/"],
    
//谷歌高级搜索
    ["site", "https://www.google.com/search?q=-baidu%20site:"],
    ["doc", "https://www.google.com/search?q=-baidu%20filetype:doc+"],
    ["ppt", "https://www.google.com/search?q=-baidu%20filetype:ppt+"],
    ["pdf", "https://www.google.com/search?q=-baidu%20filetype:pdf+"],
    ["xls", "https://www.google.com/search?q=-baidu%20filetype:xls+"],
]

for (i = 0; i < action_list.length; i++) {
	      key_list.push(action_list[i][0]);
}

if (key_list.indexOf(input.split(' ').shift().toLowerCase()) != -1) {
	arr = input.split(' ');
	action = arr.shift().toLowerCase();
	uri = action_list[key_list.indexOf(action)][1];
	content = arr.join(' ');
}
else if (key_list.indexOf(input.split(' ').pop().toLowerCase()) != -1) {
	arr = input.split(' ');
	action = arr.pop().toLowerCase();
	uri = action_list[key_list.indexOf(action)][1];
	content = arr.join(' ');
}
else if (key_list.indexOf(input.split('\n').shift().toLowerCase()) != -1) {
	arr = input.split('\n');
	arr.shift().toLowerCase()
	uri = action_list[key_list.indexOf(action)][1];
	content = arr.join('\n');
}
else if (key_list.indexOf(input.split('\n').pop().toLowerCase()) != -1) {
	arr = input.split('\n');
	action = arr.pop().toLowerCase();
	uri = action_list[key_list.indexOf(action)][1];
	content = arr.join('\n');
}
else {
	action = default_action;
	uri = action_list[key_list.indexOf(action)][1];
	content = input.trim() ? input.trim() : getClipboard();
}

if (content.trim().length === 0) {
	if (uri.endsWith('//') || uri.endsWith('=')) {
		content = getClipboard().trim();
	}
}

if (draft.selectionLength > 0) {
	content = draft.content.substr(draft.selectionStart, draft.selectionLength);
}

if (uri.startsWith('http')) {
	if (action_list[key_list.indexOf(action)][2]) {
		content = encodeURIComponent(content);
		setClipboard(uri + content);
		uri = 'drafts4://x-callback-url/runAction?action=URL';
		content = "";
	}
}

if (action == 'test') {
    uri = encodeURI(content);
    content = "";
}

if (action == 'encode') {
    setClipboard((encodeURI(content)));
    uri = "drafts4://create";
    content = "";
}

if (action == 'decode') {
    setClipboard((decodeURI(content)));
    uri = "drafts4://create";
    content = "";
}

draft.defineTag("uri", uri);
draft.defineTag("content", content);