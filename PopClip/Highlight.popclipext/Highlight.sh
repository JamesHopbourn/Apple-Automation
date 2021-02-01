result=$(echo "$POPCLIP_TEXT" | gsed 's/\*\*/::/g ; /^- / s//- ::/ ; /^- ::/ s/$/::/ ; /::/! s/^/::/ ; /^::/ s/$/::/ ; s/::::$/::/g')
/bin/echo -n "$result"
