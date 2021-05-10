var p = Prompt.create(); // 创建一个列表弹窗
p.title = "选择笔记";     // 设置列表弹窗标题
p.addButton("读书记录")   // 增加选择按钮
p.addButton("推特存档")   // 增加选择按钮
p.addButton("灵感清单")   // 增加选择按钮
p.addButton("生活日记")   // 增加选择按钮
p.addButton("生活随记")   // 增加选择按钮
p.addButton("人际 👬：关系日记")  // 增加选择按钮
p.addButton("分类 📰：时事概括")  // 增加选择按钮
p.addButton("分类 😴：梦境日记")  // 增加选择按钮
p.addButton("学习 💡：课外知识")  // 增加选择按钮
p.addButton("学习 💬：生财有术")  // 增加选择按钮
p.addButton("学习 💬：语录摘抄")  // 增加选择按钮
p.addButton("日记 ✅：成功日记")  // 增加选择按钮
p.addButton("人际 ❤️：恋爱日记")  // 增加选择按钮
p.addButton("分类 🎬：电影日记")  // 增加选择按钮

// 默认内容来自文稿 否则从剪切板读取
if (draft.content) {
  text = draft.content;
} else {
  text = app.getClipboard();
}

// 首尾空格删除
text = text.trim();

// 替换中文引号 删除井号空格
text = text.replace(/#/g,'');
text = text.replace(/"/g,'');
text = text.replace(/“/g,'「');
text = text.replace(/”/g,'」');
text = text.replace(/[\u00A0]/g,'');

// vim mode with argument
if (text.split(' ')[0].match(/^(t|T)$/)) {
  //// 如果含有参数就用参数
  if (text.split(' ')[1]) {
    note = text.split(' ').slice(1).join(' ');
  } else {
    //// 不含参数就进行选择
    p.show();
    note = p.buttonPressed.replace(/^.*：/,'');
  }
  draft.setTemplateTag("title", note);
  draft.setTemplateTag('action', 'open-note');
  //// 注意区分两种不同匹配方式
} else if (text.split(' ')[0].toLowerCase().match(/bs/)) {
  draft.setTemplateTag('action', 'search');
  //// 搜索一定是有参数的
  term = text.split(' ').slice(1).join(' ');
  draft.setTemplateTag('term', term);
} else {
  //// 谈论 p.show() 好处
  p.show();
  note = p.buttonPressed.replace(/^.*：/,'');
  draft.setTemplateTag("title", note);
  draft.setTemplateTag('action', 'add-text');
  draft.setTemplateTag('success', 'drafts5://');
}

if (note == '读书记录')
  text = '《' + text + '》'

text = text.split('\n');
for (var i = 0; i < text.length; i++) {
  if (text[i].length != 0 && 
     !text[i].charAt(text[i].length-1).match(/(》|\)|\.|。|!|！|\?|？|:|：|;|；)$/)) {
    if (text[i].charAt(text[i].length-1).match(/[0-9]/))
      continue;
    else if (text[i].match(/^(-|✅|\d+.) /))
      continue;
    else if (text[i].charAt(text[i].length-1).match(/[a-zA-Z]/))
      text[i] += '.';
    else
      text[i] += '。';
  }
}
text = text.join('\n');

draft.setTemplateTag("text", text);
