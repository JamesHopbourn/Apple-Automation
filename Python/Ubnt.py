import re
import json
import urllib3
import requests
from datetime import datetime
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

username = ''
password = ''
mac_address = ''
url_address = 'https://raspberrypi.local:8443'

r = requests.post(url_address + "/api/login",
    data=json.dumps({"username": username,"password": password}),
    verify=False
)

token = r.headers['Set-Cookie']
unifises = re.findall('unifises=[0-9a-zA-Z]+', token)[0].replace('unifises=', '')
csrf_token = re.findall('csrf_token=[0-9a-zA-Z]+', token)[0].replace('csrf_token=', '')

r = requests.get(url_address + "/api/s/default/stat/user/" + mac_address,
    cookies={"unifises": unifises,"csrf_token": csrf_token},
    verify=False
)

last_seen = r.json()['data'][0]['last_seen']
last_seen = datetime.fromtimestamp(last_seen).strftime('%Y/%m/%d %H:%M:%S')
with open('last_seen.txt', 'w') as file_object:
    file_object.write(last_seen)
print(last_seen)
