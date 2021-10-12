IFS=$'\n'
for file in $(find $1 -iname "*.MOV")
do {
  real_date=$(mediainfo $file --Output=JSON|jq -c '.media.track[0].extra.com_apple_quicktime_creationdate'|xargs gdate +'%m/%d/%Y %H:%M:%S' -d)
  Setfile -d $real_date $file
}
done
