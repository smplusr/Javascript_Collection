const system = {
	frame: {
		count: null,
		frameSpeedMult: null
	},
	dom: {
		head: undefined,
		body: undefined
	},	
	init: function(){
		console.log('INFO:	system started')
		util.sleep(100).then(() => {	
			system.dom.head = document.getElementsByTagName('head')[0]
			system.dom.body = document.getElementsByTagName('body')[0]
			system.load('canvas', 'canvas', null, system.dom.body)
			system.load('script', 'script-library', 'modules/library.js', system.dom.head)
			util.sleep(100).then(() => {
				canvas.init()
				system.loop()
			})
		})
	},
	loop: function(){
		requestAnimationFrame(system.loop)	
		system.frame.count++
		util.sleep(system.frame.count * (system.frame.frameSpeedMult * 1000)).then(() => {system.update()})
	},
	update(){
		if(canvas.dom.width != window.innerWidth || canvas.dom.height != window.innerHeight){canvas.rescale()}		
		canvas.refresh()
		debug.update()
	},
	load: function(type, id, src, dir){
		let element = document.createElement(type)
		element.id = id
		element.src = src
		dir.appendChild(element)
		console.log('INFO:	loading: "' + element.id + '"')
	},
	call: function(object, layerName, silent){
		if(!item.layout.some(layer => layer.name == layerName)){
			item.layer(layerName)
		}
		
		for(const layers of item.layout){
			if(layers.name == layerName){
				layers.content.push(object)
				if(!silent){
					console.log('INFO:	called: "' + object.name + '"')
				}
			}
		}
		return object
	}
}

window.onload = system.init()
