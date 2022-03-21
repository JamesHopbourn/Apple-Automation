import re
import requests
import clipboard
from bs4 import BeautifulSoup

result = []
content = ''
cliptext = clipboard.paste()
cliptext = cliptext.split("\n")
for url in cliptext:
	if(url.startswith("http")):
		resp = requests.get(url, headers={"User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML), like Gecko) Chrome/35.0.1916.153 Safari/537.36"})
		soup = BeautifulSoup(resp.text, 'lxml')
		title = re.sub('(<.*?>|-.*$)', '', str(soup.title)).strip()
		text = title + '\n' + url
		result.append(text)
		
for x in result:
	content += x + '\n\n'
clipboard.copy(content)
# 发出完成提示音
print('\007')