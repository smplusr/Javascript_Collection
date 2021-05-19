class dummyWater{
	constructor(pos, form, time, type, name){
		this.position = {
			x: pos.x, 
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.duration = time
		this.type = type
		this.name = name
		this.slaves = new Array
	}
	update(){
		if(this.duration > 0){
			this.particle()
		}else{
			item.clear(this)
		}
		this.duration -= 1
	}	
	particle(){
		let rngscale = Math.random() + 1
		this.slaves.push(
			new dummyWaterParticle(
				{
					x: this.position.x + (Math.random() * this.transform.width),
					y: this.position.y + (Math.random() * this.transform.height)
				},
				{
					width:  rngscale * 10,
					height:  rngscale * 10
				},
				'blue',
				'particle water collider', 
				'Dummy Water Particle', 
				util.rng(60)
			)
		)
	}
}

class dummyWaterParticle{
	constructor(pos, form, col, type, name, life){
		this.color = col	
		this.name = name
		this.type = type
		this.launched = false
		this.fallspeed = 0.015
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
		this.force = 25
		this.friction = 0.85
		this.draw = GENERAL.prototype.draw
		this.live = PARTICLE.prototype.live
		this.decelerate = PARTICLE.prototype.decelerate
		this.move = PARTICLE.prototype.move
		this.launch = PARTICLE.prototype.launch
		this.fall = PARTICLE.prototype.fall
	}
	update(){
		this.draw()
		this.launch()
		this.decelerate()
		this.move()
		this.fall()
		this.live()
		this.colorate()
		this.trigger()	
	}
	
	colorate(){
		this.brightness += 5
		if(rules.translucent == true){
			this.color = 'rgba(0, 0, 255, ' + String(1/this.brightness) + ')'
		}else{
			this.color = 'rgb(' + String(this.brightness) + ', ' + String(this.brightness) + ', 255)'
		}
	}
	trigger(){
		for(var i = 0; i < item.layout.length; i++){
			for(var j = 0; j < item.layout[i].content.length; j++){
				for(var k = 0; k < item.layout[i].content[j].slaves.length; k++){
					if(util.trigger({first: this, second: item.layout[i].content[j].slaves[k]})){
						if(item.layout[i].content[j].slaves[k].type.search('particle fire') != -1){
							this.vaporize()
						}
					}
				}
				if(item.layout[i].content[j].debuffs != undefined){
					if(item.layout[i].content[j].debuffs.search('infire') != -1){
						if(util.trigger({first: this, second: item.layout[i].content[j]})){
							if(util.rng(100) === 0){
								item.layout[i].content[j].debuffs = ''
							}
						}
					}
				}
			}
		}	
	}
	vaporize(){	
		system.call(
			new dummyCloudParticle(
				{
					x: this.position.x,
					y: this.position.y
				},
				{
					width: this.transform.width,
					height: this.transform.height
				},
				'white',
				'dummy particle cloud collider',
				'Dummy Cloud Particle',
				util.rng(15)
			),
			'layer-dummy-particle',
			'true'
		)
		if(util.rng(10) === 0){
			item.clear(this)
		}
	}
}
