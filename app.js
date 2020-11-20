let checked = false;

let social = {
	"Instagram": "https://www.instagram.com/synapse.code/",
	"LinkedIn": "https://www.linkedin.com/in/manas-hejmadi-0b3920183/",
	"Github": "https://github.com/synapsecode",
	"Gmail": "https://mail.google.com/mail/?view=cm&fs=1&to=manashejmadi@gmail.com",
	"Facebook": "https://www.facebook.com/synapse.code",
	"Twitter": "https://twitter.com/synapse_code",
}
//! UNPREDICTABLE BUG - Sometimes Navbar disappears

//Handles the Redirecting to Contact sources
const handleContactClick = (name) => {
	window.open(social[name], '_blank').focus();
}

//Handles the Work With Me Button
const workWithMe = () => {
	window.open(social["Gmail"], '_blank').focus();
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
	shiftWindow();
}


const gotoproject = (name) => {
	alert("Going to " + name);
}


//Prevents Navbar from Disappearing on InPage Redirect
var shiftWindow = function() { scrollBy(0, -70) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);


document.getElementById("click").addEventListener("change", function(x){
	checked = !checked;
	
})