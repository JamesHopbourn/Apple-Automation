javascript:(function(){
url = 'omnifocus:///add?note='+encodeURIComponent(window.location.toString())
	+'&name='+encodeURIComponent(document.title.replace(/ \/ Twitter/, '').replace(/^【.*】/, '').replace(/(｜.*$|\|.*$)/, '').replace(/^\(.*\)/, '').replace(/-.*$/, '').replace(/(！|？|\?|\!)/g, '').replace(/_.*$/, '').trim())
    +'&estimate=10 mins&autosave=true&due=today 23:00';
window.open(url,'_self');
})();
