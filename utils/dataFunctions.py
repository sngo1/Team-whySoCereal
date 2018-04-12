# Team whySoCereal
# Samantha Ngo, Holden Higgins, Adam Abbas, Jawadul Kadir
# SoftDev2 pd7

import sqlite3
import random   #enable control of a sqlite database
import csv       #facilitates CSV I/O
import os #Used for os.remove()
import json

# The following line may cause errors when running this file from app.py:
f = "../data/cereals.db"
os.remove(f) # Used during testing to remove file at the beginning

def setupDatabase():
    db = sqlite3.connect(f) #open if f exists, otherwise create
    c = db.cursor()    #facilitate db ops
    command = "CREATE TABLE cereals(name TEXT, manufacturer TEXT, type TEXT, calories INTEGER, protein INTEGER, fat INTEGER, sodium INTEGER, fiber INTEGER, carbs INTEGER, sugars INTEGER, potassium INTEGER, vitamins INTEGER, shelf_life INTEGER, weight REAL, cups REAL, rating REAL)"
    print "CREATE DATABASE: ", c.execute(command)
    db.commit()
    db.close()
    return True

setupDatabase()

# Create tables
# PARAM: N/A
# RETURN: Boolean for function executed to completion
def add_entry(name, mfr, type, calories, protein, fat, sodium, fiber, carbs, sugar, potassium, vitamins, shelf_life, weight, cups, rating):
    db = sqlite3.connect(f) #open if f exists, otherwise create
    c = db.cursor()    #facilitate db ops
    command = "INSERT INTO cereals(name, manufacturer, type, calories, protein, fat, sodium, fiber, carbs, sugars, potassium, vitamins, shelf_life, weight, cups, rating) VALUES (" + '"' + name + '"' + ", " + "'" +  mfr + "'" + ',' + "'" + type + "'" + ',' + str(calories) + ',' + str(protein) + ',' + str(fat) + "," + str(sodium) + "," + str(fiber) + ',' + str(carbs) + ',' + str(sugar) + ',' + str(potassium) + ',' + str(vitamins) + ',' + str(shelf_life) + ',' + str(weight) + ',' + str(cups) + ',' + str(rating) + ")"
    # print command
    c.execute(command)           
    db.commit()
    db.close()
    return True

#add_entry("100% Bran","N", "C",70,4,1,130,10,5,6,280,25,3,1,0.33,68.402973)

# Displays information from the tables in the command prompt
# PARAM: N/A
# RETURN: Boolean for function executed to completion
def display_tables():
    #f = "../data/cereals.db"
    db = sqlite3.connect(f) #open if f exists, otherwise create
    c = db.cursor()    #facilitate db ops
    c.execute("SELECT manufacturer FROM cereals")
    rows = c.fetchall()
    db.commit()
    db.close()
    for row in rows:
        for item in row:
            if item:
                print item
            else:
                print "null"
        print ''
    return True

# display_tables()

# ----------------------------------------------------- END OF SQLITE FUNCTIONS

def readFile(file):
    with open(file) as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            print row
    return True

def addData(file):
    with open(file) as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row[0] != "name":
                # print "NAME: ", row[0]
                add_entry(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15])
    return True

# addData('../data/cereals.csv')
# display_tables()

# ----------------------------------------------------- END OF PARSER FUNCTIONS
# readFile('../data/cereals.csv')

def csvToJSON(csvfile, jsonTXT):
    print "Converting python to JSON..."
    cerealNumbers = {"cereals":[]}
    with open(csvfile) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # print row
            cerealNumbers["cereals"].append(row)
            # print dataHolder
    with open(jsonTXT, 'w') as outfile:  
        json.dump(cerealNumbers, outfile)
    print "Python to JSON complete."
    return True

csvToJSON('../data/cereals.csv','cereals.txt')
