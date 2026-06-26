//your JS code here. If required.
let C = document.getElementById("C");
let back = document.getElementById("back");
let inputs = document.getElementById("inputs");
let equal = document.getElementById("equal");

// Clear
C.addEventListener("click",()=>{
	inputs.value = "";
});

// backSpace
back.addEventListener("click",()=>{
	if(inputs.value !== ""){
		deleteone(inputs.value)
	}
	
});

document.getElementById("1").addEventListener("click",()=>{
    inputs.value += "1";
});
document.getElementById("plus").addEventListener("click",()=>{
    inputs.value += "+";
});
function deleteone(str){
	let arr = str.split("");
	arr.pop();
	inputs.value = arr.join("")
}

// Numbers
document.getElementById("0").addEventListener("click", () => inputs.value += "0");
document.getElementById("1").addEventListener("click", () => inputs.value += "1");
document.getElementById("2").addEventListener("click", () => inputs.value += "2");
document.getElementById("3").addEventListener("click", () => inputs.value += "3");
document.getElementById("4").addEventListener("click", () => inputs.value += "4");
document.getElementById("5").addEventListener("click", () => inputs.value += "5");
document.getElementById("6").addEventListener("click", () => inputs.value += "6");
document.getElementById("7").addEventListener("click", () => inputs.value += "7");
document.getElementById("8").addEventListener("click", () => inputs.value += "8");
document.getElementById("9").addEventListener("click", () => inputs.value += "9");

// Operators
document.getElementById("plus").addEventListener("click", () => inputs.value += "+");
document.getElementById("-").addEventListener("click", () => inputs.value += "-");
document.getElementById("*").addEventListener("click", () => inputs.value += "*");
document.getElementById("divi").addEventListener("click", () => inputs.value += "/");
document.getElementById("dot").addEventListener("click", () => inputs.value += ".");
document.getElementById("op").addEventListener("click", () => inputs.value += "(");
document.getElementById("cl").addEventListener("click", () => inputs.value += ")");

// Equals
equal.addEventListener("click", () => {
    try {
        inputs.value = eval(inputs.value);
    } catch {
        inputs.value = "Error";
    }
});