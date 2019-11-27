tell application "System Events"
	tell process "Surge"
		tell menu bar item 1 of menu bar 2
			perform action "AXShowMenu"
			keystroke "r" using command down
		end tell
	end tell
end tell

-- 参考：https://github.com/jayqizone/Surge-AppleScript
