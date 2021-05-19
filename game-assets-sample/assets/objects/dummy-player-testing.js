function dummyPlayerTesting(pos, form, col, type, name, index){
	return {
		position: {
			x: pos.x,
			y: pos.y
		},
		transform: {
			width: form.width,
			height: form.height
		},
		index: index,
		name: name,
		type: type,
		color: col,
		speed: rules.player.speed,
		walkspeed: rules.player.walkspeed,
		sprintspeed: rules.player.sprintspeed,
		slaves: new Array,
		debuffs: new String,
		collision: GENERAL.prototype.collision,
		draw: GENERAL.prototype.draw,
		fireBuff: BUFFS.prototype.fireBuff,
		movement: PLAYER.prototype.movement,
		mouseTrigger: PLAYER.prototype.mouseTrigger,
		update: function (){
			this.draw()
			this.mouseTrigger()
			this.movement()
			this.collision()
			this.buffs()
	},
		buffs: function (){
			this.fireBuff()
		},
		setFire: function(){
			this.firetime = util.rng(120) + 60
			this.debuffs = 'infire'
		}
	}
}

