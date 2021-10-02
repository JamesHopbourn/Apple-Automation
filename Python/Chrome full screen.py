from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--kiosk")
options.add_experimental_option("detach", True)
options.add_experimental_option("excludeSwitches", ['enable-automation'])

driver = webdriver.Chrome(options=options, executable_path='$HOME/dotfile/bin/chromedriver')
driver.get('https://sspai.com')
