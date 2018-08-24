//原作者 Soffchen
//改了一下适配 Drafts 5
//https://gist.github.com/soffchen/5989f7ef4c0cef9f7a4e29254f3fa0e2#file-alfred-js

var input = draft.content;
var action, content, uri, arr;
var key_list = [];

// default action
var default_action = 'gg';

// action List ["ACTION_NAME", "URL_SCHEME", "USE_INTERNAL_BROWSER"]
var action_list = [
	["gg", "https://www.google.com.hk/search?q=", 1],
	["map", "http://maps.apple.com/?q=", 0],
	["app", "itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?edia=software&term=", 0],
	["url", "", 1],
	["tel", "tel://", 0],
	["sms", "sms://", 0],
	["bing", "http://cn.bing.com/search?q=", 1],
	["gm", "comgooglemaps://?q=", 0],
	["tb", "taobao://s.taobao.com/?q=", 0],
	["jd", "https://so.m.jd.com/ware/search.action?keyword=", 1],
	["tweet", "drafts5://x-callback-url/runAction?action=Twitter&text=", 0],
	["tweetbot", "tweetbot:///post?text=", 0],
	["twitter", "twitter://post?message=", 0],
	["ip", "http://ip.cn/?ip=", 1],
	["us", "http://itunes.apple.com/us/app/region-chager/id0123456789", 0],
	["cn", "http://itunes.apple.com/cn/app/region-chager/id0123456789", 0],
	["hk", "http://itunes.apple.com/hk/app/region-chager/id0123456789", 0],
	["alipay", "alipays://platformapi/startapp?appId=20000056", 0]
];

for (i = 0; i < action_list.length; i++) {
	key_list.push(action_list[i][0]);
}

// parse keyword
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
	content = input.trim() ? input.trim() : app.getClipboard();
}

// don't append unnecessary clipboard content 
if (content.trim().length === 0) {
	if (uri.endsWith('//') || uri.endsWith('=')) {
		content = app.getClipboard().trim();
	}
}

if (draft.selectionLength > 0) {
	content = draft.content.substr(draft.selectionStart, draft.selectionLength);
}

// url without http://
if (action == 'url') {
	uri = content.startsWith('http') ? content : 'http://' + content;
	content = '';
}

// parse mobile and phone number
if (action == 'tel' || action == 'sms' || action == 'ip') {
	content = content.replace('\u202d', '');
	content = content.replace('\u202c', '');

	var num = content.match(/(86)?1[3|5|7|8][0-9]\d{4,8}/);

	if (!num) {
		num = content.match(/(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,8}/);
	}

	content = num ? num[0] : content;
}

// parse ip address
if (action == 'ip') {
	var ip = content.match(/(\d+)\.(\d+)\.(\d+)\.(\d+)/);
	content = ip ? ip[0] : content;
}

// use internal browser
if (uri.startsWith('http')) {
	if (action_list[key_list.indexOf(action)][2]) {
		content = encodeURIComponent(content);
		app.setClipboard(uri + content);
		uri = 'drafts5://x-callback-url/runAction?action=URL';
		content = '';
	}
}

draft.setTemplateTag("uri", uri);
draft.setTemplateTag("content", content);