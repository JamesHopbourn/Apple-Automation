#ZSH Settings
ZSH_THEME="agnoster"
DISABLE_AUTO_UPDATE="true"
HIST_STAMPS="%Y-%m-%d %H:%M:%S %Z"

export ZSH="$HOME/.oh-my-zsh"
source $ZSH/oh-my-zsh.sh

# Alias
## file types
alias -s c=vim
alias -s js=st
alias -s py=python

## command
alias cat='ccat'
alias vim='nvim'
alias rm='rmtrash'
alias diff='icdiff'
alias go='git open'
alias gshred='gshred -f -n 25 -u -z -v'
alias ida='/Applications/idaq.app/Contents/MacOS/idaq64 &'
alias airports='/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport'

## fzf
alias vzf='vim "$(fzf)"'
alias czf='cd "$(find * -type d | fzf)"'

## nasm
alias comp='nasm -f macho'
alias link='ld -macosx_version_min 10.7.0 -o'

## tmux
alias tls='tmux ls'
alias tnew='tmux new -s'
alias tat='tmux at -t'
alias tkill='tmux kill-session -t'

## brew
alias bi='brew install'
alias bci='brew cask install'
alias br='brew remove'
alias bcr='brew cask remove'
alias bs='brew search'
alias be='brew edit'
alias bld='brew deps --tree --installed'

# Export
export DEFAULT_USER=hopbourn                  #默认用户名

export HOMEBREW_NO_AUTO_UPDATE=1              #禁用 Homebrew 自动更新

export PATH=/opt/local/bin:$PATH              #MacPorts
export PATH=/Library/TeX/texbin:$PATH         #pdflatex
export PATH=$HOME/Dropbox/.bin:$PATH          #自编译命令
export PATH=$HOME/bin:/usr/local/bin:$PATH    #系统命令
export PATH=/usr/local/anaconda3/bin:$PATH    #anaconda

export https_proxy=http://127.0.0.1:1225
export http_proxy=http://127.0.0.1:1225
export all_proxy=socks5://127.0.0.1:1226

# Source & Plugins
source $HOME/.oh-my-zsh/plugins/git/git.plugin.zsh
source $HOME/.oh-my-zsh/plugins/osx/osx.plugin.zsh
source $HOME/.oh-my-zsh/custom/plugins/incr/incr-0.2.zsh
source $HOME/.oh-my-zsh/plugins/sublime/sublime.plugin.zsh
source $HOME/.oh-my-zsh/plugins/extract/extract.plugin.zsh
source $HOME/.oh-my-zsh/plugins/autojump/autojump.plugin.zsh
source $HOME/.oh-my-zsh/custom/plugins/git-open/git-open.plugin.zsh
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/local/share/zsh-history-substring-search/zsh-history-substring-search.zsh

fag(){
j  line=`ag --nocolor '$1' | fzf` \
    && vim $(cut -d':' -f1 <<< '$line') +$(cut -d':' -f2 <<< '$line')
}

ckdir(){
  mkdir -p $1
  cd $1
}
