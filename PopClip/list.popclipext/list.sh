result=$(echo "$POPCLIP_TEXT"|gsed 's/^（.）/- / ; s/^.\( \|\.\|\、\|[0-9]\|，\|\)/- /; s/-  /- / ; /^-/! s/^/- /')
/bin/echo -n "$result"
