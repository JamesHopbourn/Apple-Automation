#!/usr/bin/env bash

read -r -d '' applescriptCode <<'EOF'
   set dialogText to text returned of (display dialog "Query?" default answer "")
   return dialogText
EOF

dialogText=$(osascript -e "$applescriptCode");

echo $dialogText
