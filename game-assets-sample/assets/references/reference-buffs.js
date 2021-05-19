class BUFFS {
	fireBuff(){	
		if(this.debuffs.search('infire') != -1){
			let rngscale = Math.random() + 1
			this.slaves.push(
				new dummyFireParticle(
					{
						x: this.position.x + (Math.random() * this.transform.width),
						y: this.position.y + (Math.random() * this.transform.height)
					},
					{
						width: rngscale * 10,
						height: rngscale * 10
					},
					'particle fire collider',
					'Dummy Fire Particle',
					util.rng(60)
				)
			)
		}
		if(this.firetime != undefined){	
			if(this.debuffs.search('infire') != -1){
				this.firetime -= 1
				if(this.firetime <= 0){
					this.debuffs = ''
				}
			}
		}
	}
}
