#### 今日校园
```
今日校园查寝签到图片替换 = type=http-response,pattern=https://.*.campusphere.net/wec-counselor-attendance-apps/student/attendance/previewAttachment,requires-body=0,script-path=今日校园查寝签到图片替换.js
今日校园下载签到图片 = type=http-request,pattern=https://wecres.campusphere.net/counselor/attendance/\d+/attachment/[a-zA-Z0-9]+.png,requires-body=0,max-size=0,script-path=今日校园下载签到图片.js

hostname = *.campusphere.net
```
