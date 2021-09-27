import os
import requests
from bs4 import BeautifulSoup

# 设置代理
proxies = {
  "http": "http://127.0.0.1:8888",
  "https": "https://127.0.0.1:8888"
}

# 获取网页源码，格式化源代码
url  = input("粘贴搜索页面链接：")
resp = requests.get(url, proxies=proxies)
soup = BeautifulSoup(resp.text, 'lxml')

links = soup.findAll('a', {'class': 'styles__link--3QJ5N'})
for link in links:
    # 获取网页源码，格式化源代码
    resp = requests.get(link['href'], proxies=proxies)
    soup = BeautifulSoup(resp.text, 'lxml')

    # 获取商品标题，创建标题对应的文件夹
    title = soup.find('h1', class_ ='styles__box--2Ufmy styles__text--23E5U styles__display2--3HydH styles__display-block--3kWC4 styles__margin-none--3Ub2V styles__marginTop-xs--2KZR5').get_text()
    savePath = os.getcwd() + '/' + title
    if not os.path.exists(savePath):
        os.mkdir(savePath, mode=0o0755)

    # 获取商品图片，下载到新建的文件夹
    images = soup.select('div[class*="PreviewGallery__gallery--1mxHG DesktopProductPage__gallery--36AFk"]')[0]
    images = images.findAll('img')
    for image in images:
        filename = os.path.basename(image['src'])
        # 区别于 savePath 两个不一样
        downPath = './' + title + '/' + filename
        # 图片存在性检验
        if os.path.exists(downPath):
            print('图片 ' + filename + ' 已存在，忽略')
            continue
        # 下载图片
        response = requests.get(image['src'], proxies=proxies)
        if response.status_code == 200:
            print('下载成功 ' + filename)
            with open(downPath, 'wb') as f:
                f.write(response.content)
