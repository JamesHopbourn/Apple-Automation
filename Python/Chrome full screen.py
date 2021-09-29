from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--kiosk")
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])

driver = webdriver.Chrome(chrome_options=chrome_options)
driver.get('https://localhost:3000')
