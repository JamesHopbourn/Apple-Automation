javascript: (function() {
    var result = [];
    var content = document.getElementsByClassName('list-box')[0].querySelectorAll('li');
    for (var i = 0; i < content.length; i++) {
        temp = content[i].innerText.split('\n')[2];
        if (temp.length < 6) {
            temp += ".00"
        }
        result.push(temp);
    }

    var total = result.reduce((acc, time) => {
        let parts = time.split(":");
        let minutes = parseInt(parts[0], 10);
        let seconds = parseFloat(parts[1]);
        return acc + (minutes * 60 + seconds);
    }, 0);

    let hours = Math.floor(total / 3600);
    let minutes = Math.floor((total % 3600) / 60);
    let seconds = total % 60;

    var textArea = document.createElement("textarea");
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    textArea.value = hours + ":" + minutes;
    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand("copy");

    document.body.removeChild(textArea);

    console.log("Text copied to clipboard");
})();