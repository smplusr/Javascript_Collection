function dummyFpsDebugger(pos, form, col, type, name, index){
	return {
		position: {
			x: pos.x,
			y: pos.y
		},
		transform: {
			width: form.width,
			height: form.height
		},
		index: index,
		name: name,
		type: type,
		color: col,
		slaves: new Array,
		frame: null,
		iteration: null,
		text: new String,
		drawText: GENERAL.prototype.drawText,
		update: function (){
			this.calculate()
			this.drawText()
		},
		calculate: function(){
			this.frame++
			util.sleep(1000 * this.iteration).then(() => {
				this.text = `fps: ${this.frame - 1}`
				this.frame = null
				this.iteration++
			})
		},
	}
}



