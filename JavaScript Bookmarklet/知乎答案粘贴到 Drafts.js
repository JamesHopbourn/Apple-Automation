javascript: (function() {
    function copyToClipboard(text) {
       if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");
            } catch(ex) {
                console.warn("Copy to clipboar failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

    copyToClipboard(document.title.replace(/ -(.*) 的回答 - 知乎/,'$1') + '\n' 
    + document.getElementsByClassName("RichContent-inner")[0].innerText.replace(/[\r\n]{3,}/g, '\n\n') + 
    '[' + document.title + '](' + window.location.href + ')');

    url = 'drafts4://x-callback-url/runAction?action=paste';
    window.open(url,'_self');
})();