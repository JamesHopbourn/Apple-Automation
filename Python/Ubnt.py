import re
import json
import urllib3
import requests
import mysql.connector
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

data = r.json()['data'][0]['last_seen']
last_seen = datetime.fromtimestamp(data).strftime('%Y-%m-%d %H:%M:%S')
with open('last_seen.txt', 'w') as file_object:
    file_object.write(last_seen)
    file_object.close()
print(last_seen)

day  = datetime.fromtimestamp(data).strftime('%Y-%m-%d')
time = datetime.fromtimestamp(data).strftime('%H:%M:%S')
conn = mysql.connector.connect(user='root', password='password', host='localhost', database='Ubnt')
cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS last_seen (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  day date NULL DEFAULT '0000-00-00',
  time time NULL DEFAULT '00:00:00');""")
cursor.execute("INSERT INTO last_seen (id,day,time) VALUES (%s, %s, %s)", (None, day, time,))
conn.commit()
cursor.close()
