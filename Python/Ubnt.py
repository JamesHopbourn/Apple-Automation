# -*- coding: UTF-8 -*-
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
url_address = 'https://localhost:8443'

resp = requests.post(url_address + "/api/login",
    data=json.dumps({"username":username, "password":password}),
    verify=False
)

token = resp.headers['Set-Cookie']
unifises = re.findall('unifises=[0-9a-zA-Z]+', token)[0].replace('unifises=', '')
csrf_token = re.findall('csrf_token=[0-9a-zA-Z]+', token)[0].replace('csrf_token=', '')

resp = requests.get(url_address + "/api/s/default/stat/user/" + mac_address,
    cookies={"unifises":unifises, "csrf_token":csrf_token},
    verify=False
)

days = [[0, '星期一'], [1, '星期二'], [2, '星期三'], [3, '星期四'], [4, '星期五'], [5, '星期六'], [6, '星期天']]

data = resp.json()['data'][0]['last_seen']
week = datetime.fromtimestamp(data).weekday()
date = datetime.fromtimestamp(data).strftime('%Y-%m-%d')
time = datetime.fromtimestamp(data).strftime('%H:%M:%S')
conn = mysql.connector.connect(user='root', password='password', host='localhost', database='Ubnt', port=3306)
cursor = conn.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS last_seen (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  date date NULL DEFAULT '0000-00-00',
  time time NULL DEFAULT '00:00:00',
  week varchar(20) NOT NULL)""")
cursor.execute("ALTER TABLE last_seen AUTO_INCREMENT = 1")
cursor.execute("INSERT INTO last_seen (id, date, time, week) VALUES (%s, %s, %s, %s)", (None, date, time, days[week][1],))
conn.commit()
cursor.close()
