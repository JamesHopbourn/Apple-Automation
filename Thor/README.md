#### 今日校园
```
cat detail.json|sed 's/^[[:space:]]*// ; s/"/\\"/g ; 1s/^/^@rsp.bodyText ".*本人承诺填写的信息真实有效，并对本次提交请假申请的信息真实性负责.*" "/ ; $s/$/"/'|tr -d '\n'|tee >(pbcopy)

cat list.json|sed 's/^[[:space:]]*// ; s/"/\\"/g ; 1s/^/^@rsp.bodyText ".*endTimePC.*" "/ ; $s/$/"/'|tr -d '\n'|tee >(pbcopy)

pbpaste|sed 's/\\//g'|jq|tee >(pbcopy)
```
