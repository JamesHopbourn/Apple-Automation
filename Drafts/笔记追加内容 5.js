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
var didSelect = p.show();  // 显示列表选择弹窗
note = p.buttonPressed.replace(/^.*：/,'');

// 默认内容来自文稿 否则从剪切板读取
if (draft.content) {
  text = draft.content;
} else {
  text = getClipboard();
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
