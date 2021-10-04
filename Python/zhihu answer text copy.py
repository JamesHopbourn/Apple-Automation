import re
import sys
import urllib3
import webbrowser
import _clipboard
import requests as req
from bs4 import BeautifulSoup
from urllib.parse import quote
urllib3.disable_warnings()

if len(sys.argv) == 3:
    url = sys.argv[1]
    success = sys.argv[2]
elif len(sys.argv) == 2:
    url = sys.argv[1]
    success = 'zhihu://'
else:
    url = _clipboard.get()
    success = 'zhihu://'

ID = re.findall('answer/\d+', url)
ID = ID[0].replace('answer/', '')
api = 'https://www.zhihu.com/api/v4/answers/' + ID + '?include=content'

resp = req.get(api,
    headers={"User-Agent": "curl/7.68.0"},
    verify=False
)

text = resp.json()
title = text['question']['title']
url  = text['question']['url']
cont = BeautifulSoup(text['content'],'html.parser')
for elem in cont.find_all(["a", "p", "div", "br"]):
    elem.append('\n')

content = quote(title + '\n' + cont.get_text() + '\n\n[' + title + '](' + url + ')')
callback = 'drafts4://create?text=' + content + '&x-success=' + success
webbrowser.open(callback)
