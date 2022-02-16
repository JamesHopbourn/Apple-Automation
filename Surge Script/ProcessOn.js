var body = $response.body;
data = body.match(/var definition = {[\s\S]*?};/)[0];
data = data.replace(/(var definition = |;)/g, '');
data = JSON.parse(data);

var text = '';
function dfs(node, n) {
    if (!node || !node.children){
        return;
    }
    text += "\t".repeat(n) + "- " + node.title + "\n";
    node.children.forEach(function(item, index) {
        dfs(item, n + 1);
    });
    text = text.replace('<br>', '');
    text = text.replace(/&nbsp/g, '');
    return text;
}

let customURL = {
    "url": "drafts4://create?text=" + encodeURIComponent(dfs(data, 0))
}
$notification.post(data.title, "点击添加到 Drafts", "", customURL);
$done({});