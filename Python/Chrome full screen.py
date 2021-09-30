from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--kiosk")
options.add_experimental_option("excludeSwitches", ['enable-automation'])

driver = webdriver.Chrome(options=options)
driver.get('https://sspai.com')
