javascript:(function(){ 
url = window.location;
var id = url.toString().match("v=.*");
id = id[0].replace(/v=/,'');
url = "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
window.open(url,'_self');
})();

