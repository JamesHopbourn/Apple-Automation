var p = Prompt.create();  // 创建一个列表弹窗
p.title = "请选择笔记";     // 设置列表弹窗标题
p.addButton("体重管理")  // 增加选择按钮
p.addButton("推特存档")  // 增加选择按钮
p.addButton("灵感清单")  // 增加选择按钮
p.addButton("生活日记")  // 增加选择按钮
p.addButton("生活随记")  // 增加选择按钮
p.addButton("人际 👬：关系日记")  // 增加选择按钮
p.addButton("分类 📰：时事概括")  // 增加选择按钮
p.addButton("分类 😴：梦境日记")  // 增加选择按钮
p.addButton("学习 💡：课外知识")  // 增加选择按钮
p.addButton("学习 💬：生财有术")  // 增加选择按钮
p.addButton("学习 💬：语录摘抄")  // 增加选择按钮
p.addButton("日记 ✅：成功日记")  // 增加选择按钮
p.addButton("人际 ❤️：恋爱日记")  // 增加选择按钮
p.addButton("分类 🎬：电影日记")  // 增加选择按钮
p.show();  // 显示列表选择弹窗
note = p.buttonPressed.replace(/^.*：/,'');

// 默认内容来自文稿 否则从剪切板读取
if (draft.content) {
  text = draft.content;
} else {
  text = app.getClipboard();
}

// vim mode with argument
if (text.split(' ')[0].match(/^(t|T)$/)) {
  draft.setTemplateTag('action', 'open-note');
  //// 即使参数值为空也要定义
  draft.setTemplateTag('success', '');
  //// t/T 之后可以选择带笔记标题参数打开笔记
  //// 例如「t 叹云兮」打开标题是叹云兮的笔记
  note = text.split(' ')[1];
} else {
  draft.setTemplateTag('action', 'add-text');
  //// 下面可以自定义追加文本之后是否返回 drafts
  //// 如果不需要跳回 drafts 请删除 drafts4://
  draft.setTemplateTag('success', 'drafts4://');
  // 行末自动补全中西文句号
  text = text.split('\n');
  for (var i = 0; i < text.length; i++) {
    if (text[i].length != 0 && 
       !text[i].charAt(text[i].length-1).match(/(\)|\.|!|\?|;|。|！|？|；)$/)) {
      if (text[i].charAt(text[i].length-1).match(/[0-9]/))
        continue;
      else if (text[i].charAt(text[i].length-1).match(/[a-zA-Z]/))
        text[i] += '.';
      else
        text[i] += '。';
    }
  }
  text = text.join('\n');
}

// 首尾空格删除
text = text.trim();

// 替换中文引号 删除井号空格
text = text.replace(/#/g,'');
text = text.replace(/"/g,'');
text = text.replace(/“/g,'「');
text = text.replace(/”/g,'」');
text = text.replace(/[\u00A0]/g,'');

// 定义标签
draft.setTemplateTag("text", text);
draft.setTemplateTag("title", note);
