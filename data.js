//============================================BASIC============================================

let aboutme = ` Hey! I'm Manas Hejmadi, a 17 year old Student, Developer and Startup
Aspirant from Bengaluru, India. I have been consistently coding for
several years now and have a brief understanding of multiple languages
and paradigms related to programming. I'm a jack of all trades and I
code in Flutter, Python, Java, JavaScript and more! I have had a
little experience in multiple fields such as Machine Learning, Core
Programming, Webdev, Mobile Development, Desktop Development and more!
I Specialize in App making and have made numerous apps over the years!
I also have the skill to formulate good ideas and translate it to
Functional Code! I’m mostly a solo developer but I can also work and
coordinate tasks extemely well when i’m in a Team! I'm also an avid 
Space Travel fan! Especially of the SpaceX Starship Project. Hit me up! Lets
talk soon!`;


//============================================SOCIAL============================================
let social_links = {
	Instagram: "https://www.instagram.com/synapse.code/",
	LinkedIn: "https://www.linkedin.com/in/manas-hejmadi-0b3920183/",
	Github: "https://github.com/synapsecode",
	Gmail: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=manashejmadi@gmail.com",
	Facebook: "https://www.facebook.com/synapse.code",
	Twitter: "https://twitter.com/synapse_code",
}

let social = [
	{
		name:"Instagram",
		imageSrc: "Images/instagram.png",
		link:social_links.Instagram,
	},
	{
		name:"LinkedIn",
		imageSrc: "Images/linkedin.png",
		link:social_links.LinkedIn,
	},
	{
		name:"Github",
		imageSrc: "Images/github.png",
		link:social_links.Github,
	},
	{
		name:"Gmail",
		imageSrc: "Images/gmail.png",
		link:social_links.Gmail,
	},
	{
		name:"Facebook",
		imageSrc: "Images/facebook.png",
		link:social_links.Facebook,
	},
	{
		name:"Twitter",
		imageSrc: "Images/twitter.png",
		link:social_links.Twitter,
	},
];

//============================================SOCIAL============================================

//============================================MAIN PROJECTS============================================

let proj_links = {
	Covaxinator:'https://github.com/synapsecode/Covaxinator',
	FlutterGym:"https://github.com/synapsecode/FlutterGym",
	Microblogger: "https://github.com/synapsecode/Microblogger",
	VoteFlow: "https://github.com/synapsecode/VoteFlow",
	SchoolCompanion: "https://github.com/synapsecode/SchoolCompanion-App",
	Metalloid: "https://github.com/synapsecode/Metalloid",
	Dendrite:"https://github.com/synapsecode/Dendrite-1.1",
	BusManager: "https://github.com/synapsecode/BusManagerBackend"
}

let project_desc = {
	Covaxinator:'Covaxinator is a Vaccine Administration and Tracking Platform built in Flask for the Oakridge Codefest 2021 Hackathon',
	FlutterGym:"A Complete Online Gym and Training Platform coupled with a inbuilt Store for Apparel, Suppliments, Equipments and support for meditation, articles, etc",
	Microblogger:"An Indian Flutter Based Microblogging platfom that provides a new way to socialize withyour peers!",
	VoteFlow:"A Complete Voting Platform for Schools, Colleges, Universities. Communities and Small Businesses with a really simple and easy to use UI all built using Flask!",
	SchoolCompanion:"A Complete Platform for Schools, Colleges, Universities that allows them to provide notes, attendance info, results, Sample Papers, Circulars and more!",
	Metalloid:"An online community for Metalheads! Get into Group Chats, Learn about your Favourite bands, play quizzes, run polls and a whole lot more!",
	Dendrite:"Dendrite is a simple solution to achieve BlockChain-Supply Chain Integration and promote transparency for small scale companies",
	BusManager: "BusManager is a complete and Robust Server Side Backend Solution to manage School Buses and was built using Flask and Python. It was a client project."
}

//============================================MAIN PROJECTS============================================

//============================================PERSONAL PROJECTS============================================

let perproj_links = {
	FaceSwapApp: "https://github.com/synapsecode/Flask-FaceSwapWebApp",
	TasksApp: "https://github.com/synapsecode/JavaScript-TasksApp",
	TextDifferenceFinder: "https://github.com/synapsecode/JavaScript-MiniProjects",
	JSYoutubeDownloader: "https://github.com/synapsecode/JS-YoutubeDownloader",
	URLShortener: "https://github.com/synapsecode/Flask-URLShortener",
	PyPassManager: "https://github.com/synapsecode/PythonPasswordManager",
	HyperRename: "https://github.com/synapsecode/HyperRename",
	FlaskBlueprintTool: "https://github.com/synapsecode/FlaskBlueprint-Creation-Tool",
}

let personal_proj_desc = {
	FaceSwapApp:"An Application that allows you to Swap your face with another face over the web! It uses Python to conduct a bit of ML Magic and then uses Flask to host itself.",
	TasksApp:"A JavaScript WebApp that provides Google Tasks esque functionality with a beautiful and feature-rich User Interface",
	TextDifferenceFinder:"Finds the Differences betweenn 2 blocks of text and highlights them beautifully!",
	URLShortener:"This Web App takes a long link and retuns a shortened and minified link thats easier to share!!",
	JSYoutubeDownloader:"This App helps you download Youtube videos as MP4 files and also has a beautiful UI!",
	HyperRename: "A Python & Bash Script that can be used to rename Files, Folders, and Subfolders and also replace in files",
	FlaskBlueprintTool: "A simple Python script that generates a Flask blueprint enabled project on demand!",
	PyPassManager:"A Simple, Safe and Easy to use command line based Password Management Solution built using python",
}

//============================================OTHER WORKS============================================

let other_works_links = {
	MLBlog: "https://ethereumcs.wordpress.com/",
}

let other_works_desc = {
	MLBlog: "This is a Blog Post series about Basic Machine Learning! Check it out!"
}

//============================================OTHER WORKS============================================


//============================================AGGREGATION============================================

let PROJDATA = [
	{
		displayName: "Covaxinator",
		Name: "Covaxinator",
		description: project_desc.Covaxinator,
		year: 2021,
		TechStack:"Flask(Python)",
		imageSrc:"Images/python.png",
		link:proj_links.Covaxinator,
	},
	{
		displayName: "FlutterGym",
		Name: "FlutterGym",
		description: project_desc.FlutterGym,
		year: 2020,
		TechStack:"Flutter + Flask(Python)",
		imageSrc:"Images/flutter.png",
		link:proj_links.FlutterGym,
	},
	{
		displayName: "Microblogger",
		Name: "Microblogger",
		description: project_desc.Microblogger,
		year: 2020,
		TechStack:"Flutter + Flask(Python)",
		imageSrc:"Images/flutter.png",
		link:proj_links.Microblogger,
	},
	{
		displayName: "BusManager",
		Name: "BusManager",
		description: project_desc.BusManager,
		year: 2020,
		TechStack:"Flask(Python)",
		imageSrc:"Images/python.png",
		link:proj_links.BusManager,
	},
	{
		displayName: "VoteFlow",
		Name: "VoteFlow",
		description: project_desc.VoteFlow,
		year: 2019,
		TechStack:"Flask(Python)",
		imageSrc:"Images/python.png",
		link:proj_links.VoteFlow,
	},
	{
		displayName: "School Companion",
		Name: "SchoolCompanion",
		description: project_desc.SchoolCompanion,
		year: 2019,
		TechStack:"Flutter + Flask(Python)",
		imageSrc:"Images/flutter.png",
		link:proj_links.SchoolCompanion,
	},
	{
		displayName: "Metalloid",
		Name: "Metalloid",
		description: project_desc.Metalloid,
		year: 2019,
		TechStack:"Flutter + Flask(Python)",
		imageSrc:"Images/flutter.png",
		link:proj_links.Metalloid,
	},
	{
		displayName: "Dendrite",
		Name: "Dendrite",
		description: project_desc.Dendrite,
		year: 2018,
		TechStack:"Flask(Python) + BigChainDB",
		imageSrc:"Images/python.png",
		link:proj_links.Dendrite,
	},
];


let PERPROJDATA = [
	{
		displayName: "FaceSwapApp",
		Name: "FaceSwapApp",
		description: personal_proj_desc.FaceSwapApp,
		year: 2020,
		TechStack:"Python",
		imageSrc:"Images/ml.png",
		link:perproj_links.FaceSwapApp,
	},
	{
		displayName: "TasksApp",
		Name: "TasksApp",
		description: personal_proj_desc.TasksApp,
		year: 2020,
		TechStack:"Vanilla JavaScript",
		imageSrc:"Images/js.png",
		link:perproj_links.TasksApp,
	},
	{
		displayName: "Text\nDifference Finder",
		Name: "TextDifferenceFinder",
		description: personal_proj_desc.TextDifferenceFinder,
		year: 2020,
		TechStack:"Vanilla JavaScript",
		imageSrc:"Images/js.png",
		link:perproj_links.TextDifferenceFinder,
	},
	{
		displayName: "JS Youtube\nDownloader",
		Name: "JSYoutubeDownloader",
		description: personal_proj_desc.JSYoutubeDownloader,
		year: 2020,
		TechStack:"Vanilla JavaScript",
		imageSrc:"Images/js.png",
		link:perproj_links.JSYoutubeDownloader,
	},
	{
		displayName: "Flask\nURLShortener",
		Name: "URLShortener",
		description: personal_proj_desc.URLShortener,
		year: 2020,
		TechStack:"Flask(Python)",
		imageSrc:"Images/python.png",
		link:perproj_links.URLShortener,
	},
	{
		displayName: "FlaskBlueprints\nCreation Tool",
		Name: "FlaskBlueprintTool",
		description: personal_proj_desc.FlaskBlueprintTool,
		year: 2020,
		TechStack:"Python",
		imageSrc:"Images/python.png",
		link:perproj_links.FlaskBlueprintTool,
	},
	{
		displayName: "HyperRename",
		Name: "HyperRename",
		description: personal_proj_desc.HyperRename,
		year: 2020,
		TechStack:"Python",
		imageSrc:"Images/python.png",
		link:perproj_links.HyperRename,
	},
	{
		displayName: "Python Password\nManager",
		Name: "PyPassManager",
		description: personal_proj_desc.PyPassManager,
		year: 2020,
		TechStack:"Python",
		imageSrc:"Images/python.png",
		link:perproj_links.PyPassManager,
	},
];


let OTHERDATA = [
	{
		displayName: "Machine Learning\nBlog",
		Name: "MLBlog",
		description: other_works_desc.MLBlog,
		year: 2018,
		TechStack:"Wordpress Blog",
		imageSrc:"Images/ml.png",
		link:other_works_links.MLBlog,
	},
];

let lnf = [
	{
		name: "Flutter",
		imageSrc: "Images/flutter.png",
	},
	{
		name: "Python 3",
		imageSrc: "Images/python.png",
	},
	{
		name: "JavaScript",
		imageSrc: "Images/js.png",
	},
	{
		name: "Java",
		imageSrc: "Images/java.png",
	},
	{
		name: "Svelte",
		imageSrc: "Images/svelte.png",
	},
	{
		name: "Flask",
		imageSrc: "Images/python.png",
	},
];

let skillandtech = [
	{
		name: "After Effects",
		imageSrc: "Images/ae.png",
	},
	{
		name: "Photoshop",
		imageSrc: "Images/ps.png",
	},
	{
		name: "Mentoring",
		imageSrc: "Images/mentor.png",
	},
	{
		name: "Teamwork",
		imageSrc: "Images/Tw.png",
	},
	{
		name: "Creativity",
		imageSrc: "Images/brain.png",
	},
	{
		name: "Blogging",
		imageSrc: "Images/medium.png",
	},
	{
		name: "BrainStorming",
		imageSrc: "Images/brain.png",
	},
];

let testimonial_data = [
	{
		name: 'Ismail Abdirahman',
		testimonial: ' Manas was pleasure to work with! He is so kind and truly awesome at what he does. He delivered a product that I was pleased with. He made sure to communicate his progress and kept me informed throughout this process. He was so helpful in making any changes that I asked. He was also very helpful in explaining things that I had questions about, He is very timely and always exceeded my expectations. He built the Backend very professionally and will definitely be using his services again as well as recommending him to all of my family and friends.'
	},
]
//============================================AGGREGATION============================================

