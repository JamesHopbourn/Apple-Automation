let image = $request.url;
let customURL = {
    "url": "shortcuts://run-shortcut?name=" + encodeURI("保存查寝照片") + "&input=text&text=" + image
}
$notification.post("今日校园", "点击保存照片", "", customURL);
$done({});