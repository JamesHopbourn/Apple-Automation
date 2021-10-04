import os
import re
import uuid
import json
import requests

url = "https://www.zhihu.com/question/310276533/answer/597436357"
r = requests.get(url, headers={'User-Agent':'curl'})
list = re.findall("https://www.zhihu.com/video/\d+", str(r.text))

for x in range(len(list)):
    list[x] = list[x].replace('www.zhihu.com/video/',
                              'lens.zhihu.com/api/videos/')
    dict = requests.get(list[x], headers={'User-Agent':'curl'})
    content = json.loads(dict.text)
    downurl = content['playlist']['hd']['play_url']
    video = requests.get(downurl, allow_redirects=True)
    filename = str(uuid.uuid4())[:9] + os.path.basename(url) + '.mp4'
    open(filename, 'wb').write(video.content)
