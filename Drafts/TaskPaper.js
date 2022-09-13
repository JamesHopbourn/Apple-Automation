var text = draft.content;

tags = {
  "td": "@estimate(01 min) @flagged @due(Today 22:00) @tags(1️⃣)",
  "tm": "@estimate(01 min) @flagged @due(Tomorrow 12:00) @tags(1️⃣)",
  "myc": "@tags(💭 James Notes)",
  "buy": "@tags(🛒🛒 购物清单)",
  "fea": "@tags(👨🏻‍💻👨🏻‍💻 功能开发)",
  "mov": "@tags(🎬🎬 电影视频 : 清单)",
  "tks": "👋 @tags(👋👋 物品拿取) @due(Sunday 18:00) ",
  "tkh": "🏠 @tags(👋👋 物品拿取) @due(Saturday 18:00) ",
  "omin": "@tags(1⃣️)",
  "fmin": "@tags(5⃣️)",
  "qmin": "@tags(1⃣️5⃣️)",
  "hmin": "@tags(3⃣️0⃣️)",
  "defaultTag": "@tags(5⃣️)"
}

text = text.split('\n');
keys = Object.keys(tags);
const regExp = new RegExp('(@tags\\(.*?)(\\) @tags\\()', 'g');
for (var i = 0; i < text.length; i++) {
  var flag = false;
  for (var j = 0; j < keys.length; j++) {
    if (text[i].indexOf(keys[j]) != -1) {
      flag = true;
      value = tags[keys[j]];
      text[i] = text[i].replace(keys[j],value).trim();
      while (regExp.test(text)) text[i] = text[i].replace(regExp, '$1,');

    }
  }
  if (!flag) text[i] += ` ${tags['default']}`;
}
text = text.join('\n');

draft.defineTag('text', text);