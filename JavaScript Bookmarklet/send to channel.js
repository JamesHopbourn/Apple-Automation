javascript: void((function(doc) {
    var result = prompt('学到了什么：', '');
    if (typeof jQuery == 'undefined') {
        var script_jQuery = document.createElement('script');
        script_jQuery.setAttribute('src', '//code.jquery.com/jquery-latest.min.js');
        document.body.appendChild(script_jQuery);
    }
    text = `<a href='${$(location).attr('href')}'>${$(document).attr('title')}</a>\n\n${result}`;
    $.get(`https://api.telegram.org/[API KEY]/sendMessage`, {
        chat_id: '@[PUBLIC CHANNEL ID]',
        text: text,
        parse_mode: 'HTML'
    }, function(data, textStatus, jqXHR) {
        if (textStatus != 'success') {
            alert('status: ' + textStatus + ', data:' + data);
        }
    });
})(document));