# ------------------------------------------------------------------------------
# Description
#
# git-clone will be inserted before the command
#
# ------------------------------------------------------------------------------
# Authors: JamesHopbourn <hopbourncontact@gmail.com>
#
# ------------------------------------------------------------------------------

git-clone-command-line() {
    [[ -z $BUFFER ]] 
     LBUFFER="git clone $LBUFFER"
}
zle -N git-clone-command-line

bindkey 'pp' git-clone-command-line