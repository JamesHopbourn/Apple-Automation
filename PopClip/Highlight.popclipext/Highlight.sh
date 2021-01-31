result=$(echo "$POPCLIP_TEXT"|sed 's/\*\*/::/g ; /^- / s//- ::/ ; /^- ::/ s/$/::/ ; /::/! s/^/::/ ; /^::/ s/$/::/ ; s/::::/::/g')
/bin/echo -n "$result"
