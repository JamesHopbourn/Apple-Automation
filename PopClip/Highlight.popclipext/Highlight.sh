result=$(echo "$POPCLIP_TEXT"|tr -d '\n'|gsed 's/^ // ; s/ $// ; s/\*\*/::/g ; /^- / s//- ::/ ; /^- ::/ s/$/::/ ; /::/! s/^/::/ ; /^::/ s/$/::/ ; s/::::$/::/g')
/bin/echo "$result"
