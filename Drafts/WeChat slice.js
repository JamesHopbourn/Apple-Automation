var j = 0;
var body = [];

// 默认内容来自文稿 否则从剪切板读取
if (draft.content) {
  text = draft.content;
} else {
  text = getClipboard();
}

text = text.split('\n');


for (var i = 0; i < text.length; i++) {
  if (text[i].length == 0) {
  head = text.slice(0,i)
  temp = text.slice(i+1);
  text = head.concat(temp);
  }
}

keyword = draft.getTag('prompt_text');
keyword = '^' + keyword;
for (var i = 0; i < text.length; i++) {
  if (!text[i].match(keyword)) {
    body[j] = text[i];
    j++;
  }
}

draft.content = body.join('\n\n');
commit(draft);