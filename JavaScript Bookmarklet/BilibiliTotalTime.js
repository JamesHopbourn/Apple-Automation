javascript:(function(){
    // 定义一个空数组用于存储结果
    var result = [];
    // 获取含有list-box类名的元素中所有li元素
    var content = document.getElementsByClassName('list-box')[0].querySelectorAll('li');
    // 遍历所有li元素
    for (var i = 0; i< content.length; i++){
      // 获取当前li元素的第三行文本
      temp = content[i].innerText.split('\n')[2];
      // 如果文本长度小于6，则在末尾加上".00"
      if (temp.length < 6){
        temp += ".00"
      }
      // 将文本存入结果数组
      result.push(temp);
    }

    // 使用reduce函数计算所有时间的总和
    var total = result.reduce((acc, time) => {
      // 将时间字符串拆分成分钟和秒
      let parts = time.split(":");
      let minutes = parseInt(parts[0], 10);
      let seconds = parseFloat(parts[1]);
      // 返回总和
      return acc + (minutes * 60 + seconds);
    }, 0);

    // 计算总时间的小时数、分钟数和秒数
    let hours = Math.floor(total / 3600);
    let minutes = Math.floor((total % 3600) / 60);
    let seconds = total % 60;

    // 创建一个新的文本域
    var textArea = document.createElement("textarea");
    // 使用padStart函数将小时数和分钟数补全为两位
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    // 将总时间存入文本域
    textArea.value = hours + ":" + minutes;
    // 将文本域添加到页面中
    document.body.appendChild(textArea);

    // 选中文本域中的文本
    textArea.select();

    // 复制文本域中的文本
    document.execCommand("copy");

    // 从页面中移除文本域
    document.body.removeChild(textArea);
    // 向控制台输出提示信息
    console.log("Text copied to clipboard");
})();