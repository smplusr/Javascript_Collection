const item = {
	layout: new Array,
	layer: function(name){
		for(let i = 0; i < item.layout.length; i++){
			if((item.layout[i].name == name)){	
				console.log('WARNING:	layer: "' + name + '" already exist, overwriting')
				util.free(name)
			}
		}
		let layer = new Object()
		layer.name = name
		layer.content = new Array
		item.layout.push(layer)
		console.log('INFO:	layer: "' + name + '" created')	
		
	},
	stow: function(name, position){	
		for(var i = 0; i < item.layout.length; i++){
			if(item.layout[i].name == name){	
				console.log('INFO:	moved: "' + name + '" to position: "' + position + '"')
				if (position >= item.layout.length) {
					let j = position - item.layout.length + 1;
					while (j--) {
					item.layout.push(undefined);
					}
				}
				item.layout.splice(position, 0, item.layout.splice(i, 1)[0]);
			}
		}
	},
	free: function(name){
		for(let i = 0; i < item.layout.length; i++){
			if(item.layout[i].name == name){
				item.layout.splice(i, 1)
				console.log('INFO:	freed: "' + name + '"')
			}
		}
	},
	clear: function(obj, silent){
		for(var i = 0; i < item.layout.length; i++){
			for(var j = 0; j < item.layout[i].content.length; j++){	
				if(item.layout[i].content[j] === obj){
					if(!silent){
						console.log('INFO:	deleted: "' + item.layout[i].content[j].name + '"')
					}
					item.layout[i].content.splice(j, 1)
				}else{
					if(item.layout[i].content[j].slaves != undefined){
						for(var k = 0; k < item.layout[i].content[j].slaves.length; k++){
							if(item.layout[i].content[j].slaves[k] === obj){
								item.layout[i].content[j].slaves.splice(k, 1)
							}
						}
					}
				}
			}
		}

	},
	hierarchy(master){
		if(master.slaves != undefined){
			for(const slave of master.slaves){
				slave.update()
			}
		}
	}
}
