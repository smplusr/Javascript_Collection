class dummyPatch{
	constructor(pos, form, col, opt, type, name, index){
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
		this.option = {
			enableBackground: opt.back,
			collision: opt.coll,
			generalScale: opt.scale
		}
		this.debuffs = new String
		this.color = 'rgb(' + this.colObj.red + ', ' + this.colObj.green + ', ' + this.colObj.blue + ')'
		this.type = type
		this.name = name
		this.index = index
		this.slaves = new Array
		this.draw = GENERAL.prototype.draw
		this.collision = GENERAL.prototype.collision
		this.fireBuff = BUFFS.prototype.fireBuff
	}
	update(){
		if(this.option.enableBackground){this.draw()}
		if(this.slaves.length < rules.particles.patchParticleCount){this.particle()}
		if(this.option.collision == true){this.collision()}
		this.buffs()
	}
	buffs(){
		this.fireBuff()
	}
	setFire(){
		this.firetime = util.rng(120) + 60
		this.debuffs = 'infire'
	}
	particle(){	
		let objectTransform = {
			width: this.transform.width,
			height: this.transform.height
		}
		if(this.option.generalScale != undefined){
			objectTransform.width = this.option.generalScale
			objectTransform.height = this.option.generalScale
		}
		for(var i = 0; i < rules.particles.patchParticleCount; i++){
			let rngscale = Math.random() * 0.3 + 0.05
			this.slaves.push(
				new dummyPatchParticle(
					{
						x: this.position.x + (Math.random() * this.transform.width - (1/2 * this.transform.width * rngscale)),
						y: this.position.y + (Math.random() * this.transform.height - (1/2 * this.transform.height * rngscale))
					},
					{
						width: objectTransform.width * rngscale,
						height: objectTransform.height * rngscale
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

class dummyPatchParticle {
	constructor(pos, form, col, type, name, index, animate){
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
		this.draw = GENERAL.prototype.draw
	}
	update(){
		this.draw()
		this.colorate()
	}
	colorate(){
		this.color = 'rgb(' + String(this.brightness * this.colObj.red) + ', ' + String(this.brightness * this.colObj.green) + ', ' + String(this.brightness * this.colObj.blue) + ' )'
	}
}
