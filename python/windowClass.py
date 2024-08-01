#import requests
#import time
import json
import tkinter
from tkinter import *
from tkinter import ttk
from tkinter import filedialog

window=tkinter.Tk()

def init():

    ############INIT_WND#############

    
    window.title("Get Data From Server")
    window.geometry("600x600+100+100")

    #######################Variable###################

    #new_table="Grisha_20240626"



    ########################GRID##################################
    for i in range(40):
        window.columnconfigure(index=i,weight=1)

    window.rowconfigure(index=0,weight=1)
    window.rowconfigure(index=1,weight=1)
    window.rowconfigure(index=2,weight=5)


    #############################ENTRIES###########################
    entry = ttk.Entry()
    entry.grid(column=0,columnspan=40,row=0,padx=6,pady=6,sticky="NSEW")

    ############################VARIABLE_FOR_LISTBOX###############
    my_messages=[]
    messages_var = Variable(value=my_messages)
    ##############################################################
    
    ##########################BUTTONS################################

    buttons=[]
    buttons.append(ttk.Button(text="Start",command=start))
    buttons.append(ttk.Button(text="Save",command=save))


    buttons[0].grid(column=0,columnspan=20,row=1,padx=6,pady=6,sticky="NSEW")
    buttons[1].grid(column=20,columnspan=20,row=1,padx=6,pady=6,sticky="NSEW")

    ##########################LISTBOX_SCROLL#################################

    lb=Listbox(listvariable=messages_var,selectmode=MULTIPLE,selectbackground="red")

    lb.grid(column=0,columnspan=39,row=2,sticky="NSEW",padx=6,pady=6)

    scroll=ttk.Scrollbar(orient="vertical",command=lb.yview)
    scroll.grid(column=39,row=2,sticky="ns")
    lb["yscrollcommand"]=scroll.set


    ######################LOOP####################################


def start():
    
    print("Start")
    
    # new_table=entry.get()

    # headers = {
    #     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    # }
    
    # url = f"http://h50149iy.beget.tech/db_handler.php?getAll={new_table}"
    # print(url)
    # response = requests.get(url, headers=headers)
    # #print(response.text)

    # res=json.loads(response.text)
    # #if len(response)>0:
    # for item in res:
    #     #print(item,end='\n')
    #     my_messages.append(f"{item['datetime']}: {item['x']}")
    #     id=item['id']
    
    # messages_var.set(my_messages)
    
    # #time.sleep(6)
    # #print(my_messages)
    # #print(len(response))
    # #print(response[len(response)-1]['id'])
    # #id=response[len(response)-1]['id']
    

    
    # while True:
    #     print(id)
    #     new_data={"table":new_table,"id":id}
    #     new_json=json.dumps(new_data)

    #     url = f"http://h50149iy.beget.tech/db_handler.php?get={new_json}"
    #     print(url)
    #     response = requests.get(url, headers=headers)
    #     #print(response.text)
    #     if response.status_code == 200:
    #         #print(response.text)
    #         #print(response)
    #         #print(len(response))
    #         res=json.loads(response.text)
            
            

    #         #if len(response)>0:
    #         for item in res:
    #             my_messages.append(f"{item['datetime']}: {item['x']}")
    #             id=item['id']
    #             messages_var.set(my_messages)
            
    #     else:
    #         print(f"Failed to retrieve data: {response.status_code}")
            

        
    #     time.sleep(6)
    #     messages_var.set(my_messages)

    pass

# def start():
#     with open("test.txt","r") as file:
#         temp=file.read()
#         res=json.loads(temp)
#         print("file opend")
#         for item in res:
#             print(item,end='\n')
#             my_messages.append(f"{item['datetime']}: {item['x']}")
#             id=item['id']
#     messages_var.set(my_messages)
         

def save():
    print("Save")
    # filepath = filedialog.askopenfilename()
    # with open(filepath,"w") as file:
    #     for item in my_messages:
    #         file.write(item)
    #         file.write("\n")
    ##print(filepath)
    pass


def loop():
    window.mainloop()
