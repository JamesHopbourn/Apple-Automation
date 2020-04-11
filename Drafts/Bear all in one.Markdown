**Prompt**
```
新建笔记|读书笔记| 成功日记|关系日记|梦境日记
```

**Script**
```
var note = draft.getTag("prompt_button");

if (note == "成功日记"){
  var id = "6F225476-1B75-473E-AD6C-127EC6C8EDF6-490-0000002542D7A796";
}

if (note == "关系日记"){
  var id  = "D792056A-4D3B-486D-8F1E-437806A6AB47-490-000000257C819324";
}

if (note == "梦境日记"){
  var id = "5391412E-DE95-4D9E-AAB3-66B2CE4995E1-490-0000002618E49F65";
}

if (note == "读书笔记"){
  var id = "9D627BF5-C615-475E-B040-84B57F58145D-1156-000000587436316D";
}

draft.defineTag('id',id);
```

**URL**
```
bear://x-callback-url/add-text?id=[[id]]&mode=prepend&text=[[date|%Y-%m-%d %-I:%M %p]]%0A[[draft]]%0A
```
