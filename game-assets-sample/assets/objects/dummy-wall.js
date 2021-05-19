class dummyWall{
	constructor(pos, form, col, type, name, index){	
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.index = index
		this.name = name
		this.type = type
		this.color = col
		this.slaves = new Array
		this.collision = GENERAL.prototype.collision
		this.mouseTrigger = PLAYER.prototype.mouseTrigger
		this.draw = GENERAL.prototype.draw
	}
	update(){
		this.draw()
		this.mouseTrigger()
		this.collision()	
	}

}

