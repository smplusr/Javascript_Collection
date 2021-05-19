class dummyPushable{
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
		this.debuffs = new String
		this.draw = GENERAL.prototype.draw
		this.collision = GENERAL.prototype.collision
		this.mouseTrigger = PLAYER.prototype.mouseTrigger
		this.fireBuff = BUFFS.prototype.fireBuff
	}
	update(){
		this.draw()
		this.mouseTrigger()
		this.collision()
		this.buffs()
	}
	buffs(){
		this.fireBuff()
	}	
	setFire(){
		this.firetime = util.rng(120) + 60
		this.debuffs = 'infire'
	}
}
