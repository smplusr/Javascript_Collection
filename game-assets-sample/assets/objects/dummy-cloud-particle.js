class dummyCloudParticle{
	constructor(pos, form, col, type, name, life){
		this.color = col	
		this.name = name
		this.type = type
		this.flyspeed = 0.1
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
		this.slaves = new Array
		this.draw = GENERAL.prototype.draw
		this.live = PARTICLE.prototype.live
		this.move = PARTICLE.prototype.move
		this.fly = PARTICLE.prototype.fly
	}
	update(){
		this.draw()
		this.move()
		this.fly()
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
