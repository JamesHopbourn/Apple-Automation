// 默认内容来自文稿 否则从剪切板读取
if (draft.content) {
  text = draft.content;
} else {
  text = getClipboard();
}

// vim mode
tag = draft.getTag('prompt_button') || '';
if (text.length == 1 && text.match(/t|T/)) {
  draft.defineTag('tag', tag);
  draft.defineTag('action', 'open-tag');
  draft.defineTag('success', '');
} else {
  draft.defineTag('action', 'create');
  draft.defineTag('success', 'drafts4://');
}

// x-success URL Scheme
if (tag == '300 学习/340 频道存档') {
  draft.defineTag('success', 'tg://msg?text='+encodeURI(text));
}

// 微信公众号文章处理
temp = text.split('\n');
if (temp[temp.length-1].match(/mp.weixin.qq.com/g)) {
  head = temp;
  // 删除发布日期
  head = head.slice(0,1);
  temp = temp.slice(3);
  if (temp[0].length == 0)  temp = temp.slice(1);
  // 删除收录分类
  if (temp[0].match(/收录/)) temp = temp.slice(3);
  if (temp[0].length == 0)  temp = temp.slice(1);
  temp = head.concat(temp);
  var today = new Date();
  var cdate = today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日';
  cdate = '  [复盘清单](bear://x-callback-url/open-note?id=B39C6145-4F8F-4E4E-935F-7DCF972EFD5A-45275-00009E975B3017E2&header=' + encodeURI(cdate) + ')'
  draft.defineTag('cdate', cdate);
} else {
  draft.defineTag('cdate', '');
}
head = temp[0];content = temp.slice(1).join('\n');

// 删除行首行末空格
head = head.trim();
head = head.replace(/#/g,'');
head = head.replace(/“/g,'「');
head = head.replace(/”/g,'」');
head = head.replace(/[\u00A0]/g,'');
// 替换中文引号 删除井号空格
content = content.trim();
content = content.replace(/#/g,'');
content = content.replace(/“/g,'「');
content = content.replace(/”/g,'」');
content = content.replace(/[\u00A0]/g,'');
// 当有两个以上换行合并为两个
content = content.replace(/\n{2,}/g, '\n\n');

draft.defineTag('head', head);
draft.defineTag('content', content);