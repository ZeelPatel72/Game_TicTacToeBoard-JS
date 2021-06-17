var celli = document.querySelectorAll('#Cell')
var but = document.querySelector('button')
function checker(event) {
	if (this.textContent === '') {
		this.textContent = 'X'
	} else if (this.textContent === 'X') {
		this.textContent = 'O'
	} else {
		this.textContent = ''
	}
}
function clearer() {
	for (var i = 0; i < 9; i++) {
		celli[i].textContent = ''
	}
}
for (var i = 0; i < 9; i++) {
	celli[i].addEventListener('click', checker)
}
but.addEventListener('click', clearer)
