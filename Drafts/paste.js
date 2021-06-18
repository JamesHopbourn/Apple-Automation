draft.content = getClipboard();
commit(draft);
setClipboard('');

text = draft.content.split('\n');
host = text[text.length-1];
if(host.match(/weixin/))
  draft.defineTag("urls",'weixin://');
if(host.match(/zhihu/))
  draft.defineTag("urls",'zhihu://');