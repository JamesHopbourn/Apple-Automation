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
    if (document.querySelector('meta[name=flag]').content == '') {
        markdown = '[' + document.title + '](' + window.location.href + ')  ';
        document.querySelector('meta[name=flag]').content = "1";
    } else {
        markdown = '- [' + document.title + '](' + window.location.href + ')  ';
        document.querySelector('[name=flag]').remove();
    }
    if (window.getSelection() != '')
        markdown = window.getSelection() + '\n\n' + markdown + '\n';
    copyToClipboard(markdown);
})();