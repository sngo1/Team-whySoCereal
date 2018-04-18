var svg = document.getElementById("vimage");

console.log(data);

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
    for (var cereal in data){
	if(data[cereal].brand == name[0]) brand.branches.push(data[cereal]);
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
    brand.display = function(){
	svg.appendChild(brand);
	svg.appendChild(brand.line);
    }
    brand.explode = function(){
	for(var branch in brand.branches){
	    //	    branch.display();
	    console.lo
	    console.log(brand.branches[branch]);
	}
	brand.exploded = true;
    }
    brand.hide = function(){
	svg.removeChild(brand);
	svg.removeChild(brand.line);
    }
    brand.addEventListener("click",
			   function(){
			       if(brand.exploded) brand.contract();
			       else brand.explode();
			       attach_appear();
			   });

    return brand;
}

var createRoot = function(){
    var root = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    )
    root.setAttribute("id", "root");
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

    root.addEventListener("click", function(){root.exploded?root.contract():root.explode()})
    return root;
}

var esveegee = document.getElementById("vimage");

var root = createRoot();

svg.appendChild(root);

var make_cereal = function(n, b, p, c, f, s, sd){
    var cereal = {
	name: n,
	brand: b,
	protein: p,
	carbs: c,
	fats: f,
	sugar: s,
	sodium: sd,
	x: 0,
	y: 0
    };
    cereal.createCirc = function(){
	var cereacle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	cereacle.setAttribute("fill", "yellow");
	cereacle.setAttribute("r", 50);
	cereacle.setAttribute("cx", cereal.x);
	cereacle.setAttribute("cy", cereal.y);
	return cereacle;
    };
    cereal.circleObj = cereal.createCirc();
    cereal.hide = function(){
	esveegee.removeChild();
    };
    cereal.display = function(){
	consolelog("display!!");
	esveegee.appendChild(cereal.circleObj);
    }
    return cereal;
}

var cerecereobjs = [];

for(entry in data){
  cereal = data[entry];
  cerecereobjs.push(make_cereal(cereal[0], cereal[1], cereal[4],cereal[8],cereal[5],cereal[9],cereal[6]));
}

var kell_click = function(){
  for(cereal in cereobjs){
    if(cereal.brand = "K"){
      cereal.x = Math.random() * 700;
      cereal.y = Math.random() * 800;
      cereal.display();
    }
  }
}

var attach_appear = function(){
  var kell = document.getElementById("Kellog's");
  kell.addEventListener("click", kell_click);
}


var resize_protein = function(){
  for(cereal in cereobjs){
    d3.select("#"+cereobjs[cereal].name).data(cereobjs[cereal].protein).attr("r", function(d){ Math.pow(d, .5) * 20 });
  }
}
/*
var protein = document.getElementById("protein");
protein.addEventListener("click", resize_protein);

var resize_carbs = function(){
  for(cereal in cereobjs){
    d3.select("#"+cereobjs[cereal].name).data(cereobjs[cereal].carbs).attr("r", function(d){ Math.pow(d, .5) * 20});
  }
}

var carbs = document.getElementById("carbs");
carbs.addEventListener("click", resize_carbs);

var resize_fats = function(){
  for(cereal in cereobjs){
    d3.select("#"+cereobjs[cereal].name).data(cereobjs[cereal].fats).attr("r", function(d){ Math.pow(d, .5) * 20});
  }
}

var fats = document.getElementById("fats");
fats.addEventListener("click", resize_fats);
*/

console.log(cerecereobjs);
