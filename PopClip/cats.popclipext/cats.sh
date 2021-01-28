result=$(echo "$POPCLIP_TEXT" | sed '/^$/d')
/bin/echo -n "$result"
