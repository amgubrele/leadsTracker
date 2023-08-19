

//  simple click method  function savelead()
//  simple click method  {
//  simple click method  	console.log("yoo")
//  simple click method  } 


let myleads=[]


const inputel=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulel=document.getElementById("ul-el")
const delbtn=document.getElementById("del-btn")
const tabbtn=document.getElementById("tab-btn")

const leadsfromlocalstorage = JSON.parse( localStorage.getItem("myleads"))




 if(leadsfromlocalstorage){
 	myleads=leadsfromlocalstorage
 	render(myleads)
 }

 const tabs=[

 	{url:"www.html.com"}



 	]


 tabbtn.addEventListener("click",function(){


 	chrome.tabs.query({active:true , currentWindow:true},function(tabs){
 		myleads.push(tabs[0].url)
 	localStorage.setItem("myleads",JSON.stringify(myleads))
 	render(myleads)



 	})
 	
 	
 })








 function render(leads)
{
	let listitems=""
	for(let i=0;i<leads.length;++i)
	{
		// listitems+="<li> <a target='_blank' href='"+myleads[i]+"'>"+myleads[i]+ "</a></li>"


		//template string
		listitems += `
		<li>
		<a target='_blank' href='${leads[i]}'>${leads[i]}</a>            
		</li>
		`
	}
	ulel.innerHTML=listitems
}



s=delbtn.addEventListener("dblclick",function(){
	
	localStorage.clear()
	myleads=[]
	
	render(myleads)


})




inputbtn.addEventListener("click",function(){
	myleads.push(inputel.value)
    inputel.value=""
	 localStorage.setItem("myleads",JSON.stringify(myleads))
	
	render(myleads)

})



