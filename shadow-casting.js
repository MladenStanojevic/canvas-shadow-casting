
function Box (x, y, r, width, color, shadow_length) {
	this.half_size = width/2 || 50;
	this.x = x || c.width/2;
	this.y = y || c.height/2;
	this.r = r;
	this.shadow_length = shadow_length;
	this.color = color;
}

// Get points
Box.prototype.get_points = function() {
	// To do
};

// Draw box
Box.prototype.draw_box = function() {
	// To do
};

// Draw shadow
Box.prototype.draw_shadow = function() {
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