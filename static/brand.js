// Team whySoCereal
// Samantha Ngo, Adam Abbas, Jawadul Kadir, Holden Higgins
// Softdev -- pd7
// P#01 - Viz
// 2018 April

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
    brand.setAttribute("fill", "lightgreen");
    brand.setAttribute("id", name);
    brand.branches = [];
    brand.cereacles = [];
    for (var cereal in cereals){
	     if(cereals[cereal]['brand'] == name[0]){
	        brand.branches.push(make_cereal(data[cereal][0], data[cereal][1], data[cereal][4],data[cereal][8],data[cereal][5],data[cereal][9],data[cereal][6]));
	        brand.cereacles.push(brand.branches[brand.branches.length - 1].createCirc())
        }
      }
    console.log(brand.branches);
    brand.line = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line");
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
    brand.label = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"text"
    )
    brand.label.setAttribute("x", brand.centerX);
    brand.label.setAttribute("y", brand.centerY);
    brand.label.setAttribute("text-anchor", "middle");
    brand.label.innerHTML = name
    brand.ed = false;
    brand.display = function(){
	     svg.appendChild(brand);
	     svg.appendChild(brand.line);
	     svg.appendChild(brand.label);
    }
    brand.explode = function(){
	for (var cereacle in brand.cereacles)
	    svg.appendChild(brand.cereacles[cereacle]);
	//console.log(brand.branches);
	brand.exploded = true;
    }
    brand.contract = function(){
	for (var cereacle in brand.cereacles)
	    svg.removeChild(brand.cereacles[cereacle]);
	brand.exploded = false;
    }
    brand.hide = function(){
	svg.removeChild(brand);
	svg.removeChild(brand.line);
	svg.removeChild(brand.label);
    }
    brand.addEventListener("click",
			   function(){
			       if(brand.exploded) brand.contract();
			       else brand.explode();
			       attach_appear();
			   });

    return brand;
}
