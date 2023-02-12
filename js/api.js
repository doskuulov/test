fetch('https://63cb6c96f36cbbdfc769b8aa.mockapi.io/key')
	.then(response => response.json())
	.then(data => {
		// обработать данные
		let output = ''
		data.forEach(function (data) {
			output += `
       <div class="box">
						<div class="image">
							<div class="img">
								<img class="wrap" src="${data.avatar}" alt="" />
							</div>
							<div class="overlay">
								<i class="far fa-search"></i>
								<i class="far fa-user"></i>
								<i class="far fa-heart"></i>
							</div>
						</div>
						<div class="text">
							<h4>${data.name}</h4>
							<h4><span>$${data.discount}</span> $${data.number}</h4>
						</div>
					</div>
      `
		})
		document.querySelector('.box-content').innerHTML = output
	})
	.catch(error => console.error(error))
