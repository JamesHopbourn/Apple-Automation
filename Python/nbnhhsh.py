import json
import urllib3
import telegram
import requests
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

token = ''
bot = telegram.Bot(token=token)

# 设置代理
proxies = {
  # "http": "http://192.168.99.41:8888",
  # "https": "https://192.168.99.41:8888"
}

# Telegram 消息处理
url = 'https://api.telegram.org/bot' + token + '/getUpdates'
resp = requests.post(url, proxies=proxies, verify=False).json()
chat_id = resp['result'][-1]['message']['chat']['id']

# POST 查询最新消息的文本
query = resp['result'][-1]['message']['text']
resp = requests.post("https://lab.magiconch.com/api/nbnhhsh/guess",
    data=json.dumps({"text": query}),
    headers={"content-type": "application/json"}
)

# 返回结果处理
data = json.loads(resp.text)
if (len(data) and 'trans' in data[0] and len(data[0]['trans'])):
  text = data[0]['trans']
  text = '\n'.join(text)
elif (len(data) and 'inputting' in data[0] and len(data[0]['inputting'])):
  text = data[0]['inputting']
  text = '\n'.join(text)
else:
  text = '未查询到相关结果'

bot.sendMessage(chat_id=chat_id, text=text)
