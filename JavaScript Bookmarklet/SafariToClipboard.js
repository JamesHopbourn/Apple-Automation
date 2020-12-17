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
    var timestamp = '- ' + new Date().toLocaleString("zh-CN", {timeZone: "Asia/Shanghai", hour12: false}).replace(/\//g,'-') + ' ' + ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][new Date().getDay()] + '\n';
    copyToClipboard(timestamp + '\n' + window.getSelection() + '\n');
})();
