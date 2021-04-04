var ID = 'B39C6145-4F8F-4E4E-935F-7DCF972EFD5A-45275-00009E975B3017E2';

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
var date = today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日';
date = '@@[复盘清单](bear://x-callback-url/open-note?id=' + ID + '&header=' + encodeURI(date) + ')'

// 微信公众号文章处理
text = text.split('\n');
head = text[0].trim();
body = text;
if (body[body.length - 1].match(/mp.weixin.qq.com/g)) {
  // 删除发布时间
  body = text.slice(3);

  // 删除收录标签
  if (body[0].match(/收录/))  body = body.slice(3);
  if (body[0].length === 0)  body = body.slice(1);

  // 删除文章来源
  if (body[0].match(/来源/))  body = body.slice(4);
  if (body[0].length === 0)  body = body.slice(1);

  // 公众号的名片删除
  for (var i = 1; i < body.length + 20; i++) {
    if (typeof(body[i]) !== 'undefined' &&
      body[i].match(/篇原创内容/)) {
      body = body.slice(4);
    }
  }

  // 列表自动添加空格
  for (var i = 0; i < body.length; i++)
    if (body[i].match(/^([0-9][0-9][0-9]|[0-9][0-9]|[0-9])(\.|、| )/) && 
      body[i].match(/^([0-9][0-9][0-9]|[0-9][0-9]|[0-9])(\.|、| ) /) === null && 
      body[i].match(/^([0-9]|[0-9][0-9])(月| 月|年| 年|万| 万)/) === null)
      body[i] = body[i].replace(/(\.|、| )/, '. ');

  // / 符号替换为三级标题
  for (var i = 0; i < body.length; i++)
    body[i] = body[i].replace(/[0-9](\/ |\/)/, '### ');

  // 文章分割段落删除
  for (var i = body.length - 50; i < body.length - 2; i++) {
    if (typeof(body[i]) !== 'undefined' && 
      body[i].match(/(end|END|作者|更多文章|往期文章|必看文章|收录于话题|二维码)/)) {
      link = body.slice(-2);
      body = body.slice(0, i);
      body = body.concat(link);
    }
  }

  date = date.replace(/@@/,'   ');
} else if (body[body.length - 1].match(/http/g)) {
  body = body.slice(1);
  date = date.replace(/@@/,'   ');
} else {
  body = body.slice(1);
  date = date.replace(/@@/,'\n\n');
}

// body 首行为空删除
for (var i = 1; i < 3 ; i++) {
  if (typeof(body[i]) !== 'undefined' && 
    body[i].length === 0) {
    body = body.slice(1);
    break;
  }
}

body = body.join('\n');
body = body.replace(/\n{2,}/g, '\n\n');

draft.defineTag('head', head);
draft.defineTag('body', body);
draft.defineTag('date', date);
