result=$(echo "$POPCLIP_TEXT"|sed 's/\*\*/::/g ; /^- / s//- ::/ ; /^- ::/ s/$/::/')
/bin/echo "$result"
