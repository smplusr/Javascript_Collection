let util = {	
	sleep: function(tick){
		return new Promise(resolve => setTimeout(resolve, tick))
	},
	rng: function(max){
		return Math.floor(Math.random() * Math.floor(max))
	},
	line: function(x1, y1, x2, y2, width, color){
		canvas.context.beginPath()
		canvas.context.strokeStyle = color
		canvas.context.lineWidth = width
		canvas.context.moveTo(x1, y1)
		canvas.context.lineTo(x2, y2)	
		canvas.context.stroke()
		canvas.context.closePath()
	},
	drawDebugRect(object, color){
		util.line(object.position.x, object.position.y, object.transform.width + object.position.x, object.position.y, 2, color)
		util.line(object.transform.width + object.position.x, object.position.y, object.transform.width + object.position.x, object.transform.height + object.position.y, 2, color)
		util.line(object.transform.width + object.position.x, object.transform.height + object.position.y, object.position.x, object.transform.height + object.position.y, 2, color)
		util.line(object.position.x, object.transform.height + object.position.y, object.position.x, object.position.y, 2, color)
		util.line(object.position.x, object.position.y, object.transform.width + object.position.x, object.transform.height +  object.position.y, 2, color)
		util.line(object.transform.width + object.position.x, object.position.y, object.position.x, object.transform.height +  object.position.y, 2, color)	
	},
	vectoryze: function(x1, y1, x2, y2){
		return {x: x1 - x2, y: y1 - y2}
	},
	collide(element) {
		if(util.center(element.first) != false && util.center(element.first) != false){
			let distance = {
				x: util.center(element.second).x - util.center(element.first).x,
				y: util.center(element.second).y - util.center(element.first).y
			}
			let average = {
				width: (element.second.transform.width + element.first.transform.width) * 0.5,
				height: (element.second.transform.height + element.first.transform.height) * 0.5
			}	
			if(Math.abs(distance.x) > average.width || Math.abs(distance.y) > average.height){return false}
			if(Math.abs(distance.x / element.first.transform.width) > Math.abs(distance.y / element.first.transform.height)){
				if(distance.x < 0){element.second.position.x = element.first.position.x - element.second.transform.width}
				if(distance.x > 0){element.second.position.x = element.first.position.x + element.first.transform.width}
			} else {
				if(distance.y < 0){element.second.position.y = element.first.position.y - element.second.transform.height}
				if(distance.y > 0){element.second.position.y = element.first.position.y + element.first.transform.height}
			}
			return true
		}
	},
	trigger(element){	
		let distance = {
			x: util.center(element.second).x - util.center(element.first).x,
			y: util.center(element.second).y - util.center(element.first).y
		}
		let average = {
			width: (element.second.transform.width + element.first.transform.width) * 0.5,
			height: (element.second.transform.height + element.first.transform.height) * 0.5
		}	
		if(Math.abs(distance.x) > average.width || Math.abs(distance.y) > average.height){
			return false
		}else{
			return true
		}
	},
	center(elem){
		if(elem.transform == undefined){
			return false
		}else{
			return {
				x: elem.position.x + elem.transform.width * 0.5,
				y: elem.position.y + elem.transform.height * 0.5
			}
		}
	},
	parseProperty(master, slave, property, mode){
		if(mode == 'absolute'){slave.property = master.property}
		if(mode == 'additive'){slave.property += master.property}
		if(mode == 'substract'){slave.property -= master.property}
		if(mode == 'multiply'){slave.property = slave.property * master.property}
		if(mode == 'divise'){slave.property = slave.property / master.property}
	}
}
