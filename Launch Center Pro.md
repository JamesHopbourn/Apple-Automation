# Launch Center Pro
### 定时信息
```  
due://x-callback-url/add?title={{tel:[+contact]}}%20at%20[list:时间|09:00=09:00‬|10:00=10:00‬|11:00=11:00‬‬|14:30=‭‭14:30‬‬|16:00=‭‭16:00|17:30=17:30|18:00=18:00|20:00=20:00|其他=[prompt]]&x-success={{launch:}}#lc-icon=due  
```
用途：如果此时是休息时间（如中午，深夜），但又有事要联系他人，通过该动作创建提醒拨打电话。  

### 定时电话
```
due://x-callback-url/add?title={{launch://messaging?to=[+contact]&body=[+prompt:Body]}}%20at%20[prompt-num:Time=\|:]&x-source={{Launch Center Pro}}&x-success={{launch:}}#lc-icon=due
```
用途：如果此时是休息时间（如中午，深夜），但又有事要联系他人，通过该动作创建提醒发送信息。  

### URL Scheme Debug
```
launch://x-callback-url/clipboard?text=[prompt-return:URL Scheme Debug 🐛=[clipboard]]&x-success=[clipboard]
```  

### OmniFocus 添加固定项目
```
omnifocus:///paste?target=/task/{{出门娱乐}}&content={{
- HyperJuice
- Belkin C to L
- AirPods Pro
- Apple Watch
- Keys
- inCharge X
- Anker Power Station
- 纸巾
}}

omnifocus:///paste?target=/task/{{出门旅游}}&content={{
- 重要物品
	- 钱包
	- 身份证
	- 学生证
- 衣物鞋子
	- 拉绳包
	- 双肩包
	- 斜挎包
	- 拖鞋 x1
	- 口罩 x10
- 洗漱护理
	- 牙刷
	- 牙杯
	- 牙线
	- 牙膏
	- 毛巾
	- 硅胶杯
	- 干纸巾
	- 湿纸巾
	- 剃须刀
	- 喷雾剂
	- 蛇油膏
- 电子产品
	- 电脑
	- 手表
	- 手机
	- 耳机
	- 快充电源 ⬛️
	- 快充电线 ⬛️
	- 电脑电线 ⬛️
	- 电脑耳机 ⬜️
	- 密封拉扣 ⬜️
	- 布收纳袋 ⬜️
}}
```
