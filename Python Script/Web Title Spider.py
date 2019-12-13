#!/usr/local/bin/python
#-*-coding:utf-8-*-
#  Web Title Spider.py
#  Web Title Spider
#
#  Created by James Hopbourn on 2019/12/13.
#  Copyright © 2019 James Hopbourn. All rights reserved.

import urllib2
from bs4 import BeautifulSoup
 
html = urllib2.urlopen("https://github.com/JamesHopbourn/Apple-Automation")
soup = BeautifulSoup(html.read(), 'lxml')
title = soup.title.string

print(title)