BackupDir=$HOME/.dotfile/AppList

# All Apps
ls -lh /Applications > ${BackupDir}/All_AppList

/usr/local/bin/brew bundle dump --force --describe --file="${BackupDir}/Brewfile"

brew deps --tree --installed > ${BackupDir}/deps.txt
