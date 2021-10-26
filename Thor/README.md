规则需要配合 Thor 使用

### 调试
```
pbpaste|sed 's/^[[:space:]]*// ; s/"/\\"/g' |tr -d '\n'|sed 's/^/^@rsp.bodyText ".*本人承诺填写的信息真实有效，并对本次提交请假申请的信息真实性负责.*" "/ ; s/$/"/'|pbcopy

pbpaste|sed 's/\\//g'|jq|pbcopy
```
