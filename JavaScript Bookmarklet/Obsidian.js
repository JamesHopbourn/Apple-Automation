javascript: (function() {
    url = 'obsidian://new?vault=Notes&name=' + document.title.replace(/( |)-.*$/,'').concat('.md') + '&content=' + document.body.innerText.replace(/\n/g, '%0A');
    window.open(url,'_self');
})();
