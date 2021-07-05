javascript:(function(){
url = window.location;
var id = url.toString().match("id=.*");
id = id[0].replace(/id=/,'');
url = "http://music.163.com/song/media/outer/url?id=" + id + ".mp3";
window.open(url,'_self');
})();
