# Cereal Numbers
### Stuyvesant High School's SoftDev Analysis of a Cereal Dataset
### by Team whySoCereal [Adam Abbas, Holden Higgins, Jawad Kadir, & Samantha Ngo][Softdev pd7]

#### The dataset we are using is called *80 Cereals* and it provides the name, manufacturer, type, and nutritional information for 80 cereals produced and sold in America. We have chosen this dataset because it is unique in that cereal is something the vast majority of Americans eat every morning, or at the very least something we eat often, and they never really give a second thought about it. We seek the truth behind cereal and how it affects consumers. We all know cereal tastes great, but is it good for you? How much nutrients are you taking in? How much sugar are you taking in? 

- #### *80 Cereals* was compiled by user Chris Crawford on Kaggle. Find it [here.](https://www.kaggle.com/crawford/80-cereals)

### What will be displayed without user interaction?
#### At its core, our page will be a big bubble chart, with user interaction changing what and how things appear. The initial page will have 6 bubbles with cereal manufacturers, as well as smaller bubbles underneath with nutrient labels. By clicking a manufacturer, all of the cereal by that manufacturer will appear on the page. Clicking a nutrient (like protein, carbs, etc.) will adjust the size of the cereal bubbles based on how much of that nutrient each cereal has. Upon hovering over cereals, you will receive more information!

#### Our goal is to encourage our reader to think critically about cereal and the foods they consume so readily without thought. The questions we aim to answer are: 
- #### What are we eating? and...
- #### *Should* we be eating it?

### Let's See the D3
#### We use d3 to create bubbles in svg, as well as to make any sort of animation touches. Clicking on bubbles will cause branches to pop out, connecting the bubbles. All of the cereals will be objects, with their nutrition being instance variables. An array will contain all of these cereals, and we will be able to iterate through it and choose what appears based on what the user has selected!

### Visualize It
![alt text](https://github.com/sngo1/whySoCereal/blob/master/Cereal%20Numbers.jpg)
