//your JS code here. If required.
let C = document.getElementById("C");
let back = document.getElementById("back");
let inputs = document.getElementById("inputs");

C.addEventListener("click",()=>{
	inputs.value = "";
});

back.addEventListener("click",()=>{
	if(inputs.value != ""){
		deleteone(inputs.value)
	}
	
});

function deleteone(str){
	let arr = str.split("");
	arr.pop();
	inputs.value = arr.join("")
}