import requests
import time
import datetime
import random
import json


with open('url.txt','r') as f:
    ##data=json.load(f)
    ##print(data)
    ##arr=data["arr"]
    url=f.read()

print("RUN")
#print(f"http://localhost/MyMQTTServer/db_handler.php?x={{""table"":""sasha_20240625"",""x"":{res}}}")
#while True:
#res=random.randint(-30,30)
#print(res)
#table="Grisha_20240626"


#new_data={"table":"Grisha_20240626","x":res}
#new_data={"table":table,"x":res}
#new_json=json.dumps(new_data)
#url = f"http://h50149iy.beget.tech/db_handler.php?x={new_json}"

print(url)

### Example headers (modify as needed)
##headers = {
##    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
##}
##
### Cloudflare often requires a valid User-Agent header
##response = requests.get(url, headers=headers)
##
### Check if the request was successful (status code 200)
##if response.status_code == 200:
##    print(response.text)
##else:
##    print(f"Failed to retrieve data: {response.status_code}")

#time.sleep(6)
    
