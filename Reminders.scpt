tell application "Reminders"
	activate
	make new reminder at list "Drafts" with properties {name:{(the clipboard)}}
end tell

　　- set aReminder to (make new reminder with properties {name:"Test1", body:"New Reminder", due date:dateO2, remind me date:dateO1, priority:9}) 
   – priority 1:高、5:中、9:低、0:なし

