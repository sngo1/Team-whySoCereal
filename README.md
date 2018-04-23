# Cereal Numbers
### Stuyvesant High School's SoftDev Analysis of a Cereal Dataset
### by Team whySoCereal [Adam Abbas, Holden Higgins, Jawad Kadir, & Samantha Ngo][Softdev pd7]

 The dataset we are using is called *80 Cereals* and it provides the name, manufacturer, type, and nutritional information for 80 cereals produced and sold in America. We have chosen this dataset because it is unique in that cereal is something the vast majority of Americans eat every morning, or at the very least something we eat often, and they never really give a second thought about it. We seek the truth behind cereal and how it affects consumers. We all know cereal tastes great, but is it good for you? How much nutrients are you taking in? How much sugar are you taking in? 

- #### *80 Cereals* was compiled by user Chris Crawford on Kaggle. Find it [here.](https://www.kaggle.com/crawford/80-cereals)

## Launch Instructions:
Welcome traveler! We are glad you have decided to be our beta tester! Here are some steps to bring you up to speed:
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
At its core, our page will be similar to a Code Flower, with user interaction changing what and how things appear. The visualization page has a root bubble with 6 bubbles branching out. The 6 bubbles branching out represents the cereal manufacturers. Each of those manufacturer bubbles will branch out to be individual cereal bubbles, as well as smaller bubbles underneath with nutrient labels. By clicking a manufacturer, all of the cereal by that manufacturer will appear on the page. Clicking a nutrient (like protein, carbs, etc.) will adjust the size of the cereal bubbles based on how much of that nutrient each cereal has. Upon hovering over cereals, you will receive more information!

#### Our goal is to encourage our reader to think critically about cereal and the foods they consume so readily without thought. The questions we aim to answer are: 
- #### What are we eating? and...
- #### *Should* we be eating it?

### Let's See the D3
We use d3 to create bubbles in svg, as well as to make any sort of animation touches. Clicking on bubbles will cause branches to pop out, connecting the bubbles. We can accomplish this hierarchy by using d3 Object-oriented programing. The animations itself are also driven using d3 transitions and physics. 

### Bugs to look out for:
Unfortunately, we've been unable to get the titles to display, which is an essential part of your experience and we are working on that. In addition, the transitions may not be working just yet, so you may not be able to click on anything. We realize these are major bugs, but we hope that you can appreciate our work that has gone into accomplishing what we have so far. We hope that you'll be able to wait for our bug fixes in version 2.0 coming out sooner than you think!

#### Thanks for checking out our project! Please feel free to open any comments/concerns under the issues section of our repo-- the more help, the better. 
