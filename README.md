# Cereal Numbers
### Stuyvesant High School's SoftDev Analysis of a Cereal Dataset
### by Team whySoCereal [Adam Abbas, Holden Higgins, Jawad Kadir, & Samantha Ngo][Softdev pd7]

#### The dataset we are using is called *80 Cereals* and it provides the name, manufacturer, type, and nutritional information for 80 cereals produced and sold in America. We have chosen this dataset because it is unique in that cereal is something the vast majority of Americans eat every morning, or at the very least something we eat often, and they never really give a second thought about it. We thought the truth behind cereal and how it affects consumers. We all know cereal tastes great, but is it good for you? How much nutrients are you taking in? How much sugar are you taking in? We're here to find that out for you. 

- #### *80 Cereals* was compiled by user Chris Crawford on Kaggle. Find it [here.](https://www.kaggle.com/crawford/80-cereals)

### What will be displayed without user interaction?
#### The centerpiece of our webpage will show a grid(8x10) of all the names of cereal and there will be a navigation/filter bar above the grid that provides the user with options to filter according to various factors such as manufacturer or grams of protein. If the user hovers over a factor, the grid will render each brand's ranking as a circle, with the largest circle having the largest amount or the highest ranking. As the user moves the mouse over each factor, the diagram will change accordingly. If the user clicks on a factor, the diagram that displays will become fixed and a data analysis that includes other graphs/charts specifically related to that factor will appear underneath. The user can click the factor name again to hide the data. 

#### Our goal is to encourage our reader to think critically about cereal and the foods they consume so readily without thought. The questions we aim to answer are: 
- #### What are we eating? and...
- #### *Should* we be eating it?

### Let's See the D3
#### In d3, we will be *enter*ing all the brand names initially with the factors as an array attached to each factor. Then, we will utilize the data as is to rank and display the information. Transitions will be used to uncover/hide information and when the user's mouse moves between factors on the factor/navigation bar. The charts and graphs in our webpage will most resemble the bubble chart and the streamgraph.

### Visualize It
![alt text](https://github.com/sngo1/whySoCereal/blob/master/Cereal%20Numbers.jpg)
