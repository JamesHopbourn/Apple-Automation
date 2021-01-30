//// Prompt
// 600 清单|400 兴趣/470 投资机会|400 兴趣/410 单车骑行|400 兴趣/405 绘图设计| 500 课余/001 政治体制|500 课余/004 课外知识|010 日记/020 恋爱日记|200 生活/250 恋爱知识|010 日记/011 生活日记|010 日记/013 社会时事|800 语录摘抄|900 演讲稿

//// Script
// 默认内容来自文稿 否则从剪切板读取
if (draft.content){
  text = draft.content;
}else{
  text = getClipboard();
}

// 微信公众号文章处理
temp = text.split("\n");
if(temp[temp.length-1].match(/mp.weixin.qq.com/g)){
  head = temp;
  // 删除发布日期
  head = head.slice(0,1);
  temp = temp.slice(3);
  if (temp[0].length == 0)
   temp = temp.slice(1);
  // 删除收录分类
  if (temp[0].match(/收录/))
   temp = temp.slice(3);
  if (temp[0].length == 0)
   temp = temp.slice(1);
  temp  = head.concat(temp);
}
head = temp[0];
content = temp.slice(1).join("\n");

// 删除行首行末空格
head = head.trim();
content = content.trim();
// 替换中文引号和空格
content = content.replace(/#/g,'');
content = content.replace(/“/g,'「');
content = content.replace(/”/g,'」');
content = content.replace(/[\u00A0]/g,'');
// 当有两个以上换行合并为两个
content = content.replace(/\n{2,}/g, '\n\n');

draft.defineTag("head", head);
draft.defineTag("content", content);

//// URL
//bear://x-callback-url/create?title=[[head]]&text=[[content]]&tags=[[prompt_button]]&x-success=drafts4://
