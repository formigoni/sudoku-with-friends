var socket = io();

// Big numbers for placing answers.
var SVG_NUMS = [
	"",
	`<path class="su-number" d="M125.369 131.815H110.138V54H98.9231C89.7846 60.5077 84.3846 63.5538 74 68.4V81.5538L89.6462 77.6769V131.815H74V147.323H125.369V131.815Z"></path>`,
	`<path class="su-number" d="M134.815 128.985H95.7692C100.338 125.523 107.815 120.123 112.108 116.246C122.492 107.246 133.569 97.2769 133.569 80.8C133.569 60.5846 117.785 52 100.062 52C84.5539 52 71.2615 60.5846 66 78.3077L83.7231 83.9846C86.3538 73.6 92.1692 69.1692 99.6462 69.1692C108.092 69.1692 111.969 74.5692 111.969 81.7692C111.969 90.4923 107.262 98.9385 97.5692 107.246C93 111.262 88.4308 115.554 83.7231 119.431C78.8769 123.308 71.8154 128.708 66 134.523V146.292H134.815V128.985Z"></path>`,
	`<path class="su-number" d="M136.554 120.262C136.554 110.569 132.4 100.877 116.892 96.5846C129.631 93.1231 134.2 83.5692 134.2 75.6769C134.2 60.4462 119.523 52 101.8 52C85.8771 52 73.4155 60.5846 67.7386 73.4615L83.6617 80.5231C87.8155 71.2462 93.7694 67.7846 100.831 67.7846C109.139 67.7846 113.431 73.4615 113.431 78.5846C113.431 83.9846 110.523 91.1846 98.6155 91.1846H88.3694V106.415H99.5848C111.631 106.415 115.231 113.2 115.231 119.154C115.231 126.077 109.969 132.308 100 132.308C91.554 132.308 84.9078 128.569 80.2001 119.015L64.0001 126.354C71.754 142.138 83.9386 148.092 100 148.092C119.385 148.092 136.554 137.846 136.554 120.262Z"></path>`,
	`<path class="su-number" d="M137.323 110.354H122.508V54H103.262L62 111.6V126H102.846V147.185H122.508V126H137.323V110.354ZM79.8615 110.354L103.538 77.1231V110.354H79.8615Z"></path>`,
	`<path class="su-number" d="M134.2 115.781C134.2 97.7808 121.185 86.5654 103.046 86.5654C96.6769 86.5654 90.0308 88.6424 85.8769 90.7193L88.2308 71.3347H126.862L128.662 53.75H73L68.0154 99.8577L81.3077 108.719C86.5692 104.289 91.6923 102.627 97.6462 102.627C107.338 102.627 112.877 108.581 112.877 116.75C112.877 126.027 107.754 132.812 98.0615 132.812C89.4769 132.812 83.9385 128.104 80.0615 119.796L64 127.273C69.9538 139.458 80.4769 148.596 98.3385 148.596C119.246 148.596 134.2 134.612 134.2 115.781Z"></path>`,
	`<path class="su-number" d="M134.2 115.5C134.2 95.977 120.354 86.8385 105.539 86.8385C96.5386 86.8385 90.7232 90.7154 85.0463 93.9001C86.5694 73.2693 94.1847 68.1462 103.323 68.1462C109.692 68.1462 114.539 71.7462 117.169 78.2539L133.369 70.777C128.523 59.0077 118.969 52.5 104.708 52.5C76.6001 52.5 64.0001 76.177 64.0001 104.423C64.0001 131.7 79.6463 148.592 100.277 148.592C118.692 148.592 134.2 135.023 134.2 115.5ZM113.154 117.162C113.154 127.131 109.139 134.331 99.7232 134.331C90.3078 134.331 85.0463 125.331 85.0463 108.023C88.0924 105.808 93.9078 102.346 100 102.346C107.2 102.346 113.154 106.777 113.154 117.162Z"></path>`,
	`<path class="su-number" d="M135.231 55.0001H67.5231L66 72.8616H116.123C101.723 93.354 85.8 120.769 82.2 148.046H105.738C106.431 127.692 114.046 103.739 135.231 68.4309V55.0001Z"></path>`,
	`<path class="su-number" d="M134.892 121.677C134.892 110.6 128.8 102.569 117.169 97.5847C125.615 93.5693 131.569 86.0924 131.569 77.3693C131.569 63.1078 119.8 53.0001 99.5846 53.0001C79.6462 53.0001 66.9077 64.7693 66.9077 80.0001C66.9077 89.277 72.0308 96.7539 80.8923 101.323C70.0923 105.754 64 114.754 64 123.615C64 138.985 76.7385 149.369 99.1692 149.369C121.185 149.369 134.892 137.462 134.892 121.677ZM113.154 78.8924C113.154 84.9847 111.077 89.5539 104.292 92.4616C91.8308 88.1693 86.7077 84.2924 86.7077 77.6462C86.7077 71.6924 91.5539 67.2616 99.5846 67.2616C107.754 67.2616 113.154 72.6616 113.154 78.8924ZM114.4 123.892C114.4 130.677 108.862 135.385 99.1692 135.385C88.6462 135.385 82.9692 130.123 82.9692 122.092C82.9692 115.723 86.4308 110.877 93.7692 107.831C108.585 112.262 114.4 116.692 114.4 123.892Z"></path>`,
	`<path class="su-number" d="M134.455 97.1693C134.455 69.8924 119.502 53.0001 98.4554 53.0001C80.04 53.0001 64.2554 66.5693 64.2554 86.0924C64.2554 105.615 78.1015 114.754 92.9169 114.754C101.917 114.754 107.732 110.877 113.409 107.692C111.886 128.323 103.994 133.446 94.8554 133.446C88.4861 133.446 83.2246 128.877 81.0092 123.339L64.8092 130.815C69.6554 142.723 79.6246 149.092 93.8861 149.092C120.609 149.092 134.455 125.415 134.455 97.1693ZM113.409 93.5693C110.363 95.7847 104.548 99.2463 98.4554 99.2463C91.2554 99.2463 85.3015 94.8155 85.3015 84.4309C85.3015 74.4616 89.3169 67.2616 98.7323 67.2616C108.148 67.2616 113.409 76.2616 113.409 93.5693Z"></path>`,
];

// small numbers for candidates
var SVG_CND_NUMS = [
	``,
	`<path class="su-number" d="M124.492 139.856H104.846V53.9942H98.527C90.8337 60.3137 88.0862 62.6491 75.4473 69.2433V75.4254L96.4663 64.8472V139.856H75.4473V147H124.492V139.856Z"></path>`,
	`<path class="su-number" d="M130.201 139.032H79.3704C87.4758 132.026 98.6035 124.47 108.22 116.09C119.485 106.061 128.827 94.6585 128.827 81.0579C128.827 63.6107 117.15 52.8951 98.7409 52.8951C83.217 52.8951 71.4024 61.4127 66.8689 76.6618L75.3864 79.4094C78.4088 67.4574 86.9263 60.3136 98.4661 60.3136C111.38 60.3136 119.623 67.32 119.623 80.7831C119.623 93.422 110.006 104.138 98.1914 114.304C87.7506 123.233 75.5238 131.751 66.8689 140.543V147H130.201V139.032Z"></path>`,
	`<path class="su-number" d="M130.338 121.035C130.338 111.007 124.156 101.802 109.594 98.9172C120.996 95.208 127.453 87.24 127.453 76.9365C127.453 63.4734 117.012 52.8951 98.6034 52.8951C82.8047 52.8951 72.2265 62.3743 67.1435 73.0899L75.2489 76.387C78.6834 68.9685 86.3766 60.3136 98.466 60.3136C110.83 60.3136 118.111 67.7321 118.111 77.3487C118.111 87.24 110.693 95.8949 97.0922 95.8949H84.7281V103.313H98.466C115.776 103.313 120.996 111.693 120.996 120.898C120.996 133.812 110.83 141.23 96.5427 141.23C83.3543 141.23 75.5236 133.262 71.4023 125.294L63.2969 129.141C69.2042 140.543 78.8207 148.511 95.8558 148.511C118.249 148.511 130.338 136.284 130.338 121.035Z"></path>`,
	`<path class="su-number" d="M134.658 118.502H117.485V54.483H109.38L62.1213 120.7V125.783H109.929V149.687H117.485V125.783H134.658V118.502ZM71.8753 118.502L109.792 65.336V118.502H71.8753Z"></path>`,
	`<path class="su-number" d="M132.399 117.265C132.399 100.505 120.722 86.9045 101.214 86.9045C91.7346 86.9045 83.904 91.3007 78.4088 96.2463L82.1181 64.3743H127.865L128.69 56.6811H75.3865L70.9904 101.192L77.7219 105.451C82.6676 99.1313 91.0477 94.4604 100.527 94.4604C113.853 94.4604 123.195 102.978 123.195 117.815C123.195 131.553 113.99 143.093 97.642 143.093C84.3162 143.093 77.0351 134.163 73.7379 127.569L65.6326 131.553C70.7156 141.444 80.8817 150.511 96.8177 150.511C118.661 150.511 132.399 134.987 132.399 117.265Z"></path>`,
	`<path class="su-number" d="M133.223 117.952C133.223 101.329 121.271 88.8279 102.725 88.8279C91.1851 88.8279 82.9424 94.1857 75.2491 101.055C76.3482 78.9366 85.4152 62.3137 103.275 62.3137C114.677 62.3137 120.996 69.5948 124.019 76.189L131.987 72.4797C127.591 63.0006 118.524 54.8952 103.137 54.8952C81.706 54.8952 66.5942 73.9909 66.5942 105.726C66.5942 134.575 79.6453 150.511 100.527 150.511C118.111 150.511 133.223 136.911 133.223 117.952ZM124.019 118.09C124.019 132.789 114.54 143.093 100.39 143.093C87.3385 143.093 76.0734 132.514 75.2491 109.16C80.8817 103.665 89.5366 96.2464 102.588 96.2464C114.952 96.2464 124.019 105.176 124.019 118.09Z"></path>`,
	`<path class="su-number" d="M130.811 57.6811H65.1437L64.0447 65.3743H121.057C108.556 82.9589 87.1244 114.281 81.2171 150H90.8336C96.8783 108.924 119.134 79.387 130.811 63.451V57.6811Z"></path>`,
	`<path class="su-number" d="M132.399 126.508C132.399 114.831 125.53 106.588 111.38 101.78C123.194 97.3837 128.964 89.2783 128.964 79.2497C128.964 65.9239 118.111 55.8952 99.153 55.8952C79.5078 55.8952 68.6548 65.9239 68.6548 79.5244C68.6548 89.8279 75.249 97.7959 86.7889 101.642C72.3641 106.726 65.9072 115.518 65.9072 126.92C65.9072 141.345 77.1723 151.511 99.0156 151.511C120.309 151.511 132.399 140.796 132.399 126.508ZM119.897 78.5628C119.897 85.9812 118.111 93.6745 105.06 99.7192C83.6292 94.4988 77.7218 87.355 77.7218 78.9749C77.7218 70.5948 85.4151 63.0389 98.8783 63.0389C112.754 63.0389 119.897 69.7705 119.897 78.5628ZM123.194 126.233C123.194 136.262 114.677 144.23 99.153 144.23C83.3544 144.23 74.8369 137.498 74.8369 126.646C74.8369 117.304 78.9583 109.061 93.1083 104.527C115.913 108.924 123.194 117.441 123.194 126.233Z"></path>`,
	`<path class="su-number" d="M131.712 100.681C131.712 71.8312 118.661 55.8952 97.7793 55.8952C80.1947 55.8952 65.083 69.4957 65.083 88.4541C65.083 105.077 77.035 117.578 95.5812 117.578C107.121 117.578 115.364 112.221 123.057 105.352C121.958 127.47 112.891 144.093 95.0317 144.093C83.4918 144.093 77.3098 136.399 74.15 130.08L66.182 133.789C70.5782 143.131 79.6452 151.511 95.1691 151.511C116.6 151.511 131.712 132.415 131.712 100.681ZM123.057 97.2463C117.425 102.742 108.77 110.16 95.7186 110.16C83.3545 110.16 74.2874 101.23 74.2874 88.3167C74.2874 73.6171 83.7666 63.3137 97.9167 63.3137C110.968 63.3137 122.233 73.8919 123.057 97.2463Z"></path>`,
];

var NORMAL_MODE = 0;
var CANDIDATE_MODE = 1;
var MODE = NORMAL_MODE;

var TIMER;
var GAME_OVER = false;

var PLAYER_ID = '';

let INTERACTIONS = [
];

// Add 3x3 to interactions
for (let x = 0; x < 7; x+=3) {
	for (let y = 0; y < 7; y+=3) {
		let interaction = new Set();
		for (let x1 = 0; x1 < 3; x1++) {
			for (let y1 = 0; y1 < 3; y1++) {
				interaction.add(JSON.stringify({x: x+x1, y: y+y1}));
			}
		}
		INTERACTIONS.push(interaction);
	}
}

// Add row interactions
for (let x = 0; x < 9; x++) {
	let interaction = new Set();
	for (let y = 0; y < 9; y++) {
		interaction.add(JSON.stringify({x: x, y: y}));
	}
	INTERACTIONS.push(interaction);
}

// add column interactions
for (let y = 0; y < 9; y++) {
	let interaction = new Set();
	for (let x = 0; x < 9; x++) {
		interaction.add(JSON.stringify({x: x, y: y}));
	}
	INTERACTIONS.push(interaction);
}



function Cell(x, y, parent) {
	this.parent = parent;
	this.selected = false;
	this.prefilled = false;
	this.digit = 0;
	this.x = x;
	this.y = y;
	this.candidates = [];
	this.conflicts = [];
	this.other_players_selected = [];
}

Cell.prototype.add_conflict = function(cell) {
	if (!this.conflicts.includes(cell)) {
		this.conflicts.push(cell);
	}
	if (!cell.conflicts.includes(this)) {
		cell.conflicts.push(this);
	}
	document.getElementById(this.id()).classList.add("conflict");
	document.getElementById(cell.id()).classList.add("conflict");
}

Cell.prototype.remove_conflict = function(cell) {
	for (let i = 0; i < this.conflicts.length; i++) {
		if (this.conflicts[i].x == cell.x && this.conflicts[i].y == cell.y) {
			this.conflicts.splice(i, 1);
		}
	}
	if (this.conflicts.length == 0) {
		document.getElementById(this.id()).classList.remove("conflict");
	}

	for (let i = 0; i < cell.conflicts.length; i++) {
		if (cell.conflicts[i].x == this.x && cell.conflicts[i].y == this.y) {
			cell.conflicts.splice(i, 1);
			if (cell.conflicts.length == 0) {
				document.getElementById(cell.id()).classList.remove("conflict");
			}
		}
	}
}

Cell.prototype.remove_all_conflicts = function() {
	for (let i = this.conflicts.length - 1; i > -1; i--) {
		this.remove_conflict(this.conflicts[i]);
	}
}

Cell.prototype.id = function() {
	return `cell-${this.x}-${this.y}`;
}

Cell.prototype.svg_id = function() {
	return this.id() + '-svg_number';
}

Cell.prototype.svg_candidate_id = function(digit) {
	return this.id() + `-svg_candidate-${digit}`;
}

Cell.prototype.inner_svg = function() {
	return SVG_NUMS[this.digit];
}

Cell.prototype.element = function() {
	let cell = document.createElement("div");
	cell.classList.add("cell");
	if (this.selected)
		cell.classList.add("selected");
	if (this.digit !=0)
		cell.classList.add("filled");
	else
		cell.classList.add("empty");
	if (this.prefilled) 
		cell.classList.add("prefilled");

	let other_select = document.createElement("div");
	other_select.classList.add("other-select");
	other_select.id = this.id() + "-other-selected";
	cell.appendChild(other_select);
	let conflict = document.createElement("div");
	conflict.classList.add("conflict-icon");
	cell.appendChild(conflict);

	// render candidate buttons
	let candidates = document.createElement("div");
	let current_candidate_number = 1;
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			let svg_candidate_button = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			svg_candidate_button.id = this.svg_candidate_id(current_candidate_number);
			svg_candidate_button.innerHTML = SVG_CND_NUMS[current_candidate_number];	
			svg_candidate_button.classList.add("candidate_button");
			if (this.candidates.includes(current_candidate_number)) {
				svg_candidate_button.classList.add("active");
			}
			svg_candidate_button.setAttribute('viewBox', '0 0 200 200');
			svg_candidate_button.setAttribute("width", "3vmin");
			svg_candidate_button.setAttribute("height", "3vmin");
			let x_pos = `${col * 3.5}vmin`;
			let y_pos = `${row * 3.5}vmin`;
			svg_candidate_button.style['top'] = y_pos;
			svg_candidate_button.style['left'] = x_pos;
			
			let cell_obj = this;
			let _candidate_number = current_candidate_number;
			svg_candidate_button.addEventListener('click', function() {
				let data = {
					x: cell_obj.x,
					y: cell_obj.y,
					modify_candidate: {
						candidate: _candidate_number,
						remove: cell_obj.candidates.includes(_candidate_number),
					}
				};
				cell_obj.parent.update_cell(data);
				socket.emit('update cell', data);
			});

			candidates.appendChild(svg_candidate_button);
			current_candidate_number++;
		}
	}
	cell.appendChild(candidates);

	cell.id = this.id()
	let svg_number = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg_number.id = this.svg_id();
	svg_number.innerHTML = this.inner_svg();
	svg_number.setAttribute('viewBox', '0 0 200 200');
	svg_number.setAttribute('height', "100%");
	svg_number.setAttribute('width', "100%");
	svg_number.setAttribute('position', 'absolute');
	cell.appendChild(svg_number);
	let parent = this.parent;
	let cell_obj = this;
	cell.addEventListener('click', function() {
		parent.select_cell(cell_obj);
	});

	return cell;
}

function Grid(board) {
	this.cells = [];
	this.dirty_cells = [];
	this.digits_left = [0, 9, 9, 9, 9, 9, 9, 9, 9, 9];
	this.other_selected = new Map();
	for (let x = 0; x < 9; x++) {
		this.cells.push([]);
		for (let y = 0; y < 9; y++) {
			let cell = new Cell(x, y, this);
			cell.candidates = board.cells[x][y].candidates;
			cell.prefilled = board.cells[x][y].prefilled;
			cell.digit = board.cells[x][y].digit;
			this.digits_left[cell.digit] -= 1;
			this.digits_left[0] += 1;
			this.cells[x].push(cell);
			this.dirty_cells.push(cell);
		}
	}

	for (let row of this.cells) {
		for (let cell of row) {
			for (let interaction of INTERACTIONS) {
				if (interaction.has(JSON.stringify({x: cell.x, y: cell.y}))) {
					for (let pos_as_str of interaction) {
						let pos = JSON.parse(pos_as_str);
						if (cell.digit != 0 && cell.digit == this.cells[pos.x][pos.y] && !(cell.x == pos.x && cell.y == pos.y)) {
							if (!cell.conflicts.includes(this.cells[pos.x][pos.y])) {
								cell.add_conflict(this.cells[pos.x][pos.y]);
							}
							if (!this.cells[pos.x][pos.y].includes(cell)) {
								this.cells[pos.x][pos.y].add_conflict(cell);
							}
						}
					}
				}
			}
		}
	}

	this.selected_cell = this.cells[0][0];

	for (let i = 1; i < 10; i++) {
		if (this.digits_left[i] < 1) {
			document.getElementById(`keyboard-${i}`).classList.add("no_digits_left");
		}
	}

	if (!GAME_OVER && this.digits_left[0] == 81 && !this.conflicts_present()) {
		clearInterval(TIMER);
		let finished_checkmark = document.createElement("img");
		finished_checkmark.src = "/green-checkmark.svg";
		finished_checkmark.id = "finished-icon";
		document.getElementById("board").appendChild(finished_checkmark);
		GAME_OVER = true;
	}
} 

Grid.prototype.render = function() {
	for (let cell of this.dirty_cells) {
		if (document.getElementById(cell.id())) {
			document.getElementById("board").replaceChild(cell.element(), document.getElementById(cell.id()));
		} else {
			document.getElementById("board").appendChild(cell.element());
		}
	}
	this.dirt_cells = [];
}

Grid.prototype.set_dirty_and_render = function(cell) {
	this.dirt_cells.push(cell);
	this.render();
}


Grid.prototype.select_cell = function(cell) {
	if (this.selected_cell != cell) {
		document.getElementById(this.selected_cell.id()).classList.remove("selected");
		document.getElementById(cell.id()).classList.add("selected");
		this.selected_cell.selected = false;
		this.selected_cell = cell;
		cell.selected = true;
	}

	socket.emit('show selected', {
		pos: {x: this.selected_cell.x, y: this.selected_cell.y}
	});
}

// Called when the user enters a digit for a cell. 
// This will update the cell and broadcast the change to all other players.
Grid.prototype.set_digit = function(digit) {
	if (!this.selected_cell.prefilled) {
		let data = {
			x: this.selected_cell.x,
			y: this.selected_cell.y,
			digit: digit, 
		}
		this.update_cell(data);
		socket.emit('update cell', data);
	}
}

Grid.prototype.set_candidate = function(digit) {
	let data = {
		x: this.selected_cell.x,
		y: this.selected_cell.y,
		modify_candidate: {
			candidate: digit,
			remove: this.selected_cell.candidates.includes(digit),
		}
	};
	this.update_cell(data);
	socket.emit('update cell', data);
}

Grid.prototype.conflicts_present = function() {
	for (let row of this.cells) {
		for (let cell of row) {
			if (cell.conflicts.length > 0) {
				return true;
			}
		}
	}
	return false;
}

// Called whenever a cell changes, no matter where the change originated from.
// data only needs to contain the x, y, and changed properties of the cell.
Grid.prototype.update_cell = function(data) {
	let cell = this.cells[data.x][data.y];

	if (typeof data.digit != 'undefined') {
		if (cell.digit != data.digit) {
			this.digits_left[data.digit] -= 1;
			this.digits_left[cell.digit] += 1;
			if (this.digits_left[data.digit] < 1 && data.digit != 0) {
				document.getElementById(`keyboard-${data.digit}`).classList.add("no_digits_left");
			} else if (data.digit != 0) {
				document.getElementById(`keyboard-${data.digit}`).classList.remove("no_digits_left");
			}
			if (this.digits_left[cell.digit] < 1 && cell.digit !=0) {
				document.getElementById(`keyboard-${cell.digit}`).classList.add("no_digits_left");
			} else if (cell.digit != 0) {
				document.getElementById(`keyboard-${cell.digit}`).classList.remove("no_digits_left");
			}
			cell.digit = data.digit;
			document.getElementById(cell.svg_id()).innerHTML = SVG_NUMS[cell.digit];
			if (cell.digit == 0) {
				document.getElementById(cell.id()).classList.add("empty");
				document.getElementById(cell.id()).classList.remove("filled");
			} else {
				document.getElementById(cell.id()).classList.add("filled");
				document.getElementById(cell.id()).classList.remove("empty");
			}

			cell.remove_all_conflicts();
			for (let interaction of INTERACTIONS) {
				if (interaction.has(JSON.stringify({x: cell.x, y: cell.y}))) {
					for (let pos_as_str of interaction) {
						let pos = JSON.parse(pos_as_str);
						if (cell.digit != 0 && cell.digit == this.cells[pos.x][pos.y].digit && !(cell.x == pos.x && cell.y == pos.y)) {
							cell.add_conflict(this.cells[pos.x][pos.y]);
						}
					}
				}
			}

			if (!GAME_OVER && this.digits_left[0] == 81 && !this.conflicts_present()) {
				clearInterval(TIMER);
				let finished_checkmark = document.createElement("img");
				finished_checkmark.src = "/green-checkmark.svg";
				finished_checkmark.id = "finished-icon";
				document.getElementById("board").appendChild(finished_checkmark);
				GAME_OVER = true;
			}


		}
	}

	if (typeof data.modify_candidate != 'undefined') {
		if (data.modify_candidate.remove) {
			for (let i = 0; i < cell.candidates.length; i++) {
				if (cell.candidates[i] == data.modify_candidate.candidate) {
					cell.candidates.splice(i, 1);
					break;
				}
			}
			document.getElementById(cell.svg_candidate_id(data.modify_candidate.candidate)).classList.remove("active");
		}
		else {
			cell.candidates.push(data.modify_candidate.candidate);
			document.getElementById(cell.svg_candidate_id(data.modify_candidate.candidate)).classList.add("active");
		}
	}
	
}

Grid.prototype.show_selected = function(data) {
	let currently_selected = this.other_selected.get(data.color);
	if (currently_selected) {
		for (let i = 0; i < currently_selected.other_players_selected.length; i++) {
			if (currently_selected.other_players_selected[i] == data.color) {
				currently_selected.other_players_selected.splice(i, 1);
			}
		}
		if (currently_selected.other_players_selected.length == 0) {
			document.getElementById(currently_selected.id()).classList.remove("other-selected");
		}
	}

	this.other_selected.set(data.color, this.cells[data.pos.x][data.pos.y]);
	currently_selected = this.other_selected.get(data.color);
	currently_selected.other_players_selected.push(data.color);
	document.getElementById(this.other_selected.get(data.color).id()).classList.add("other-selected");
	document.getElementById(currently_selected.id() + '-other-selected').style.outline = `4px dashed ${data.color}8e`;

}

document.getElementById("create_new_room").addEventListener('click', function() {
	socket.emit("create new room", document.getElementById("sdk_input").value);
});

document.getElementById("join_room").addEventListener('click', function() {
	socket.emit("join room", document.getElementById("room_id_input").value);
});

if (window.location.pathname.startsWith("/room/")) {
	console.log(window.location.pathname.slice(6));
	socket.emit("join room", window.location.pathname.slice(6));
}

socket.on('time', function(timeString) {
	el = document.getElementById('server-time')
	el.innerHTML = 'Server time: ' + timeString;
  });
  
socket.on('set up board', board => {
	if (window.location.pathname.slice(6) != board.id.toString()) {
		window.history.pushState({}, null, `/room/${board.id}`);
	}

	// Transition
	document.body.style.opacity = 0;
	window.setTimeout( function() {
		let el = document.getElementById("lobby").lastChild;
		while (el) {
			el.remove();
			el = document.getElementById("lobby").lastChild;
		}
		document.getElementById("lobby-container").style.display = "none";
		let room_id = document.createElement("p");
		room_id.innerHTML = "Room ID: " + board.id;
		document.getElementById("game-id").appendChild( room_id);

		document.getElementById("game").style.display = "flex";
		document.getElementById("timer").style.display = "block";
		let startTime = Date.now();
		let timeStr = "";
		if (!GAME_OVER) {
			TIMER = setInterval(function() {
				let delta = Date.now() - startTime; // milliseconds elapsed since start
				let minutes = (delta / 1000)  / 60;
				let seconds = (delta/ 1000) % 60;
				let newTimeStr = Math.floor(minutes).toString().padStart(2, "0")+':'+Math.floor(seconds).toString().padStart(2, "0");
				if (newTimeStr != timeStr) {
					timeStr = newTimeStr;
					document.getElementById("timer-value").innerText = 'Time: ' + timeStr;
				}
			}, 100);
		}
		document.body.style.opacity = 1;

	}, 650);
	


	let grid = new Grid(board);
	grid.render();

	console.log(board);
	for (let player of board.players) {
		if (player.id != PLAYER_ID) {
			console.log(player);
			grid.show_selected({
				pos: player.currently_selected,
				color: player.color
			});
		}
	}

	document.addEventListener('keydown', function(event) {
		//console.log(event.code);
		let isNumpad = ((event.code == "Numpad1") ||
			(event.code == "Numpad2") ||
			(event.code == "Numpad3") ||
			(event.code == "Numpad4") ||
			(event.code == "Numpad5") ||
			(event.code == "Numpad6") ||
			(event.code == "Numpad7") ||
			(event.code == "Numpad8") ||
			(event.code == "Numpad9") ||
			(event.code == "Numpad0"));
		let f = ((MODE == NORMAL_MODE) && (!isNumpad)) ? grid.set_digit : grid.set_candidate;
		if ((event.code == "Digit1") || (event.code == "Numpad1"))
			f.call(grid, 1);
		else if ((event.code == "Digit2") || (event.code == "Numpad2"))
			f.call(grid, 2);
		else if ((event.code == "Digit3") || (event.code == "Numpad3"))
			f.call(grid, 3);
		else if ((event.code == "Digit4") || (event.code == "Numpad4"))
			f.call(grid, 4);
		else if ((event.code == "Digit5") || (event.code == "Numpad5"))
			f.call(grid, 5);
		else if ((event.code == "Digit6") || (event.code == "Numpad6"))
			f.call(grid, 6);
		else if ((event.code == "Digit7") || (event.code == "Numpad7"))
			f.call(grid, 7);
		else if ((event.code == "Digit8") || (event.code == "Numpad8"))
			f.call(grid, 8);
		else if ((event.code == "Digit9") || (event.code == "Numpad9"))
			f.call(grid, 9);
		else if (event.code == "Backspace" || event.code == "Delete")
			grid.set_digit(0);
		else if (event.code == "ArrowLeft") {
			grid.select_cell(grid.cells[grid.selected_cell.x][(((grid.selected_cell.y - 1) % 9) + 9) % 9]);
			event.preventDefault();
		}
		else if (event.code == "ArrowRight") {
			grid.select_cell(grid.cells[grid.selected_cell.x][(grid.selected_cell.y + 1) % 9]);
			event.preventDefault();
		}
		else if (event.code == "ArrowDown") {
			grid.select_cell(grid.cells[(grid.selected_cell.x + 1) % 9][grid.selected_cell.y]);
			event.preventDefault();
		}
		else if (event.code == "ArrowUp") {
			grid.select_cell(grid.cells[(((grid.selected_cell.x - 1) % 9) + 9) % 9][grid.selected_cell.y]);
			event.preventDefault();
		}
	});

	
	for (let pad_digit = 1; pad_digit < 10; pad_digit++) {
		document.getElementById(`keyboard-${pad_digit}`).addEventListener('click', function() {
			if (MODE == NORMAL_MODE) {
				grid.set_digit(pad_digit);
			} else {
				grid.set_candidate(pad_digit);
			}
		});
	}

	document.getElementById(`keyboard-delete`).addEventListener('click', function() {
		grid.set_digit(0);
	});
	
	document.getElementById(`keyboard-normal`).addEventListener('click', function() {
		MODE = NORMAL_MODE;
		document.getElementById('keyboard-normal').classList.add("normalMode");
		document.getElementById('keyboard-candidate').classList.remove("candidateMode");
		let key_pad_svgs = document.querySelectorAll(".su-keyboard__svg");
		for (let i = 0; i < key_pad_svgs.length; i++) {
			key_pad_svgs[i].classList.remove("keypad-candidate");
		}
	});
	document.getElementById(`keyboard-candidate`).addEventListener('click', function() {
		MODE = CANDIDATE_MODE;
		document.getElementById('keyboard-normal').classList.remove("normalMode");
		document.getElementById('keyboard-candidate').classList.add("candidateMode");
		let key_pad_svgs = document.querySelectorAll(".su-keyboard__svg");
		for (let i = 0; i < key_pad_svgs.length; i++) {
			key_pad_svgs[i].classList.add("keypad-candidate");
		}
	});

	socket.on('update cell', data => {
		grid.update_cell(data);
	});

	socket.on('show selected', data => {
		grid.show_selected(data);
	});
});

socket.on('room not found', function() {
	alert("Sorry, that room cannot be found.");
});

socket.on("room no longer available", function() {
	alert("Sorry, but the room is no longer available.");
});

socket.on('cant parse sdk', function() {
	alert("Cannot parse .sdk text into sudoku board.");
});

socket.on("your id is", function(id) {
	PLAYER_ID = id;
});


var frame = document.createElement("div");
frame.classList.add("board_frame");
frame.style['outline-width'] = '1vmin';
frame.id = "board_frame";
document.getElementById("board").appendChild(frame);
