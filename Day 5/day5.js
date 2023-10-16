const loadtext=document.querySelector(".loading-text")
const bg=document.querySelector(".bg")

let load=0
let int=setInterval(blurs,30)

function blurs(){
	load++
	if(load>99){
		clearInterval(int)
	}
	loadtext.innerText=`${load}%`
	loadtext.style.opacity=scale(load,0,100,1,0)
	bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}



// This is a utility function called scale. It takes in a number (num) and maps it from an input range (in_min to in_max) to an output range (out_min to out_max). This function is used to adjust the opacity and blur effect based on the loading progress.


