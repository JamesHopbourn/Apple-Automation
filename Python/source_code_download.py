import os
import requests

resp = requests.get('https://www.redbubble.com/es/shop/?query=rick%20and%20morty%20shirt&ref=search_box')
with open('source_code.html', 'w') as file_object:
    file_object.write(resp.text)
    file_object.close()
