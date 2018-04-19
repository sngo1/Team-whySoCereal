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
	svg.removeChild();
    };
    cereal.display = function(){
	consolelog("display!!");
	svg.appendChild(cereal.circleObj);
    }
    return cereal;
}

var cereals = [];

for(entry in data){
  cereal = data[entry];
  cereals.push(make_cereal(cereal[0], cereal[1], cereal[4],cereal[8],cereal[5],cereal[9],cereal[6]));
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
