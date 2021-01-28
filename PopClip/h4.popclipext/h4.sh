result=$(echo "$POPCLIP_TEXT"|sed '1s/^.*[[:space:]]// ; 1s/：$//; 1s/^\([0-9]\|[0-9][0-9]\). // ; 1s/^\([0-9]\|[0-9][0-9]\).// ; 1s/$/@/ ; 1s/^/#### /'|tr -d '\n'|tr '@' '\n')
/bin/echo "$result"
