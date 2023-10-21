const j=document.getElementById('joke')
const jb=document.getElementById('jokebtn')
jb.addEventListener('click',makeJoke)

makeJoke()
async function makeJoke(){
	const config={
		headers:{
			Accept:'application/json',
		},
	}
	const res=await fetch('https://icanhazdadjoke.com', config)
	const data=await res.json()
	j.innerHTML=data.joke

}
