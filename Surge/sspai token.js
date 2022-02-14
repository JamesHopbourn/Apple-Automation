let cookies = $request.headers["Cookie"];
cookies = cookies.match(/cross_token=.*?(?=;)/);
cookies = cookies[0].replace(/cross_token=/, '');
$persistentStore.write(cookies, "sspai_token");
$done({});