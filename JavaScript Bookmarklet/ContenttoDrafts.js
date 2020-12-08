javascript: (function() {
    function copyToClipboard(text) {
        if (window.clipboardData && window.clipboardData.setData) {
            return clipboardData.setData("Text", text);
        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
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
    
    copyToClipboard(document.body.innerText.replace(/推荐阅读(.*\n)+/g, "").replace(/[\r\n]{3,}/g, "\n\n") + "\n\n" + '[' + document.title.replace(/ \/ Twitter/, '').replace(/^【.*】/, '').replace(/(｜.*$|\|.*$)/, '').replace(/^\(.*\)/, '').replace(/-.*$/, '').replace(/(！|？|\?|\!)/g, '').replace(/_.*$/, '').trim() + '](' + window.location.href + ')');
    url = 'drafts4://x-callback-url/runAction?action=paste';
    window.open(url,'_self');
})();
