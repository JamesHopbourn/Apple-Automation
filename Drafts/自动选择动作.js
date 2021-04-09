//// JavaScript step action
temp = draft.content.split("\n");
if(temp[temp.length-1].match(/mp.weixin.qq.com/g)){
    draft.defineTag("action",'笔记添加标签 to Clipboard');
}else{
    draft.defineTag("action",'Copy to Clipboard');
}

//// URL
// drafts4://x-callback-url/open?uuid=[[uuid]]&action=[[action]]
