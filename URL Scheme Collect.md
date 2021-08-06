### URL Scheme 数据清洗命令
```
cat AndroidManifest.xml|perl -ne 'print if /<data android:host=/'|
perl -pe 's/^.*<data android:host="(.*?)" android:path="(.*?)" android:scheme="(.*?)"\/>/\3:\/\/\1\2/'|
perl -pe 's/^.*<data android:host="(.*?)" android:scheme="(.*?)"\/>/\2:\/\/\1/'|
perl -pe 's/^.*<data android:host="(.*?)" android:pathPrefix="(.*?)" android:scheme="(.*)"\/>/\3:\/\/\1\2/'|
perl -pe 's/^.*<data android:host="(.*?)" android:pathPattern="(.*?)" android:scheme="(.*)"\/>/\3:\/\/\1\2/' > ' URL Scheme.txt'
```

### 淘宝
相机拍照搜索
```
taobao://tb.cn/n/scancode
```

搜索指定物品
```
taobao://s.taobao.com?q=%@
```

使用天猫搜索
```
taobao://list.tmall.com/search_product.htm?q=%@
```

搜索指定店铺
```
taobao://shopsearch.taobao.com/search?app=shopsearch&q=%@
```

跳转指定淘宝店铺
```
taobao://shop.m.taobao.com/shop/shop_index.htm?shopId=%@
```

### 天猫
```
tmall://page.tm/search?q=%@
```

### 豆瓣
搜索内容
```
douban:///search?q=%@
```

### 新浪微博
微博搜索
```
sinaweibo://searchall?q=%@
```

扫一扫
```
sinaweibo://qrcode
```

发微博
```
sinaweibo://share?content=%@
```

指定用户个人资料页
```
sinaweibo://userinfo?uid=[uid]
```

### 小红书
搜索页面
```
xhsdiscover://search/recommend
```

### 美团外卖
```
meituanwaimai://waimai.meituan.com/search?query=%@
```

### 美团
全局搜索
```
imeituan://www.meituan.com/search?q=%@
```

酒店搜索
```
imeituan://www.meituan.com/hotel/search?q=%@
```

普通扫码页面
```
imeituan://www.meituan.com/scanQRCode
```

共享单车扫码，该 URL Scheme 有且仅有配合 Launch Center Pro 的 `lc-callback` 协议方能正常使用。
```
imeituan://www.meituan.com/bike/scan?lc-callback=imeituan://www.meituan.com/bike/inscan
```

### 大众点评
搜索商品
```
dianping://searchshoplist?keyword=%@
```

### 欧陆词典
```
eudic://dict/%@
```

### 什么值得买
搜索商品
```
smzdm://search?json={"channelName":"home","search_type":"1","keyWord":"%@"}
```

### 知乎
搜索问题
```
zhihu://search?q=%@
```
```
zhihu://zhihu.com/search?q=%@
```
```
zhihu://www.zhihu.com/search?q=%@
```
扫一扫
```
zhihu://codereader
```

### 哔哩哔哩
搜索视频
```
bilibili://search?keyword=%@
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
https://m.youtube.com/results?q=%@
```

### App Store
搜索软件
```
itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term=%@
```

### 京东
搜索商品
```
openjd://virtual?params={"des":"productList","keyWord":"%@","from":"search","category":"jump"}
```

### 拼多多
搜索商品
```
pinduoduo://com.xunmeng.pinduoduo/search_result.html?search_key=%@
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
```
```
launch://x-callback-url/clipboard?text={{}}&x-success={{alipay://platformapi/startapp?appId=20000056}}
```

扫一扫
```
alipay://platformapi/startapp?appId=10000007
```
```
launch://x-callback-url/clipboard?text={{}}&x-success={{alipay://platformapi/startapp?appId=10000007}}
```

乘车码
```
alipay://platformapi/startapp?appId=200011235
```
```
launch://x-callback-url/clipboard?text={{}}&x-success={{alipay://platformapi/startapp?appId=200011235}}
```
其他支付宝相关的小程序的 URL Scheme 请参照[《URL Scheme 查询指南》](https://sspai.com/post/66334)支付宝段落自行查询，此处不再一一列举。

### 菜鸟
打开身份码
```
cainiao://desktop/station_code
```
```
launch://x-callback-url/clipboard?text={{}}&x-success={{cainiao://desktop/station_code}}
```

### Launch Center Pro
```
launch://x-callback-url/import?title=【标题】&url=【URL Scheme】
```
```
URL Scheme 需要全编码

➜ python -c "import clipboard
from urllib import parse
urls = parse.quote(clipboard.paste())
name = input('\n输入动作名称：')
print('launch://x-callback-url/import?title=' + parse.quote(name) + '&url=' + urls)"
```

### 设置
捷径屏幕使用时间通知
```
prefs:root=SCREEN_TIME&path=SCREEN_TIME_SUMMARY#DAY/com.apple.shortcuts
```
```
prefs:root=SCREEN_TIME&path=SCREEN_TIME_SUMMARY#WEEK/com.apple.shortcuts
```
```
App-prefs:SCREEN_TIME&path=SCREEN_TIME_SUMMARY#DAY/com.apple.shortcuts
```
```
App-prefs:SCREEN_TIME&path=SCREEN_TIME_SUMMARY#WEEK/com.apple.shortcuts
```

### 参考文章
[iOS 快捷指令 Shortcut 频繁弹出通知及关闭通知的 URL Scheme](https://www.v2ex.com/t/775905)
