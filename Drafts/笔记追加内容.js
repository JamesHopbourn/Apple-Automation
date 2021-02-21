//// Prompt
// 生活日记|生活随记|体重管理|推特存档|快进 ⏩：加速日记|日记 ✅：成功日记|基金 💵：投资机会|人际 ❤️：恋爱日记|人际 👬：关系日记|学习 💡：课外知识|学习 💬：语录摘抄|分类 🎬：电影记录|分类 😴：梦境日记|分类 📰：时事概括

//// Script
// 默认内容来自文稿 否则从剪切板读取
if (draft.content){
  text = draft.content;
} else {
  text = getClipboard();
}

// vim mode
if(text.length == 1 && text.match(/t|T/)){
   draft.defineTag('action', 'open-note');
} else {
   draft.defineTag('action', 'add-text');
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
  "投资机会": "投资机会",
  "电影记录": "电影记录",
  "梦境日记": "梦境日记",
  "读书笔记": "读书笔记",
  "恋爱日记": "恋爱日记",
  "推特存档": "推特存档",
  "时事概括": "时事概括"
}

// 标签去掉 emoji 前缀
note = draft.getTag('prompt_button') || '';
note = note.replace(/^.*：/,'');
if (note == '推特存档'){
  draft.defineTag('success', 'tweetbot://JamesHopbourn/post?text='+encodeURI(text));
} else {
  draft.defineTag('success', 'draft4://');
}

draft.defineTag('text', text);
draft.defineTag('title',noteTitle[note]);

//// URL
// bear://x-callback-url/[[action]]?title=[[ID]]&mode=prepend&text=-%20[[date|%Y-%m-%d %-H:%M %A]]%0A[[text]]%0A&open_note=yes&x-success=[[success]]