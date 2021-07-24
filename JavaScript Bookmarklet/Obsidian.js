javascript: (function() {
    value = 'Notes';
    url = 'obsidian://new?vault=' + encodeURIComponent(value) + '&name=' + encodeURIComponent(document.title.replace(/( |)-.*$/,'').concat('.md')) + '&content=' + encodeURIComponent(document.body.innerText);
    window.open(url,'_self');
})();
