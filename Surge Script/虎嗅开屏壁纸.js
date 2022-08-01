url = $request.url.match(/https:\/\/img.huxiucdn.com\/img\/hodor\/.*(?=\?)/g);

if (url) {
    $notification.post("虎嗅开屏壁纸", "点击保存照片", "", {
        "url": `shortcuts://run-shortcut?name=${encodeURI("imgSave")}&input=text&text=${url[0]}`
    });
}

$done({});