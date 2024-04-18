//your JS code here. If required.
let input=document.getElementById("fname");
input.addEventListener("blur",()=>{
	input.value=input.value.toUpperCase();
})