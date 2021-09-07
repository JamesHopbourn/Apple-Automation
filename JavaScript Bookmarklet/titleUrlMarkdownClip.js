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
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

    document.head.innerHTML += '<meta name="flag" content="">';
    title = document.title.replace(/ \/ Twitter/, '').replace(/^【.*】/, '').replace(/(｜.*$|\|.*$)/, '').replace(/^\(.*\)/, '').replace(/-.*$/, '').replace(/(！|？|\?|\!)/g, '').replace(/_.*$/, '').trim();
    if (document.querySelector('meta[name=flag]').content == '') {
        markdown = '[' + title + '](' + window.location.href + ')  ';
        document.querySelector('meta[name=flag]').content = "1";
    } else {
        markdown = '- [' + title + '](' + window.location.href + ')  ';
        document.querySelector('[name=flag]').remove();
    }
    if (window.getSelection() != '')
        markdown = markdown + '\n' + window.getSelection() + '\n';
    copyToClipboard(markdown);
})();