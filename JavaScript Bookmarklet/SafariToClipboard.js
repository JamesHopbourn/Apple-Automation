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
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }
    title = document.title.replace(/(^\(\d+\)|- YouTube)/g, '').trim();
    markdown = '[' + title + '](' + window.location.href + ')  ';
    copyToClipboard(markdown);
})();