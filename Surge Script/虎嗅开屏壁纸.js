$notification.post("虎嗅开屏壁纸", "点击保存照片", "", {
    "url": `shortcuts://run-shortcut?name=${encodeURI("imgSave")}&input=text&text=${$request.url.slice(0, $request.url.indexOf('?'))}`
});

$done({});