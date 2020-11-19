let checked = false;

//Handles the Redirecting to Contact sources
const handleContactClick = (name) => {
	console.log("Redirecting to: " + name);
}

//Handles the Work With Me Button
const workWithMe = () => {
	console.log("Redirecting to Work With Me!");
	alert("Coming Soon.....");
}

//Scrolls to different sections in the WebPage
const goto = (name) => {
	console.log("Scrolling To to " + name);
	// document.getElementById(name).scrollIntoView({behavior: 'smooth'});
	if(checked){
		document.getElementById("click").checked = false;
	}
	checked = false;
	window.location.href = "#"+name;

	
}


const gotoproject = (name) => {
	alert("Going to " + name);
}


//Prevents Navbar from Disappearing on InPage Redirect
var shiftWindow = function() { scrollBy(0, -70) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);


document.getElementById("click").addEventListener("change", function(x){
	checked = !checked;
})