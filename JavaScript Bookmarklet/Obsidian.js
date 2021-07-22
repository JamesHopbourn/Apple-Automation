javascript: (function() {
    url = 'obsidian://new?vault=' + encodeURIComponent('Notes') + '&name=' + encodeURIComponent(document.title.replace(/( |)-.*$/,'').concat('.md')) + '&content=' + encodeURIComponent(document.body.innerText);
    window.open(url,'_self');
})();