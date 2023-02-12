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
//

async function getResponse() {
	let response = await fetch('https://63cb6c96f36cbbdfc769b8aa.mockapi.io/key')
	let content = await response.json()
	content = content.splice(0, 12)

	let list = document.querySelector('.box')
	let key

	for (key in content) {
		list.innerHTML += `<div class="box">
						<div class="image">
							<div class="img">
								<img class="wrap" src="${content[key].avatar}" alt="" />
							</div>
							<div class="overlay">
								<i class="far fa-search"></i>
								<i class="far fa-user"></i>
								<i class="far fa-heart"></i>
							</div>
						</div>
						<div class="text">
							<h4>${content[key].name}</h4>
							<h4><span>$${content[key].discount}</span> $${content[key].number}</h4>
						</div>
					</div>`
	}
}

getResponse()
