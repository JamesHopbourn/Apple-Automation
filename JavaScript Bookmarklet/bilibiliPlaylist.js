var result = '';
var content = document.getElementsByClassName('list-box')[0].querySelectorAll('li');
for (var i = 0; i< content.length; i++){
  temp = content[i].innerText.split('\n');
  if (temp[temp.length-1].length < 6){
    temp[temp.length-1] += ".00"
  }
  temp.join('\t')
  result += temp;
  result += '\n';
}
console.log(result.replace(/,/g, '\t'))