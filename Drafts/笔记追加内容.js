//// Prompt
// 生活日记|生活随记|快进 ⏩：加速日记|日记 ✅：成功日记|基金 💵：投资机会|人际 ❤️：恋爱日记|人际 👬：关系日记|学习 💡：课外知识|学习 💬：语录摘抄|分类 🎬：电影记录|分类 😴：梦境日记|分类 📰：时事概括

//// Script
// 默认内容来自文稿 否则从剪切板读取
if (draft.content){
  text = draft.content;
}else{
  text = getClipboard();
}

// 标签去掉 emoji 前缀
note = draft.getTag("prompt_button") || '';
note = note.replace(/^.*：/,'');

// 删除行首行末空格
text = text.trim();
// 替换中文引号 删除井号空格
text = text.replace(/#/g,'');
text = text.replace(/“/g,'「');
text = text.replace(/”/g,'」');
text = text.replace(/[\u00A0]/g,'');
// 当有两个以上换行合并为两个
text = text.replace(/\n{2,}/g, '\n\n');

if (note == "生活日记"){var id = "86A68159-A43C-4D97-A2EA-4D5382923029-490-0000002615E24E33";}
if (note == "语录摘抄"){var id = "36AACB82-917A-46CB-ADE0-2985A23DDA32-3372-0000013628367C09";}
if (note == "加速日记"){var id = "322CF61A-8F25-4719-BAE5-2F9B7605E540-3598-000001026D531927";}
if (note == "微信文章"){var id = "F863B184-507B-43FE-BAEA-D1174FDD38E8-3598-0000010410F38098";}
if (note == "课外知识"){var id = "4CB9ACA2-3909-4937-942D-577418BF89D3-8187-000002D01089E51C";}
if (note == "生活随记"){var id = "B7E999A5-1A02-4236-8939-6D8F4F74D816-1411-0000008F9FC32217";}
if (note == "成功日记"){var id = "6F225476-1B75-473E-AD6C-127EC6C8EDF6-490-0000002542D7A796";}
if (note == "关系日记"){var id = "D792056A-4D3B-486D-8F1E-437806A6AB47-490-000000257C819324";}
if (note == "投资机会"){var id = "6B8626BF-021C-4710-9D00-01A16E0DAEDF-3598-000001053C4DD5B2";}
if (note == "电影记录"){var id = "E8AD2FC5-57B5-4A57-BD71-53336EC63DEE-490-00000025701995CC";}
if (note == "梦境日记"){var id = "5391412E-DE95-4D9E-AAB3-66B2CE4995E1-490-0000002618E49F65";}
if (note == "读书笔记"){var id = "9D627BF5-C615-475E-B040-84B57F58145D-1156-000000587436316D";}
if (note == "恋爱日记"){var id = "6C0FF20F-6A95-4988-AD82-B3DB16CD995B-45275-00009A7CC85260FF";}
if (note == "时事概括"){var id = "A6F19085-6809-4D45-87DD-78B3A0A39EBC-2157-000000C1770EF749";}

// vim mode
if(text.length == 1 && text.match(/t|T/)){
   draft.defineTag("action", 'open-note');
} else {
   draft.defineTag("action", 'add-text');
}

draft.defineTag('id',id);
draft.defineTag('text', text);

//// URL
// bear://x-callback-url/[[action]]?id=[[id]]&mode=prepend&text=-%20[[date|%Y-%m-%d %-H:%M %A]]%0A[[text]]%0A&open_note=yes
