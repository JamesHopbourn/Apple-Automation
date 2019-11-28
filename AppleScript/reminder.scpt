main()

on main()
	
	set f1 to "/System/Library/Sounds/Pop.aiff"
	set f2 to "/System/Library/Sounds/Ping.aiff"
	set f3 to "/System/Library/Sounds/Glass.aiff"
	set f4 to "/System/Library/Sounds/Tink.aiff"
	
	repeat
		set now to current date
		set h to hours of now
		set m to minutes of now
		set s to seconds of now
		
		if (h = 6) and (m = 30) and (s = 0) then --6:30 起床
			OnAlert(f1, f4, f3, "06：30 了，快点起床。", "起床提醒.", "Hurry up , it's time to get up")
		else if (h = 10) and (m = 0) and (s = 0) then --10 早上水群
			OnAlert(f1, f4, f3, "10：00 了，群主又在水群了", "水群提醒.", "Newlearner365 is talking his head off.")
		else if (h = 12) and (m = 0) and (s = 0) then --午餐，水群
			OnAlert(f1, f4, f3, "12：00 了，可以准备午餐了", "午餐提醒.", "Let's prepare lunch.")
		else if (h = 14) and (m = 0) and (s = 0) then --下午水群
			OnAlert(f1, f4, f3, "14：00 了，午后吹水开始了", "TG上线提醒.", "Let's start our afternoon telegram talking.")
		else if (h = 17) and (m = 30) and (s = 0) then --17:30 晚餐，水群
			OnAlert(f1, f4, f3, "17：30 了，可以准备晚餐了", "晚餐提醒.", "Let's prepare dinner.")
		else if (h = 19) and (m = 0) and (s = 0) then --晚上水群
			OnAlert(f1, f4, f3, "  19：00 了，晚上吹水开始了。 ", "TG上线提醒.", "Let's begin our everning telegram talking.")
		else if (h = 10) and (m = 17) and (s = 0) then --水群
			OnAlert(f1, f4, f3, " 22：00 了，最后一次吹牛开始了。 ", "TG上线提醒.", "Let's start the final telegram talking.!")
		else if (h > 23) and (m = 0) and (s = 0) then
			display dialog "很晚了，睡觉吧。不，傻逼群友还没睡。"
			--exit repeat
		end if
		
		delay 0.5
		
	end repeat
	
end main

on OnAlert(sound1, sound2, sound3, content, sub, sayText)
	
	repeat with i from 1 to 5
		do shell script "afplay  " & sound1
		do shell script "afplay  " & sound2
	end repeat
	do shell script "afplay  " & sound3
	
	display notification content with title "日程表" subtitle sub sound name "Ping"
	say sayText
	
end OnAlert