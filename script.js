console.log("Hello, world.")
let name="Ni'imatullah";
console.log(name)
let favouritecolor="pink";
console.log(favouritecolor)
console.log("Hello,my name is "+ name);
function sayHello() {
	console.log("Hello!")
}
sayHello();
function greet(name) {
	console.log("Good morning "+ name);
}
greet(name);
greet("Ibrahim");
let button=document.getElementById("helloButton");
button.addEventListener("click", function(){
	alert("Hello! welcome to my website");
});
let changeButton=document.getElementById("changeButton");
let message=document.getElementById("message");
changeButton.addEventListener("click", function(){
	message.textContent = "Ni'imatullah's portfolio!";
})
let menuButton=document.getElementById("menuButton");
let navMenu=document.getElementById("navMenu")
menuButton.addEventListener("click", function(){
     	if (navMenu.style.display=== "block"){
		navMenu.style.display="none";		
	}else{
		navMenu.style.display="block";
     	}
	
});																												