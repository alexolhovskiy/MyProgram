import requests
import time
import datetime
import random
import json
from tkinter import *
from tkinter import ttk



print("RUN")
#print(f"http://localhost/MyMQTTServer/db_handler.php?x={{""table"":""sasha_20240625"",""x"":{res}}}")



#new_table="sasha_20240625"
new_table="Grisha_20240626"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

        
url = f"http://h50149iy.beget.tech/db_handler.php?getAll={new_table}"
#print(url)
response = requests.get(url, headers=headers)
print(response.text)

response=json.loads(response.text)
    
print(response)
print(len(response))
print(response[len(response)-1]['id'])
id=response[len(response)-1]['id']


while True:
    new_data={"table":"Grisha_20240626","id":id}
    new_json=json.dumps(new_data)

    url = f"http://h50149iy.beget.tech/db_handler.php?get={new_json}"
    #print(url)
    response = requests.get(url, headers=headers)
    #print(response.text)
    if response.status_code == 200:
        print(response.text)
        print(response)
        #print(len(response))
        response=json.loads(response.text)
        if len(response)>0:
            id=response[len(response)-1]['id']
    else:
        print(f"Failed to retrieve data: {response.status_code}")

    

    time.sleep(6)
