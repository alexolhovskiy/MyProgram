import requests
import time
import threading


import windowClass as wc

wc.init()



# new_table="Grisha_20240626"

# def start():
    
#     print("Start")
    
#     new_table=entry.get()

#     headers = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
#     }
    
#     url = f"http://h50149iy.beget.tech/db_handler.php?getAll={new_table}"
#     print(url)
#     response = requests.get(url, headers=headers)
#     #print(response.text)

#     res=json.loads(response.text)
#     #if len(response)>0:
#     for item in res:
#         #print(item,end='\n')
#         my_messages.append(f"{item['datetime']}: {item['x']}")
#         id=item['id']
    
#     messages_var.set(my_messages)
    
#     #time.sleep(6)
#     #print(my_messages)
#     #print(len(response))
#     #print(response[len(response)-1]['id'])
#     #id=response[len(response)-1]['id']
    

    
#     while True:
#         print(id)
#         new_data={"table":new_table,"id":id}
#         new_json=json.dumps(new_data)

#         url = f"http://h50149iy.beget.tech/db_handler.php?get={new_json}"
#         print(url)
#         response = requests.get(url, headers=headers)
#         #print(response.text)
#         if response.status_code == 200:
#             #print(response.text)
#             #print(response)
#             #print(len(response))
#             res=json.loads(response.text)
            
            

#             #if len(response)>0:
#             for item in res:
#                 my_messages.append(f"{item['datetime']}: {item['x']}")
#                 id=item['id']
#                 messages_var.set(my_messages)
            
#         else:
#             print(f"Failed to retrieve data: {response.status_code}")
            

        
#         time.sleep(6)
#         messages_var.set(my_messages)

#     pass

# # def start():
# #     with open("test.txt","r") as file:
# #         temp=file.read()
# #         res=json.loads(temp)
# #         print("file opend")
# #         for item in res:
# #             print(item,end='\n')
# #             my_messages.append(f"{item['datetime']}: {item['x']}")
# #             id=item['id']
# #     messages_var.set(my_messages)
         

# def save():
#     print("Save")
#     filepath = filedialog.askopenfilename()
#     with open(filepath,"w") as file:
#         for item in my_messages:
#             file.write(item)
#             file.write("\n")
#     #print(filepath)
#     pass








th1=threading.Thread(target=func)
#th2=threading.Thread(target=wc.loop)

th1.start()
#th2.start()




wc.loop()