result=$(echo "$POPCLIP_TEXT" | gsed 's/^.\( \|\.\|\、\|[0-9]\)/- /; s/-  /- /')
/bin/echo -n "$result"
