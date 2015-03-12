
function Box (x, y, r, width, color, shadow_length) {
	this.half_size = width/2 || 50;
	this.x = x || c.width/2;
	this.y = y || c.height/2;
	this.r = r;
	this.shadow_length = shadow_length;
	this.color = color;
}

// Get points
Box.prototype.getPoints = function() {
	var full = (Math.PI * 2) / 4;

	return {
		p1: {
			x: this.x + this.half_size * Math.sin(this.r),
			y: this.y + this.half_size * Math.cos(this.r)
		},
		p2: {
			x: this.x + this.half_size * Math.sin(this.r + full),
			y: this.y + this.half_size * Math.cos(this.r + full)
		},
		p3: {
			x: this.x + this.half_size * Math.sin(this.r + full * 2),
			y: this.y + this.half_size * Math.cos(this.r + full * 2)
		},
		p4: {
			x: this.x + this.half_size * Math.sin(this.r + full * 3),
			y: this.y + this.half_size * Math.cos(this.r + full * 3)
		}
	}
};

// Draw box
Box.prototype.drawBox = function() {
	// To do
};

// Draw shadow
Box.prototype.drawShadow = function() {
	// To do
};

// Rotate
Box.prototype.rotate = function() {
	// To do
};

// Move
Box.prototype.move = function() {
	// To do
};