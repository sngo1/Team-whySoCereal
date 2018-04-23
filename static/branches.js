// Team whySoCereal
// Samantha Ngo, Adam Abbas, Jawadul Kadir, Holden Higgins
// Softdev -- pd7
// P#01 - Viz
// 2018 April

var svg = document.getElementById("vimage");

//console.log(data);

var root = createRoot();

//svg.appendChild(root);

//console.log(cereals);

function ticked(){
	svg.innerHTML = '';
	// console.log("tick");
	var u = d3.select('svg')
	.selectAll('circle')
	.data(nodes)

	u.enter()
	.append('circle')
	.attr('r', function(d, i){
		if(d.type == "root"){
			return 50;
		}
		else if(d.type == "brand"){
			return 10;
		}
		else return d.protein;
	})
	.attr('fill','orange')
	.merge(u)
	.attr('cx', function(d) {
		return d.x
	})
	.attr('cy', function(d) {
		return d.y
	})

	u.exit().remove()
}

var nodes = [root];
var links = [];
for (var branch in root.branches){
	nodes.push(root.branches[branch]);
	links.push({source: root, target: root.branches[branch]});
	for(var cereal in root.branches[branch].branches){
		nodes.push(root.branches[branch].branches[cereal]);
		links.push({source: root.branches[branch], target: root.branches[branch].branches[cereal]});
	}
}

var simulation = d3.forceSimulation(nodes);

simulation.force('charge', d3.forceManyBody())
	.force('center', d3.forceCenter(500, 500))
	.force('link', d3.forceLink(links))
	.force('collision', d3.forceCollide().radius(function(d) {
		return d.radius
	}))
	.on('tick', ticked);

console.log(nodes);