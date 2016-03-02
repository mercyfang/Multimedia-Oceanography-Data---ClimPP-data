'''
Created on Feb 27, 2016

@author: Mercy
'''
import csv
import os
import json
os.getcwd()
os.path.exists('/Users/user/Desktop/Mercy/independent study')
exampleFile=open('/Users/user/Desktop/Mercy/independent study/mmc1.csv',"r")
exampleReader=csv.reader(exampleFile)
exampleData=list(exampleReader)  #[[lat,long,...],[lat, long,...]]
latitude=[]
longitude=[]
for i in range(1,len(exampleData)):
    latitude.append(exampleData[i][0])
    longitude.append(exampleData[i][1])
list=[]
write={}
with open('/Users/user/Desktop/Mercy/independent study/mmc1.json',"w") as file:
    for i in range(len(latitude)):
        write["latitude"]=float(latitude[i])
        write["longitude"]=float(longitude[i])
        list.append(write)
    json.dumps(list,file)
        #print {"latitude":latitude[i],"longitude":longitude[i]}
    #print {"latitude":latitude,"longitude":longitude}
    #print stringOfJsonData
file.close()

#print exampleData[1][1]
#"latitude":0,
#   "longitude":250
