let checked = false;

let social = {
	"Instagram": "https://www.instagram.com/synapse.code/",
	"LinkedIn": "https://www.linkedin.com/in/manas-hejmadi-0b3920183/",
	"Github": "https://github.com/synapsecode",
	"Gmail": "https://mail.google.com/mail/?view=cm&fs=1&to=manashejmadi@gmail.com",
	"Facebook": "https://www.facebook.com/synapse.code",
	"Twitter": "https://twitter.com/synapse_code",
}

let projects = {
	"FlutterGym":"https://github.com/synapsecode/FlutterGym",
	"Microblogger": "https://github.com/synapsecode/Microblogger",
	"VoteFlow": "https://github.com/synapsecode/VoteFlow",
	"SchoolCompanion": "https://github.com/synapsecode/SchoolCompanion-App",
	"Metalloid": "https://github.com/synapsecode/Metalloid",
}

let personal_projects = {
	"FaceSwapApp": "https://github.com/synapsecode/Flask-FaceSwapWebApp",
	"TasksApp": "https://github.com/synapsecode/JavaScript-TasksApp",
	"TextDifferenceFinder": "https://github.com/synapsecode/JavaScript-MiniProjects",
	"JSYoutubeDownloader": "https://github.com/synapsecode/JS-YoutubeDownloader",
	"URLShortener": "https://github.com/synapsecode/Flask-URLShortener",
}

let other_works = {
	"MLBlog": "https://ethereumcs.wordpress.com/",
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

const gotoProject = (name) => {
	window.open(projects[name], '_blank').focus();
}

const gotoWorks = (name) => {
	window.open(other_works[name], '_blank').focus();
}

const gotoPersonalProject = (name) => {
	window.open(personal_projects[name], '_blank').focus();
}


//Prevents Navbar from Disappearing on InPage Redirect
var shiftWindow = function() { scrollBy(0, -70) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);


document.getElementById("click").addEventListener("change", function(x){
	checked = !checked;
	
})