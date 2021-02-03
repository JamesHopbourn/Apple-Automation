// 默认内容来自文稿 否则从剪切板读取
if (draft.content){
  text = draft.content + '\n';
}else{
  text = getClipboard() + '\n';
}

// 上面加换行是为了的容错处理
nums = text.match(/\n/g).length;

if (nums > 2) {
   text = text.replace(/\n/,'@');
   text = text.replace(/\n/g, '');
   text = text.replace(/@/,'\n');
} else if (nums == 2 || nums == 1) {
   text = text.replace(/\n/g, '');
}

draft.content = text;
commit(draft);
