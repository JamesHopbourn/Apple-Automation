result=$(echo "$POPCLIP_TEXT" | gsed '1s/\*\*//g ; 1s/^.*\.// ; 1s/$/@/ ; 1s/^/#### / ; s/\*\*/::/g'|tr -d '\n'|tr '@' '\n')
/bin/echo -n "$result"
