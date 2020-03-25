import requests
from bs4 import BeautifulSoup
LIMIT = 50
URL = f"https://quasarzone.co.kr/bbs/board.php?bo_table=qb_saleinfo"
def page():
    result = requests.get(URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pages = soup.find_all("li", {"class": "list-item"})
    lists =[]

    for page in pages[4:] :
      item = page.find("a", {"class":"item-subject"})
      hyper_link = item["href"]
      title = item.get_text(strip=True)
      try :
        updated=page.find("span",{"class":"gz-today"}).get_text(strip=True)
      except :
        updated=page.find("div",{"class":"wr-date"}).get_text(strip=True)
      print(f"시간:{updated},제목:{title},주소:{hyper_link}")

    

page()