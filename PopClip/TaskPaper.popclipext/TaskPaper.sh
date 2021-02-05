result=$(pbpaste|sed '/^$/d ; s/^[ \t]*// ; s/- /[/ ;  s/ @.*$/]/ ; /http/ s/$/)/ ; s/^http/(http/g'|paste -sd ' \n'|sed 's/].*(/[(/')
/bin/echo -n "$result"
