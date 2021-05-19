class GENERAL {
	draw(){
		canvas.context.beginPath();
		canvas.context.fillStyle = this.color;
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height)
		canvas.context.closePath();
	}
	drawText(){
		canvas.context.fillStyle = this.color;
		canvas.context.font = `${this.transform.height}px Arial`
		canvas.context.fillText(this.text, this.position.x, this.position.y)
	}
	collision(){
		for(var i = 0; i < item.layout.length; i++){
			for(var j = 0; j < item.layout[i].content.length; j++){				
				if(item.layout[i].content[j].type.search('collider') != -1 && item.layout[i].content[j] != this){
					for(const child of this.slaves){
						if(item.layout[i].content[j] != child){
							util.collide({first: this, second: item.layout[i].content[j]})
						}
					}
					if(this.slaves[0] == undefined){
						util.collide({first: this, second: item.layout[i].content[j]})
					}
				}
				if(item.layout[i].content[j].slaves != undefined){
					for(var k = 0; k < item.layout[i].content[j].slaves.length; k++){	
						if(item.layout[i].content[j].slaves[k] != this.slaves[k]){
							if(item.layout[i].content[j].slaves[k].type.search('collider') != -1){
								util.collide({first: this, second: item.layout[i].content[j].slaves[k]})
							}
						}
					}
				}
			}
		}
	}
}
