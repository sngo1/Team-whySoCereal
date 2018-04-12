var objs = //function to get the array of objects
var esveegee = document.getElementById("vimage");

var make_cereal = function(n, b, p, c, f, s, sd){
  var cereal = {
    name: n,
    brand: b,
    protein: p,
    carbs: c,
    fats: f,
    sugar: s,
    sodium: sd,
    x: 0;
    y: 0;
  };
  cereal.display = function(){
    esveegee.appendChild(cereal.circleObj);
  }
  cereal.createCirc = function(){
    var cereacle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cereacle.setAttribute("fill", "yellow");
    cereacle.setAttribute("r", 50);
    cereacle.setAttribute("cx", cereal.x);
    cereacle.setAttribute("cy", cereal.y);
    return cereacle;
  };
  cereal.circleObj = createCirc();
  cereal.hide = function(){
    esveegee.removeChild();
  };
}

var kell_click = function(){
  for(cereal in objs){
    if(cereal.brand = "Kellogs"){
      cereal.x = Math.random() * 700;
      cereal.y = Math.random() * 800;
      cereal.display();
    }
  }
}


var resize_protein = function(){
  for(cereal in objs){
    d3.select("#"+objs[cereal].name).data(objs[cereal].protein).attr("r", function(d){ d * 10 });

  }
