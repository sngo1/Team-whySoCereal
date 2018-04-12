var svg = document.getElementById("vimage");

var root = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
)

root.setAttribute("id", "root")

root.cx = svg.getAttribute("width") / 2;
root.cy = svg.getAttribute("height") / 2;
root.r = 50;
root.setAttribute("cx", root.cx);
root.setAttribute("cy", root.cy);
root.setAttribute("r", root.r);
root.setAttribute("fill", "red");
root.branches = [];
root.branches.push(createBrand("Kellog's", root));
root.branches.push(createBrand("Post", root));
root.branches.push(createBrand("Quaker", root));
root.branches.push(createBrand("General Mills", root));
root.branches.push(createBrand("Nestle", root));
root.branches.push(createBrand("Ralston", root));
root.exploded = false;
root.explode = function(){
    for(var branch in branches){
		branch.display();
    }
	root.exploded = true;
}
root.contract = function(){
	for(var branch in branches){
		branch.hide();
    }
	root.exploded = false;
}

var createBrand = function(name, root){
	var brand = document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "circle"
	)
	brand.root = root;
	angle = Math.random() * 2 * Math.PI;
	brand.cx = root.cx + Math.floor(200 * Math.cos(angle));
	brand.cy = root.cy + Math.floor(200 * Math.sin(angle));
	brand.r = 50;
	brand.setAttribute("cx", brand.cx);
	brand.setAttribute("cy", brand.cy);
	brand.setAttribute("r", brand.r);
	brand.setAttribute("fill", "blue");
	brand.setAttribute("id", name);
	brand.branches = [];
	for (var cereal in ["cereal a", "cereal b", "cereal c"]){
		brand.branches.push(cereal);
	}
	brand.line = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"line"
	)
	brand.line.x1 = root.cx;
	brand.line.y1 = root.cy;
	brand.line.x2 = brand.cx;
	brand.line.y2 = brand.cy;
	brand.line.setAttribute("x1", brand.line.x1);
	brand.line.setAttribute("y1", brand.line.y1);
	brand.line.setAttribute("x2", brand.line.x2);
	brand.line.setAttribute("y2", brand.line.y2);
	brand.line.setAttribute("stroke", "black");
	brand.line.setAttribute("id", name + "line");
	brand.exploded = false;
	brand.explode = function(){
	    for(var branch in branches){
			branch.display();
	    }
		brand.exploded = true;
	}
	brand.display = function(){
		svg.appendChild(brand);
		svg.appendChild(line);
	}
	brand.hide = function(){
		svg.removeChild(brand);
		svg.removeChild(line);
	}
}