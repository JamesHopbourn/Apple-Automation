from flask import Flask

app = Flask(__name__)
@app.route('/')
def gettime():
  with open('last_seen.txt', 'r') as f:
    return f.read()

if __name__ == '__main__':
  app.config['JSON_AS_ASCII'] = False
  app.run(host='0.0.0.0', port = 80)
