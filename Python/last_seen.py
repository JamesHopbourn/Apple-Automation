import mysql.connector
from flask import Flask

app = Flask(__name__)
@app.route('/')
def last_seen():
    conn = mysql.connector.connect(user='root', password='password', host='localhost', database='Ubnt')
    cursor = conn.cursor()
    cursor.execute("select date,time from last_seen order by id DESC limit 1")
    data = cursor.fetchone()
    cursor.close()
    return(str(data[0]) + ' ' + str(data[1]))

if __name__ == '__main__':
  app.config['JSON_AS_ASCII'] = False
  app.run(host='0.0.0.0', port = 80)
