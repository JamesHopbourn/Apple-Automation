javascript:(function(){
	code = (document.documentElement.outerHTML);
	title = code.match(/msg_title = ".*"/g);
	title = title[0].replace(/msg_title = "|"/g,'');
	nickname = code.match(/var nickname = ".*"/);
	nickname = nickname[0].replace(/var nickname = "|"/g,'');
	author = code.match(/js_preview_reward_author_name">.*<\/div>/);
	author = author[0].replace(/js_preview_reward_author_name">|<\/div>/g,'');
	window.open('omnifocus:///add?note='+encodeURIComponent(window.location)+"   "+author+"   "+nickname+'&name=🔖 '+title+'&context=📕📕 Reading Lists'+'&estimate=05 mins&autosave=true','_self');
})();