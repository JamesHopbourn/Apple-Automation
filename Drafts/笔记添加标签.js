//// Prompt
// 600 清单|400 兴趣/470 投资机会|400 兴趣/410 单车骑行|400 兴趣/405 绘图设计| 500 课余/001 政治体制|500 课余/004 课外知识|010 日记/020 恋爱日记|200 生活/250 恋爱知识|010 日记/011 生活日记|010 日记/013 社会时事|800 语录摘抄|900 演讲稿

//// Script
// 默认内容来自 Drafts
var head = draft.processTemplate("[[title]]");
var content = draft.processTemplate("[[body]]");

// 如果 Drafts 没有内容从剪切板获取
var text = draft.content;
if (text == ''){
  text = getClipboard()
  line = text.split("\n")
  head = line[0]
  content = text.replace(line[0],'')
}

// 如果 content 首行为空删去
if (content.split('\n')[0].length == 0){content = content.slice(1)}
// 替换中文引号
content = content.replace(/“/g,"「");
content = content.replace(/”/g,"」");
// 替换 \u00A0 空格
content = content.replace(/[\u00A0]/g,'');
// 当有两个换行合并为一个
content = content.replace(/\n{2,}/g, '\n\n');
// 删除行首行末空格
head = head.replace(/^ +/gm, '');
content = content.replace(/^ +/gm, '');

draft.defineTag("head", head);
draft.defineTag("content", content);

//// URL
//bear://x-callback-url/create?title=[[head]]&text=[[content]]&tags=[[prompt_button]]&x-success=drafts4://
