class dummyFire{
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
			new dummyFireParticle(
				{
					x: this.position.x + (Math.random() * this.transform.width),
					y: this.position.y + (Math.random() * this.transform.height)
				},
				{
					width:  rngscale * 10,
					height:  rngscale * 10
				},
				'dummy particle fire collider', 
				'Dummy Fire Particle', 
				util.rng(60)
			)
		)	
	}
}

class dummyFireParticle{
	constructor(pos, form, type, name, life){
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
		this.color = null	
		this.name = name
		this.type = type
		this.launched = false
		this.flyspeed = 0.025
		this.life = life
		this.time = 0
		this.brightness = 0
		this.friction = 0.8
		this.force = 25
		this.draw = GENERAL.prototype.draw
		this.launch = PARTICLE.prototype.launch
		this.decelerate = PARTICLE.prototype.decelerate
		this.move = PARTICLE.prototype.move
		this.fly = PARTICLE.prototype.fly
		this.live = PARTICLE.prototype.live
	}
	update(){
		this.draw()
		this.launch()
		this.decelerate()
		this.move()
		this.fly()
		this.live()
		this.colorate()
		this.trigger()
	}

	colorate(){
		this.brightness += 10
		if(rules.translucent == true){
			this.color = 'rgba(255, ' + String(this.brightness) + ', ' + String(this.brightness / 2) + ', ' + String(this.brightness) + ')'
		}else{
			this.color = 'rgb(255, ' + String(this.brightness) + ', ' + String(this.brightness / 2) + ')'
		}
	}
	trigger(){
		for(var i = 0; i < item.layout.length; i++){
			for(var j = 0; j < item.layout[i].content.length; j++){
				if(util.trigger({first: this, second: item.layout[i].content[j]})){	
					if(item.layout[i].content[j].debuffs != undefined){
						if(item.layout[i].content[j].debuffs.search('infire') == -1 && item.layout[i].content[j].type.search('flamable') != -1){
							if(util.rng(100) == 0){
								item.layout[i].content[j].setFire()	
							}
						}
					}
				}
				for(var k = 0; k < item.layout[i].content[j].slaves.length; k++){
					if(util.trigger({first: this, second: item.layout[i].content[j].slaves[k]})){
						if(item.layout[i].content[j].slaves[k].type.search('water') != -1){item.clear(this)}	
					}
				}
			}
		}
	}
}
