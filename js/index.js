// burger menu
let menuitem = document.getElementById('menuitem')
menuitem.style.maxHeight = '0px'

function menutoogle() {
	if (menuitem.style.maxHeight == '0px') {
		menuitem.style.maxHeight = '200px'
	} else {
		menuitem.style.maxHeight = '0px'
	}
}

// scrol navbar
window.addEventListener('scroll', function () {
	let header = document.querySelector('header')
	header.classList.toggle('sticky', window.scrollY > 50)
})
