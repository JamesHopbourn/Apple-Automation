# Launch Center Pro
```  
due://x-callback-url/add?title={{tel:[+contact]}}%20at%20[list:时间|09:00=09:00‬|10:00=10:00‬|11:00=11:00‬‬|14:30=‭‭14:30‬‬|16:00=‭‭16:00|17:30=17:30|18:00=18:00|20:00=20:00|其他=[prompt]]&x-success={{launch:}}#lc-icon=due  
```
用途：如果此时是休息时间（如中午，深夜），但又有事要联系他人，通过该动作创建提醒拨打电话。  
```
due://x-callback-url/add?title={{launch://messaging?to=[+contact]&body=[+prompt:Body]}}%20at%20[prompt-num:Time=\|:]&x-source={{Launch Center Pro}}&x-success={{launch:}}#lc-icon=due
```
用途：如果此时是休息时间（如中午，深夜），但又有事要联系他人，通过该动作创建提醒发送信息。  

### URL Scheme Debug
```
launch://x-callback-url/clipboard?text=[prompt-return:URL Scheme Debug 🐛=[clipboard]]&x-success=[clipboard]
```  

### 添加项目
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
```
