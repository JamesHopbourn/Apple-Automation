var food_list = [];
var text = draft.getTag('prompt_button') || '';

description = [
  ["鸡排", 12, '点心'],
  ["可乐", 2 , '酒水'],
  ["葡萄糖", 3,  '酒水'],
]

for (i = 0; i < description.length; i++) {
  food_list.push(description[i][0]);
}

draft.defineTag('name', description[food_list.indexOf(text)][0]);
draft.defineTag('price', description[food_list.indexOf(text)][1]);
draft.defineTag('category', description[food_list.indexOf(text)][2]);

// console.log(food_list)
// ==> [ '鸡排', '可乐', '葡萄糖' ]
// console.log(food_list.indexOf('可乐')); 
// ==> 1
// console.log(description[food_list.indexOf('可乐')]);
// ==> [ '可乐', 3, '饮料' ]
