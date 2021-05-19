/* WARNING: Require rules system, and rules.debugging propriety */
// System will wait 1000 ms before loading this script
debug = {
	update(){
		if(rules === undefined){
			console.log('WARNING: No rules detected, debugging functions untargettable')
		}else{
			this.collDebugging()
		}
	},
	collDebugging(){
		if(rules.debugging.enableCollDebugging == true){
			for(var i = 0; i < item.layout.length; i++){
				for(var j = 0; j < item.layout[i].content.length; j++){
					//if(item.layout[i].content[j].type.search('collider') != -1 || item.layout[i].content[j].type.search('static') != -1 || item.layout[i].content[j].type.search('trigger') != -1){
					if(item.layout[i].content[j].collision != undefined || 
					item.layout[i].content[j].type.search('collider') != -1 || 
					item.layout[i].content[j].type.search('static') != -1 || 
					item.layout[i].content[j].type.search('trigger') != -1){	
						util.drawDebugRect(item.layout[i].content[j], 'red')	
					}
					for(var k = 0; k < item.layout[i].content[j].children.length; k++){
						if(item.layout[i].content[j].children[k].type.search('collider') != -1){
							util.drawDebugRect(item.layout[i].content[j].children[k], 'red')
						}	
					}
				}
			}
		}
	}
}
