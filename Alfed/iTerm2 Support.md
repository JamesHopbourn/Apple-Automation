```
on alfred_script(q)
	tell application "System Events"
		get name of every process whose name is "iTerm"
		tell application "iTerm"
			set newWindow to (create window with default profile)
			tell current session of newWindow
				write text q
			end tell
		end tell
	end tell
end alfred_script
```
