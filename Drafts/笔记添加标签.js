var ID = 'B39C6145-4F8F-4E4E-935F-7DCF972EFD5A-45275-00009E975B3017E2'

// 默认内容来自文稿 否则从剪切板读取
if (draft.content) {
  text = draft.content;
} else {
  text = getClipboard();
}

// 文本符号替换删除
text = text.replace(/#/g,'');
text = text.replace(/"/g,'');
text = text.replace(/‘/g,'');
text = text.replace(/’/g,'');
text = text.replace(/“/g,'「');
text = text.replace(/”/g,'」');
text = text.replace(/•/g,'- ');
text = text.replace(/·/g,'- ');
text = text.replace(/， /g,'，');
text = text.replace(/。 /g,'。');
text = text.replace(/[\u00A0]/g,'');

// 开始循环处理
text = text.split('\n');
// 列表自动添加空格
for (var i = 0; i < text.length; i++)
  if (text[i].match(/^[0-9]./) && text[i].match(/^[0-9]. /) === null)
    text[i] = text[i].replace(/\./, '. ');
// 公众号的名片删除
for(var i = 1; i < text.length + 20; i++){
  if (typeof(text[i]) !== 'undefined' &&
    text[i].match(/篇原创内容/)) {
    body = text.slice(i + 3);
    temp = text.slice(0,i - 2);
    text = temp.concat(body);
  }
}
// 文章分割段落删除
for (var i = text.length - 30; i < text.length - 2; i++){
  if (typeof(text[i]) !== 'undefined' && 
    text[i].match(/(end|END|作者|更多文章|收录于话题|二维码)/)){
    link = text.slice(-2);
    text = text.slice(0, i);
    text = text.concat(link);
  }
}
text = text.join('\n');
// 结束循环处理

// vim mode
tag = draft.getTag('prompt_button') || '';
if (text.split(' ')[0] === 't' ||
    text.split(' ')[0] === 'T') {
  draft.defineTag('tag', tag);
  draft.defineTag('action', 'open-tag');
  draft.defineTag('success', '');
} else {
  draft.defineTag('action', 'create');
  draft.defineTag('success', 'drafts4://');
}

// x-success URL Scheme
if (tag === '300 学习/340 频道存档') {
  draft.defineTag('success', 'tg://msg?text='+encodeURI(text));
}

// create date
var today = new Date();
var cdate = today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日';

// 微信公众号文章处理
temp = text.split('\n');
if (temp[temp.length - 1].match(/mp.weixin.qq.com/g)) {
  head = temp;
  // 删除发布日期
  head = head.slice(0, 1);
  temp = temp.slice(3);
  if (temp[0].length === 0)  temp = temp.slice(1);
  // 删除收录分类
  if (temp[0].match(/收录/))  temp = temp.slice(3);
  if (temp[0].length === 0)  temp = temp.slice(1);
  // 删除文章来源
  if (temp[0].match(/来源/))  temp = temp.slice(4);
  if (temp[0].length === 0)  temp = temp.slice(1);
  temp = head.concat(temp);
  cdate = '   [复盘清单](bear://x-callback-url/open-note?id=' + ID + '&header=' + encodeURI(cdate) + ')'
} else if (temp[temp.length - 1].match(/http/g)){
  cdate = '   [复盘清单](bear://x-callback-url/open-note?id=' + ID + '&header=' + encodeURI(cdate) + ')'
} else {
  cdate = '\n\n[复盘清单](bear://x-callback-url/open-note?id=' + ID + '&header=' + encodeURI(cdate) + ')'
}
head = temp[0].trim();
content = temp.slice(1);
content = content.join('\n');
// 当有两个以上换行合并为两个
content = content.replace(/\n{2,}/g, '\n\n');

draft.defineTag('head', head);
draft.defineTag('cdate', cdate);
draft.defineTag('content', content);
