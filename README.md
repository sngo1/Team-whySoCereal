### Task Designation:
1. Samantha - Use d3 to create svg and webpage elements
2. Holden - Turn the data into d3 objects
3. Adam - Create clickable features for initial circles and create branching features
4. Jawad - Create branching features and sorting features


# Cereal Numbers
### Stuyvesant High School's SoftDev Analysis of a Cereal Dataset
### by Team whySoCereal [Adam Abbas, Holden Higgins, Jawad Kadir, & Samantha Ngo][Softdev pd7]

 The dataset we are using is called *80 Cereals* and it provides the name, manufacturer, type, and nutritional information for 80 cereals produced and sold in America. We have chosen this dataset because it is unique in that cereal is something the vast majority of Americans eat every morning, or at the very least something we eat often, and they never really give a second thought about it. We seek the truth behind cereal and how it affects consumers. We all know cereal tastes great, but is it good for you? How much nutrients are you taking in? How much sugar are you taking in? 

- #### *80 Cereals* was compiled by user Chris Crawford on Kaggle. Find it [here.](https://www.kaggle.com/crawford/80-cereals)

## Launch Instructions:
Welcome Stuy APCS-level students! We are glad you have decided to be our beta tester! Here are some steps to bring you up to speed:
1. Our website runs on Flask. Please install it using the documentation [here.](http://flask.pocoo.org/docs/0.12/installation/)
2. ```if !pythonInstalledAlready:``` If you don't still have python on your computer from Intro to CS 2, download Python **2.7.14** [here.](https://www.python.org/downloads/) Make sure you can run python commands in the terminal using simply: \
```python <name-of-python-file-here>```\
If you can't do that, learn how by reading 2.1. Invoking the Interpreter [here.](https://docs.python.org/2/tutorial/interpreter.html#invoking-the-interpreter) \
```else:``` Disregard and move along.
3. Next, you're going to need a *virtual environment*. Follow the instructions on the Flask installation page to create and launch your
virtual environment. All the answers are on that [page.](http://flask.pocoo.org/docs/0.12/installation/)
4. Once you're in your virtual environment, we can get started. Clone our github repo somewhere easily accessible. 
5. ```cd``` into our root repo(the folder where app.py is located) and enter ```python app.py``` into your terminal.
6. Finally, open the browser of your choice and type ```localhost:5000``` into the address line. Enter, and voila! Our website should be working for you.

## More on our THOUGHT PROCESS - JARGON!
### What will be displayed without user interaction?
At its core, our page will be a big bubble chart, with user interaction changing what and how things appear. The initial page will have 6 bubbles with cereal manufacturers, as well as smaller bubbles underneath with nutrient labels. By clicking a manufacturer, all of the cereal by that manufacturer will appear on the page. Clicking a nutrient (like protein, carbs, etc.) will adjust the size of the cereal bubbles based on how much of that nutrient each cereal has. Upon hovering over cereals, you will receive more information!

#### Our goal is to encourage our reader to think critically about cereal and the foods they consume so readily without thought. The questions we aim to answer are: 
- #### What are we eating? and...
- #### *Should* we be eating it?

### Let's See the D3
We use d3 to create bubbles in svg, as well as to make any sort of animation touches. Clicking on bubbles will cause branches to pop out, connecting the bubbles. All of the cereals will be objects, with their nutrition being instance variables. An array will contain all of these cereals, and we will be able to iterate through it and choose what appears based on what the user has selected!

### Visualize It
### TBD
