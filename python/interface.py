import tkinter
from tkinter import *
from tkinter import ttk
from tkinter import filedialog

############INIT_WND#############

window=tkinter.Tk()
window.title("Get Data From Server")
window.geometry("600x600+100+100")

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


def start():
    pass

def save():
    filepath = filedialog.askopenfilename()
    ##print(filepath)
    pass

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

window.mainloop()
