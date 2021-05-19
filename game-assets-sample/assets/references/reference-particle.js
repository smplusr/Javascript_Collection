class PARTICLE{
	launch(){
		if(!this.launched){
			this.launched = true
			this.velocity.x = (Math.random() - 0.5) * (Math.random() * this.force)
			this.velocity.y = (Math.random() - 0.5) * (Math.random() * this.force)
		}
	}
	decelerate(){
		this.velocity.x = (this.velocity.x * this.friction) * rules.particles.momentumAdj
		this.velocity.y = (this.velocity.y * this.friction) * rules.particles.momentumAdj
	}
	move(){
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
	live(){
		if(this.life > 0){
			this.life -= 1
		}else{
			item.clear(this, true)
		}
	}
	fall(){
		this.time += 1
		this.position.y += (this.fallspeed * (this.time * 20)) * (this.transform.height / 10) * rules.particles.gravityAdj
	}
	fly(){
		this.time += 1
		this.velocity.y = -(this.flyspeed * (this.time * 10)) * (this.transform.height / 10) * rules.particles.gravityAdj
	}
}
