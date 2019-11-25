javascript:(function(){
url = encodeURIComponent(window.location);
id  = url.match(/id=\d+/);
alert(id[0]);
})();

https://music.163.com/#/song?id=1373604201
http://music.163.com/song/media/outer/url?id=这里填写歌曲ID.mp3