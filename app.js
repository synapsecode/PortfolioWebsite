let checked = false;

let bio = document.getElementById("bio");
let cBar = document.getElementById("cBar")
let cBar2 = document.getElementById("cBar2");

let projViewer = document.getElementById("projectviewer");
let perProjViewer = document.getElementById("perprojviewer");
let otherViewer = document.getElementById("otherworksviewer");

let langscr = document.getElementById("lngf");
let skillscr = document.getElementById("sk");


const generateProject = (p, isPerProj=false) => {
	return `
	<div class="project ltr" onclick="${isPerProj ? 'gotoPersonalProject' : 'gotoProject'}('${p.Name}');">
		<div class="ximage"><center><img src="${p.imageSrc}" alt="" srcset=""></center></div>
		<div class="projectdetails">
			<label class="projectitle">${p.displayName}</label><small class="yr"> </small><br><br>
			<label class="yr">${p.year}</label><br>
			<label class="stack">${p.TechStack}</label>
			<br><br><br>
			<p class="desc">
				${p.description}
			</p>
		</div>
	</div>
	`
}

const generateWorks = (p) => {
	return `
	<div class="project ltr" onclick="gotoWorks('${p.Name}');">
		<div class="ximage"><center><img src="${p.imageSrc}" alt="" srcset=""></center></div>
		<div class="projectdetails">
			<label class="projectitle">${p.displayName}</label><small class="yr"> </small><br><br>
			<label class="yr">${p.year}</label><br>
			<label class="stack">${p.TechStack}</label>
			<br><br><br>
			<p class="desc">
				${p.description}
			</p>
		</div>
	</div>
	`
}

const generateContactIcon = (i, isMini=true) => {
	return `
	<img
		src="${i.imageSrc}"
		alt=""
		class="${!isMini ? 'contactIcon' : 'minicontacticon'}"
		onclick="handleContactClick('${i.name}');"
	/>`
}

const generateLangOrSkill = (e, isSkill=false) => {
	return `
	<div class=${isSkill ? 'skill' : 'lang'}>
		<center>
			<img src="${e.imageSrc}" alt="" class="xb" /><br />
			<small class="lname">${e.name}</small>
		</center>
	</div>
	`;
}

bio.innerHTML = aboutme
social.forEach((e) => {
	if(social.slice(0,social.length-2).includes(e))
		cBar.innerHTML+=generateContactIcon(e)
	cBar2.innerHTML+=generateContactIcon(e, isMini=false);
})
cBar.innerHTML += '<h4 class="loc">Bengaluru, India</h4>';
//Main Projects
PROJDATA.forEach((e)=>{
	projViewer.innerHTML += generateProject(e);
});
PERPROJDATA.forEach((e)=>{
	perProjViewer.innerHTML += generateProject(e, isPerProj=true);
});
OTHERDATA.forEach((e)=>{
	otherViewer.innerHTML += generateWorks(e);
});

lnf.forEach((e)=> langscr.innerHTML += generateLangOrSkill(e, isSkill=false))
skillandtech.forEach((e)=> skillscr.innerHTML += generateLangOrSkill(e, isSkill=true))

const getData = (src, key) => {
	for(i of src){
		if(i.Name === key){
			return i
		}
	}
	return undefined;
}


//! UNPREDICTABLE BUG - Sometimes Navbar disappears

//Handles the Redirecting to Contact sources
const handleContactClick = (name) => {
	if(name==="Gmail"){
		var x = document.getElementById("snackbar");
  		x.className = "show";
  		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}else{
		window.open(social_links[name], '_blank').focus();
	}
}

//Handles the Work With Me Button
const workWithMe = () => {
	window.open("mailto:manashejmadi@gmail.com", '_blank').focus();
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
	console.log("Project", name, proj_links[name]);
	window.open(proj_links[name], '_blank').focus();
}

const gotoWorks = (name) => {
	console.log("Works", name, other_works_links[name]);
	window.open(other_works_links[name], '_blank').focus();
}

const gotoPersonalProject = (name) => {
	console.log("PerProj", name, perproj_links[name]);
	window.open(perproj_links[name], '_blank').focus();
}


//Prevents Navbar from Disappearing on InPage Redirect
var shiftWindow = function() { scrollBy(0, -70) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);


document.getElementById("click").addEventListener("change", function(x){
	checked = !checked;	
})