javascript: (function() {
    url = 'obsidian://new?vault=Notes&name=' + document.title.replace(/( |)-.*$/,'').concat('.md') + '&content=' + document.body.innerText
    window.open(url,'_self');
})();
