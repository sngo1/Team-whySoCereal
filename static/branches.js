var svg = document.getElementById("vimage");

var root = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
)

var createBrand = function(name, root){
	var brand = document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "circle"
	)
	brand.root = root;
	angle = Math.random() * 2 * Math.PI;
	brand.centerX = root.centerX + Math.floor(200 * Math.cos(angle));
	brand.centerY = root.centerY + Math.floor(200 * Math.sin(angle));
	brand.radius = 50;
	brand.setAttribute("cx", brand.centerX);
	brand.setAttribute("cy", brand.centerY);
	brand.setAttribute("r", brand.radius);
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
	brand.line.X1 = root.centerX;
	brand.line.Y1 = root.centerY;
	brand.line.X2 = brand.centerX;
	brand.line.Y2 = brand.centerY;
	brand.line.setAttribute("x1", brand.line.X1);
	brand.line.setAttribute("y1", brand.line.Y1);
	brand.line.setAttribute("x2", brand.line.X2);
	brand.line.setAttribute("y2", brand.line.Y2);
	brand.line.setAttribute("stroke", "black");
	brand.line.setAttribute("id", name + "line");
	brand.exploded = false;
	brand.explode = function(){
	    for(var branch in brand.branches){
			branch.display();
	    }
		brand.exploded = true;
	}
	brand.display = function(){
		svg.appendChild(brand);
		svg.appendChild(brand.line);
	}
	brand.hide = function(){
		svg.removeChild(brand);
		svg.removeChild(brand.line);
	}
    brand.addEventListener("click", function(){brand.exploded?brand.contract():brand.explode()})
	return brand;
}

root.setAttribute("id", "root")

root.centerX = svg.getAttribute("width") / 2;
root.centerY = svg.getAttribute("height") / 2;
root.radius = 50;
root.setAttribute("cx", ""+root.centerX);
root.setAttribute("cy", ""+root.centerY);
root.setAttribute("r", ""+root.radius);
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
    for(branch in root.branches){
		root.branches[branch].display();
    }
	root.exploded = true;
}
root.contract = function(){
    for(branch in root.branches){
	
		root.branches[branch].hide();
    }
	root.exploded = false;
}

svg.appendChild(root);

root.addEventListener("click", function(){root.exploded?root.contract():root.explode()})
