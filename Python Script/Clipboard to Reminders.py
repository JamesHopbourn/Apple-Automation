#!/usr/local/bin/python3
#-*- coding:utf-8 -*-
#  Clipboard to Reminders.py
#  Clipboard to Reminders
#
#  Created by James Hopbourn on 2019/12/11.
#  Copyright © 2019 James Hopbourn. All rights reserved.

import os
import pyperclip
clipboard = pyperclip.paste()

list = clipboard.split('\n')
name = list[0]
list.remove(list[0])
body = '\n'.join(list)

cmd = """osascript -e 'tell application "Reminders"
	make new reminder at list "Drafts" with properties {name:"namehere", body:"bodyhere"}
end tell'"""
cmd = cmd.replace("namehere", name)
cmd = cmd.replace("bodyhere", body)

def addreminders():
     os.system(cmd)
addreminders()
