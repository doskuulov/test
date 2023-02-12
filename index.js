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
fetch('https://63cb6c96f36cbbdfc769b8aa.mockapi.io/key')
	.then(response => response.json())
	.then(data => {
		// обработать данные
		let output = ''
		data.forEach(function (data) {
			output += `
        <div class="image">
				<div class="img">
					<img class="wrap" src="${data.avatar}" alt="" />
				</div>
			<div class="text">
					<h4>${data.name}</h4>
					<h4><span>$${data.number} </span> $${data.discount}</h4>
			</div>
		</div>
      `
		})
		document.querySelector('.box').innerHTML = output
	})
	.catch(error => console.error(error))
