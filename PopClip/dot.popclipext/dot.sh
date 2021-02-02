result=$(echo "$POPCLIP_TEXT"|gsed '/^$/d ; s/^\([0-9]\|[0-9][0-9]\)、/\1. /g')
/bin/echo -n "$result"
