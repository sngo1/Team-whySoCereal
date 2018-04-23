// Team whySoCereal
// Samantha Ngo, Adam Abbas, Jawadul Kadir, Holden Higgins
// Softdev -- pd7
// P#01 - Viz
// 2018 April

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
    root.setAttribute("fill", "lightpink");
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
  var kell = document.getElementById("Kellog's");
  kell.addEventListener("click", kell_click);
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

var kell_click = function(){
  //console.log(cereobjs);
  for(cereal in cereobjs){
    if(cereobjs[cereal].brand = "Kellog's"){
    //console.log(cereobjs[cereal]);
      cereobjs[cereal].x = Math.random() * 500;
      cereobjs[cereal].y = Math.random() * 500;
      cereobjs[cereal].display();
    }
  }
}
