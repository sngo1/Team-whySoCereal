var svg = document.getElementById("vimage");

var root = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
)

root.setAttribute("id", "root")

root.x = svg.getAttribute("width") / 2;
root.y = svg.getAttribute("height") / 2;
root.branches = []
root.branches += createBrand("Kellog's");
root.branches += createBrand("Post");
root.branches += createBrand("Quaker");
root.branches += createBrand("General Mills");
root.branches += createBrand("Nestle");
root.branches += createBrand("Ralston");
root.exploded = false;
root.explode = function(){
    for(Branch branch:branches){
	branch.display();
    }
}
