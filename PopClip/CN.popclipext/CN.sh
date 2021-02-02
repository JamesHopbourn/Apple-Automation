result=$(echo "$POPCLIP_TEXT"|gsed 's/,/，/g ; s/!/！/g ; s/?/？/g ; s/“/「/g ; s/”/」/g ; s/:/：/g ; s/：\/\//:\/\//g')
/bin/echo -n "$result"
