token = $persistentStore.read("sspai_token");

let req_data = {
	url: "https://sspai.com/api/v1/remuneration/article/day/page/get?limit=10&offset=0&stime=1642262400&etime=1644854399",
	headers: {
		"Authorization": "Bearer " + token,
		"sspai_cross_token": token,
		"sspai_jwt_token" : token
	}
}

$httpClient.get(req_data, function(error, response, data){
	let count = 0;
	total = JSON.parse(data)["total"];
	data = JSON.parse(data)["data"];
	for(var i = 0 ; i < total ; i++)
		count += data[i]["fee"];
	count = count.toString().replace(/^(.*)(..)$/, '$1.$2¥');

	let body = JSON.parse($response.body);
	temp = body.data.followed_count;
	text = temp + " · 本月稿费 " + count;
	body.data.followed_count = text;
	body = JSON.stringify(body);
	$done({body}); 
});