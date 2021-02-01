result=$(echo "$POPCLIP_TEXT" | gsed 's/^ // ; s/ $// ; s/\*\*/::/g ; /^- / s//- ::/ ; /^- ::/ s/$/::/ ; /::/! s/^/::/ ; /^::/ s/$/::/ ; s/::::$/::/g')
/bin/echo -n "$result"
