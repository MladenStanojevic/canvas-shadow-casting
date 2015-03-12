
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
	var dots = this.getPoints();
	ctx.beginPath();
	ctx.moveTo(dots.p1.x, dots.p1.y);
	ctx.lineTo(dots.p2.x, dots.p2.y);
	ctx.lineTo(dots.p3.x, dots.p3.y);
	ctx.lineTo(dots.p4.x, dots.p4.y);
	ctx.fillStyle = this.color;
	ctx.fill();
};

// Draw shadow
Box.prototype.drawShadow = function() {
	var dots = this.getPoints();
	var angles = [];
	var points = [];

	for (dot in dots) {
		var angle = Math.atan2(0 - dots[dot].y, 0 - dots[dot].x);
		var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
		var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
		angles.push(angle);
		points.push({
			endX: endX,
			endY: endY,
			startX: dots[dot].x,
			startY: dots[dot].y
		});
	};

	for (var i = points.length - 1; i >= 0; i--) {
		var n = i == 3 ? 0 : i + 1;
		ctx.beginPath();
		ctx.moveTo(points[i].startX, points[i].startY);
		ctx.lineTo(points[n].startX, points[n].startY);
		ctx.lineTo(points[n].endX, points[n].endY);
		ctx.lineTo(points[i].endX, points[i].endY);
		ctx.fillStyle = "#2c343f";
		ctx.fill();
	};
};

// Rotate
Box.prototype.rotate = function() {
	// To do
};

// Move
Box.prototype.move = function() {
	// To do
};