import requests
import time
import datetime
import random
import json



print("RUN")
#print(f"http://localhost/MyMQTTServer/db_handler.php?x={{""table"":""sasha_20240625"",""x"":{res}}}")



#new_table="sasha_20240625"
new_table="Petia_20240625"
        
url = f"http://localhost/MyMQTTServer/db_handler.php?getAll={new_table}"
#print(url)
response = requests.request("GET", url)
print(response.text)

res=json.loads(response.text)
    
print(res)
print(len(res))
print(res[len(res)-1]['id'])
id=res[len(res)-1]['id']


while True:
    new_data={"table":"Petia_20240625","id":id}
    new_json=json.dumps(new_data)

    url = f"http://localhost/MyMQTTServer/db_handler.php?get={new_json}"
    #print(url)
    response = requests.request("GET", url)
    #print(response.text)
    print(res)
    #print(len(res))
    res=json.loads(response.text)
    if len(res)>0:
        id=res[len(res)-1]['id']

    time.sleep(6)
