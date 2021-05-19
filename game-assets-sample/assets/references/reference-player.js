class PLAYER{
	mouseTrigger(){
		if(input.mouse.position.x - this.position.x - this.transform.width/2 < this.transform.width/2 && input.mouse.position.x - this.position.x - this.transform.width/2 > -this.transform.width/2 && input.mouse.position.y - this.position.y - this.transform.height/2 < this.transform.height/2 && input.mouse.position.y - this.position.y - this.transform.height/2 > -this.transform.height/2 ){
			if(input.mouse.button.includes(0)){
				this.position.x = input.mouse.position.x - this.transform.width/2
				this.position.y = input.mouse.position.y - this.transform.height/2
			}	
		}
	}
	movement(){	
		if(input.keyboard.key.includes(37)){this.position.x -= this.speed}
		if(input.keyboard.key.includes(38)){this.position.y -= this.speed}
		if(input.keyboard.key.includes(39)){this.position.x += this.speed}
		if(input.keyboard.key.includes(40)){this.position.y += this.speed}
		if(input.keyboard.key.includes(16)){
			this.speed = this.sprintspeed
			this.slaves.push(
				new dummyMoveParticle(
					{
						x: this.position.x + ((this.transform.width) * Math.random()), 
						y: this.position.y + this.transform.height
					},
					{
						width: 10 * (this.transform.width / 100),
						height: 10 * (this.transform.height / 100)
					},
					'white', 
					'dummy particle collider', 
					'Dummy Move Particle', 
					util.rng(15)
				)
			)
		}else{this.speed = this.walkspeed}
	}
}
