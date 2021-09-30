import uvicorn
import mysql.connector
from fastapi import FastAPI

app = FastAPI()

config = {
    'user': 'root', 
    'password': '', 
    'host': '', 
    'port': 3306, 
    'database': ''
}

@app.get('/')
def query():
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    cursor.execute("select concat(date,' ',time) from last_seen order by id DESC limit 1")
    data = cursor.fetchone()
    cursor.close()
    return {"last_seen": str(data[0])}

@app.get("/query/{date}")
def query(date):
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    cursor.execute("SELECT IFNULL((SELECT CONCAT(date,' ',time) FROM last_seen WHERE date = (%s)) ,'未查询到相关记录')", (f'{date}',))
    data = cursor.fetchone()
    cursor.close()
    return {"last_seen": str(data[0])}

if __name__ == '__main__':
    uvicorn.run(app,host="0.0.0.0",port=80)
