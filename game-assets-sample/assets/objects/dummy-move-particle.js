class dummyMoveParticle{
	constructor(pos, form, col, type, name, life){
		this.color = col	
		this.name = name
		this.type = type
		this.launched = false
		this.fallspeed = 0.025
		this.life = life
		this.time = 0
		this.brightness = 0
		this.color = col
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.velocity = {
			x: 0, 
			y: 0
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.friction = 0.8
		this.force = 25
		this.draw = GENERAL.prototype.draw
		this.launch = PARTICLE.prototype.launch
		this.decelerate = PARTICLE.prototype.decelerate
		this.move = PARTICLE.prototype.move
		this.fall = PARTICLE.prototype.fall
		this.live = PARTICLE.prototype.live

	}
	update(){
		this.draw()
		this.launch()
		this.decelerate()
		this.move()
		this.fall()
		this.live()
		this.colorate()	
	}
	colorate(){
		this.brightness += 1
		if(rules.translucent == true){
			this.color = 'rgba(255, 255, 255, ' + String(1/this.brightness) + ')'
		}else{
			this.color = 'white'
		}
	}
}
