result=$(echo "$POPCLIP_TEXT"|sed '/^- / s//- ::/ ; /^- ::/ s/$/::/')
/bin/echo "$result"
