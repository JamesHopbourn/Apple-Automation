result=$(echo "$POPCLIP_TEXT" | gsed '/^$/d')
/bin/echo -n "$result"
