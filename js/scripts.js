console.log(document.getElementById('mainContentContain').offsetHeight + ((window.innerHeight/100)*37))

let f = {
	resize : () => {
		let h = document.getElementById('mainContentContain').offsetHeight + ((window.innerHeight/100)*40)

		console.log(`Height is ${h}`)

		console.log(document.getElementById('mainContain'))
		document.getElementById('mainContain').style.height = `${h+30} px`
	}
}


let h = {
	resize : window.addEventListener('resize', f.resize),
	load : document.body.onload = f.resize,

}
