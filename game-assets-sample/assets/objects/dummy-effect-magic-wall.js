class dummyEffectMagicWall{
	constructor(pos, form, col, type, name, index){
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.colObj = {
			red: col.r,
			green: col.g,
			blue: col.b
		}
		this.color = 'rgb(' + this.colObj.red + ', ' + this.colObj.green + ', ' + this.colObj.blue + ')'
		this.type = type
		this.name = name
		this.index = index
		this.slaves = new Array
		this.collision = GENERAL.prototype.collision
	}
	update(){
		if(this.slaves.length < rules.particles.patchParticleCount){this.particle()}
		if(this.type.search('static') != -1 || this.type.search('collision') != -1){this.collision()}
	}
	particle(){		
		for(var i = 0; i < rules.particles.patchParticleCount; i++){
			let rngscale = Math.random() * 0.3 + 0.05
			this.slaves.push(
				new dummyMagicWallParticle(
					{
						x: this.position.x + (Math.random() * this.transform.width - (1/2 * this.transform.width * rngscale)),
						y: this.position.y + (Math.random() * this.transform.height - (1/2 * this.transform.height * rngscale))
					},
					{
						width: this.transform.width * rngscale,
						height: this.transform.height * rngscale
					},
					{
						r: this.colObj.red,
						g: this.colObj.green,
						b: this.colObj.blue
					},
					'dummy path particle',
					'Dummy Path Particle',
					util.rng(2**31)
				)
			)
		}
	}
}

class dummyMagicWallParticle {
	constructor(pos, form, col, type, name, index){
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.colObj = {
			red: col.r,
			green: col.g, 
			blue: col.b
		}
		this.velocity = {
			x: 0, 
			y: 0
		}
		this.brightness = Math.random() * 2
		this.type = type
		this.name = name
		this.index = index	
		this.life = util.rng(120)
		this.force = 2
		this.friction = 0.975
		this.transparency = 0
		this.draw = GENERAL.prototype.draw
		this.live = PARTICLE.prototype.live
		this.decelerate = PARTICLE.prototype.decelerate
		this.move = PARTICLE.prototype.move
		this.launch = PARTICLE.prototype.launch
	}
	update(){
		this.draw()
		this.launch()	
		this.decelerate()
		this.move()
		this.live()
		this.colorate()
	}
	colorate(){
		if(rules.particles.translucent == true){
			this.transparency += 0.1 
			this.color = 'rgba(' + String(this.brightness * this.colObj.red) + ', ' + String(this.brightness * this.colObj.green) + ', ' + String(this.brightness * this.colObj.blue) + ', ' + String(1/this.transparency) + ')'
		}else{
			this.color = 'rgb(' + String(this.brightness * this.colObj.red) + ', ' + String(this.brightness * this.colObj.green) + ', ' + String(this.brightness * this.colObj.blue) + ' )'
		}
	}
}
