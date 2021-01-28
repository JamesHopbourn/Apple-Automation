result=$(echo "$POPCLIP_TEXT" | /usr/local/opt/gnu-sed/libexec/gnubin/sed '/^$/d ; s/^\([0-9]\|[0-9][0-9]\)、/\1. /g')
/bin/echo -n "$result"
