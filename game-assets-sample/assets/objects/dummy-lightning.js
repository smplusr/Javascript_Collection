class dummyLightning{
	constructor(pos, form, type, name){
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.type = type
		this.name = name
		this.slaves = new Array
		this.boltCount = 0
		if(util.rng(2) == 1){
			this.reBlight = true
		}else{
			this.reblight = false
		}
		this.smallWidth = 0.25
		this.blightWidth = 3
		this.fadeSpeed = 0.30 * Math.random() + 0.025
		this.time = 500
	}
	update(){
		this.draw()
		this.timer()
		if(this.slaves.length < 10){
			this.tracer()	
		}
	}
	timer(){
		this.time -= 1
		if(this.time <= 0){
			item.clear(this, true)
		}
	}
	draw(){
		for(const bolt of this.slaves){
			bolt.draw()
			if(this.slaves.length > 9){bolt.fadeout()}
		}
	}
	tracer(){
		if(this.boltCount == 9){
			this.slaves.push(
				new dummyLightningBolt(
					{
						start: {
							x: this.slaves[this.boltCount - 1].position.end.x,
							y: this.slaves[this.boltCount - 1].position.end.y
						},
						end: {

							x: this.slaves[this.boltCount - 1].position.end.x + (Math.random() - 0.5) * 50,
							y: this.slaves[this.boltCount - 1].position.end.y + 50
						}
					},
					this.smallWidth,
					this.reBlight,
					this.blightWidth,
					this.fadeSpeed,
					'dummy lightningbolt',
					'Dummy LightningBolt',
					true
				)
			)
		}
		if(this.boltCount > 0 && this.boltCount < 9){
			this.slaves.push(
				new dummyLightningBolt(
					{
						start: {
							x: this.slaves[this.boltCount - 1].position.end.x,
							y: this.slaves[this.boltCount - 1].position.end.y
						},
						end: {

							x: this.slaves[this.boltCount - 1].position.end.x + (Math.random() - 0.5) * 50,
							y: this.slaves[this.boltCount - 1].position.end.y + 50
						}
					},
					this.smallWidth,
					this.reBlight,
					this.blightWidth,
					this.fadeSpeed,
					'dummy lightningbolt',
					'Dummy LightningBolt',
					false
				)
			)
		}
		else{
			this.slaves.push(
				new dummyLightningBolt(
					{
						start: {
							x: this.position.x,
							y: this.position.y
						},
						end: {
							x: this.position.x + (Math.random() - 0.5) * 50,
							y: this.position.y + 50
						}
					},
					this.smallWidth,
					this.reBlight,
					this.blightWidth,
					this.fadeSpeed,
					'dummy lightningbolt',
					'Dummy LightningBolt',
					false
				)		
			)
		}
		this.boltCount += 1
	}
	
}



class dummyLightningBolt{
	constructor(pos, light, blight, width, fadeSpeed, type, name, last){
		this.position = {
			start: {
				x: pos.start.x,
				y: pos.start.y
			},
			end: {
				x: pos.end.x,
				y: pos.end.y
			},
			x: null,
			y: null
		}
		this.transform = {
			width: null,
			height: null
		}
		this.last = last
		this.width = light
		this.type = type
		this.name = name
		this.reBlight = blight
		this.blast = false
		this.blightWidth = width
		this.fadeSpeed = fadeSpeed
		this.calledParticle = false
		this.slaves = new Array
	}
	update(){}
	draw(){
		if(this.width > 0){util.line(this.position.start.x, this.position.start.y, this.position.end.x, this.position.end.y, this.width, 'white')}
		if(this.last == true && !this.calledParticle){	
			this.calledParticle = true
			for(let i = 0; i < util.rng(32) + 1; i++){
				this.rng = Math.random() * 12 + 1
				system.call(
					new dummyLightningParticle(
						{
							x: this.position.end.x,
							y: this.position.end.y
						},
						{
							width: this.rng,
							height: this.rng
						},
						'white',
						'dummy lightning particle',
						'Dummy Lightning Particle'
					),
					'layer-dummy',
					true
				)
			}
			system.call(
				new dummyLightningFlash(
					'dummy lightning flash screeneffect',
					'Dummy Lightning Flash',
					0.12 * Math.random() + 0.02
					
				),
				'layer-screen-effect', 
				true
			)
		}
	}
	fadeout(){
		if(this.reBlight && this.blast && this.width < 0 && this.fadeSpeed > 0.15){
			this.blast = false
			this.reBlight = 0
		}
		if(!this.blast){	
			this.width = this.blightWidth
			this.blast = true
		}
		this.width -= this.fadeSpeed
	}
}

class dummyLightningParticle{
	constructor(pos, form, type, name){
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.velocity = {
			x: 0,
			y: 0
		} 
		this.type = type
		this.name = name
		this.launched = false
		this.life = util.rng(60) + 15
		this.color = 'white'
		this.slaves = new Array
		this.force = 25
		this.friction = 0.85
		this.draw = GENERAL.prototype.draw
		this.live = PARTICLE.prototype.live
		this.decelerate = PARTICLE.prototype.decelerate
		this.move = PARTICLE.prototype.move
		this.launch = PARTICLE.prototype.launch
	}
	colorate(){
		this.brightness += 1
		if(rules.translucent == true){
			this.color = 'rgba(255, 255, 255, ' + String(1/this.brightness) + ')'
		}else{
			this.color = 'white'
		}
	}
	update(){
		this.draw()
		this.launch()	
		this.decelerate()
		this.move()
		this.live()
		this.colorate()	
	}
}

class dummyLightningFlash{
	constructor(type, name, fadespeed){
		this.position = {
			x: 0, 
			y: 0
		}
		this.transform = {
			width: window.innerWidth,
			height: window.innerHeight
		}
		this.fadeSpeed = fadespeed
		this.color = 'rgba(255, 255, 255, 0)'
		this.brightness = 1
		this.type = type
		this.name = name
		this.slaves = new Array
	}
	update(){
		this.draw()
		this.fade()
		this.destroy()
	}
	draw(){
		canvas.context.beginPath();
		canvas.context.fillStyle = this.color;
		canvas.context.fillRect(0, 0, window.innerWidth, window.innerHeight)
		canvas.context.closePath();
	}
	fade(){
		this.brightness -= this.fadeSpeed
		this.color = 'rgba(255, 255, 255, ' + String(this.brightness) + ')'
	}
	destroy(){
		if(this.brightness < 0){
			item.clear(this, true)
		}
	}
}
