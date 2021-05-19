class dummyPlayer{
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
		this.speed = 5
		this.walkspeed = this.speed
		this.sprintspeed = this.walkspeed * 2
		this.slaves = new Array
		this.debuffs = ''
		this.collision = GENERAL.prototype.collision
		this.draw = GENERAL.prototype.draw
		this.fireBuff = BUFFS.prototype.fireBuff
		this.movement = PLAYER.prototype.movement
		this.mouseTrigger = PLAYER.prototype.mouseTrigger
	}
	update = function (){
		this.draw()
		this.mouseTrigger()
		this.movement()
		this.collision()
		this.buffs()
	}
	buffs = function (){
		this.fireBuff()
	}
	setFire = function(){
		this.firetime = util.rng(120) + 60
		this.debuffs = 'infire'
	}
	
}

