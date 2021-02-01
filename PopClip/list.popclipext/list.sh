result=$(echo "$POPCLIP_TEXT" | gsed '/[0-9]\( \|\.\|\、\|[0-9]\)/ s/../- / ; s/-  /- /')
/bin/echo -n "$result"
