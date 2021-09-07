var key_list = [];
var input = draft.content;
var default_action = 'gg';
var action, content, uri, arr;

var action_list = [
//OmniFocus
    ["task", "drafts4://x-callback-url/runAction?action=TaskPaper&text="],
//搜索引擎
    ["gg", "x-web-search://?"],
    ["vt", "x-web-search://?site:v2ex.com%20"],
    ["ssp", "x-web-search://?q=site:sspai.com+"],
    ["zh", "zhihu://search?type=content&q="],
    ["wx", "http://weixin.sogou.com/weixinwap?query=", 1],
    ["wolf", "http://m.wolframalpha.com/input/?i="],
    ["db", "douban:///search?q="],
    ["mrmad", "https://mrmad.com.tw/?s="],
    ["medium", "https://medium.com/search?q="],
    ["wb", "weixin://app/wx58164a91f1821369/jumpWxa/?userName=gh_5f1a249e0ced&path=pages/Discover/Discover.html?searchValue=%@&needResult=true"],
    
//网上购物
    ["tb", "taobao://s.taobao.com/?q="],
    ["tm" , "tmall://page.tm/search?q="],
    ["mt", "meituanwaimai://waimai.meituan.com/search?query="],
    ["book", "http://search.m.dangdang.com/search.php?keyword=", 1],
    ["pdd", "pinduoduo://com.xunmeng.pinduoduo/search_result.html?search_key="],
    ["jd", "openjd://virtual?params=%7B%22des%22:%22productList%22,%22keyWord%22:%22%@%22,%22from%22:%22search%22,%22category%22:%22jump%22%7D"],
    ["smz", "smzdm://search?json=%7B%22channelName%22%3A%22home%22%2C%22search_type%22%3A%221%22%2C%22keyWord%22%3A%22%@%22%7D"],

//信息查询
    ["sp", "spotify:search:"],
    ["edic", "eudic://dict/"],
    ["aro", "dictionary2://define-"],
    ["bs", "bear://x-callback-url/search?term="],
    ["say", "launch://x-callback-url/speak?x-success=drafts4://create&text="],
    ["wiki", "https://zh.m.wikipedia.org/wiki/"],
    ["ip", "http://ip.cn/index.php?ip=", 1],
    ["pin", "https://www.pinterest.com/search/pins/?q="],
    ["gh", "https://github.com/search?&q="],
    ["ytb", "https://m.youtube.com/results?q="],
    ["blbl","bilibili://search?keyword="],
    ["as", "itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term="],

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

if (uri.match(/%@/)) {
    uri = uri.replace(/%@/, encodeURI(content));
    content = "";
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

if (action == 'bmi') {
    temp = content.split(' ');
    height = temp[0],weight = temp[1];
    bmi = (weight/(height*height)).toFixed(2)
    uri = "drafts4://create?text=";
    content = '体重 '+weight+'\nBMI '+bmi;
}

draft.defineTag("uri", uri);
draft.defineTag("content", content);