### 淘宝
相机拍照搜索
```
taobao://tb.cn/n/scancode
```

搜索指定物品
```
taobao://s.taobao.com?q=[prompt:商品名称]
```

使用天猫搜索
```
taobao://list.tmall.com/search_product.htm?q=[prompt:商品名称]
```

搜索指定店铺
```
taobao://shopsearch.taobao.com/search?app=shopsearch&q=[prompt:店铺名称]
```

跳转指定淘宝店铺
```
taobao://shop.m.taobao.com/shop/shop_index.htm?shopId=[prompt:店铺 ID
```

### 天猫
```
tmall://page.tm/search?q=[prompt:商品名称]
```

### 豆瓣
搜索内容
```
douban:///search?q=[prompt:搜索内容]
```

### 美团
全局搜索
```
imeituan://www.meituan.com/search?q=[prompt:商品名称]
```

酒店搜索
```
imeituan://www.meituan.com/hotel/search?q=[prompt:酒店名称]
```

普通扫码页面
```
imeituan://www.meituan.com/scanQRCode
```

共享单车扫码，该 URL Scheme 有且仅有配合 Launch Center Pro 的 lc-callback 协议方能正常使用。
```
imeituan://www.meituan.com/bike/scan?lc-callback=imeituan://www.meituan.com/bike/inscan
```

### 大众点评
搜索商品
```
dianping://searchshoplist?keyword=[prompt:商品名称]
```

### 什么值得买
搜索商品
```
smzdm://search?json={"channelName":"home","search_type":"1","keyWord":"[prompt:商品名称]"}
```


### 知乎
搜索问题
```
zhihu://search?q=[prompt]

zhihu://zhihu.com/search?q=[prompt]

zhihu://www.zhihu.com/search?q=[prompt]
```

### 哔哩哔哩
搜索视频
```
bilibili://search?keyword=[prompt]
```

扫一扫
```
bilibili://qrcode
```

个人中心
```
bilibili://user_center
```

我的收藏
```
bilibili://main/favorite
```

### YouTube
搜索视频，此处的 URL 在 Universal Link 的作用下会直接跳转 YouTube 客户端，如果没有安装客户端则直接打开网页搜索。
```
https://m.youtube.com/results?q=[prompt]
```

### App Store
搜索软件
```
itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term=[prompt]
```

### 京东
搜索商品
```
openapp.jdmobile://virtual?params={"des":"productList","keyWord":"[prompt:商品名称]","from":"search","category":"jump"}
```

### 拼多多
搜索商品
```
pinduoduo://com.xunmeng.pinduoduo/search_result.html?search_key=[prompt:商品名称]
```

### 微信
扫一扫
```
weixin://scanqrcode
```


### 支付宝
付款码
```
alipay://platformapi/startapp?appId=20000056

launch://x-callback-url/clipboard?text={{}}&x-success={{alipay://platformapi/startapp?appId=20000056}}
```

扫一扫
```
alipay://platformapi/startapp?appId=10000007

launch://x-callback-url/clipboard?text={{}}&x-success={{alipay://platformapi/startapp?appId=10000007}}
```

乘车码
```
alipay://platformapi/startapp?appId=200011235

launch://x-callback-url/clipboard?text={{}}&x-success={{alipay://platformapi/startapp?appId=200011235}}
```
其他支付宝相关的小程序跳转的 URL Scheme 请参照《URL Scheme 查询指南》支付宝段落自行查询，此处不再一一列举。

### 菜鸟
打开身份码
```
cainiao://desktop/station_code

launch://x-callback-url/clipboard?text={{}}&x-success={{cainiao://desktop/station_code}}
```

### 设置
捷径屏幕使用时间通知
```
prefs:root=SCREEN_TIME&path=SCREEN_TIME_SUMMARY#DAY/com.apple.shortcuts

prefs:root=SCREEN_TIME&path=SCREEN_TIME_SUMMARY#WEEK/com.apple.shortcuts
```