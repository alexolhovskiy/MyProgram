import requests
import time
import datetime
import random
import json



print("RUN")
#print(f"http://localhost/MyMQTTServer/db_handler.php?x={{""table"":""sasha_20240625"",""x"":{res}}}")


while True:
    res=random.randint(-30,30)
    print(res)
    
    #new_data={"table":"sasha_20240625","x":res}
    #new_data={"table":"Petia_20240625","x":res}
    #new_data={"table":"sasha_20240626","x":res}
    new_data={"table":"Grisha_20240626","x":res}
    new_json=json.dumps(new_data)
    #url = f"http://localhost/MyMQTTServer/db_handler.php?x=={new_json}"
    url = f"http://h50149iy.beget.tech/db_handler.php?x={new_json}"
    #url = f"http://h50149iy.beget.tech/db_handler.php?temp={res}"
    #print(url)
    
    response = requests.request("GET", url)
    print(response.text)
    
    time.sleep(6)
    
