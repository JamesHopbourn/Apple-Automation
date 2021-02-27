// 默认内容来自文稿 否则从剪切板读取
if (draft.content) {
  text = draft.content;
} else {
  text = getClipboard();
}

// 删除行首行末空格
text = text.trim();
// 替换中文引号 删除井号空格
text = text.replace(/#/g,'');
text = text.replace(/“/g,'「');
text = text.replace(/”/g,'」');
text = text.replace(/[\u00A0]/g,'');
// 当有两个以上换行合并为两个
text = text.replace(/\n{2,}/g, '\n\n');

noteTitle = {
  "体重管理": "体重管理",
  "生活日记": "生活日记",
  "语录摘抄": "语录摘抄",
  "加速日记": "加速日记",
  "课外知识": "课外知识",
  "生活随记": "生活随记",
  "成功日记": "成功日记",
  "关系日记": "关系日记",
  "电影记录": "电影日记",
  "梦境日记": "梦境日记",
  "读书笔记": "读书笔记",
  "恋爱日记": "恋爱日记",
  "推特存档": "推特存档",
  "时事概括": "时事概括"
}

note = draft.getTag('prompt_button');
note = note.replace(/^.*：/,'');

// vim mode with argument
if (text.split(' ')[0] == 't' ||
    text.split(' ')[0] == 'T') {
  draft.defineTag('action', 'open-note');
  draft.defineTag('success', '');
  //// t/T 之后可以带笔记标题参数
  if (text.split(' ')[1] != null)
    noteTitle[note] = text.split(' ')[1];
} else {
  draft.defineTag('action', 'add-text');
  //// 下面可以自定义追加文本之后是否返回 drafts
  //// 如果不需要跳回 drafts 请删除 drafts4://
  draft.defineTag('success', 'drafts4://');
}

// 下面可以自定义 x-success URL Scheme
if (note == '推特存档') {
  draft.defineTag('success', 'tweetbot://JamesHopbourn/post?text='+encodeURI(text));
}

// define tag
if (noteTitle[note] == null)
  noteTitle[note] = note;
draft.defineTag('text', text);
draft.defineTag('title',noteTitle[note]);