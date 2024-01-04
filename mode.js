const body=document.querySelector("body")
let newDiv = document.createElement("div");
body.append(newDiv)
newDiv.classList.add("newDivClass");
let newDiv1=document.createElement("div");
newDiv1.classList.add("newDiv1Class");
newDiv1.innerText="Start Bootstrap"
newDiv.append(newDiv1)
let menyuDiv=document.createElement("div")
menyuDiv.classList.add("menyuDivClass")

newDiv.append(menyuDiv)

let homeDiv=document.createElement("div")
homeDiv.classList.add("homeDivClass")
homeDiv.innerText="Home"
menyuDiv.append(homeDiv)

let resumeDiv=document.createElement("div")
resumeDiv.classList.add("resumeDivClass")
resumeDiv.innerText="Resume"
menyuDiv.append(resumeDiv)

let projectsDiv=document.createElement("div")
projectsDiv.classList.add("projectsDivClass")
projectsDiv.innerText="Projects"
menyuDiv.append(projectsDiv)

let contactDiv=document.createElement("div");
contactDiv.classList.add("contactDivClass");
contactDiv.innerText="Contact";
menyuDiv.append(contactDiv);


let sectionDiv = document.createElement("div");
body.append(sectionDiv)
sectionDiv.classList.add("sectionDivClass");


let textDiv=document.createElement("div")
sectionDiv.append(textDiv)
textDiv.classList.add("textDivClass")

let imgDiv =document.createElement("div")
sectionDiv.append(imgDiv)
imgDiv.classList.add("imgDivClass")

let text1Div = document.createElement("div");
textDiv.append(text1Div);
text1Div.innerText="DESIGN · DEVELOPMENT · MARKETING"
text1Div.classList.add("text1DivClass");

let text2Div = document.createElement("div");
textDiv.append(text2Div);
text2Div.innerText="I can help your business to"
text2Div.classList.add("text2DivClass");

let text3Div = document.createElement("div");
textDiv.append(text3Div);
text3Div.innerText="Get online and grow fast"
text3Div.classList.add("text3DivClass");

let text4Div = document.createElement("div");
textDiv.append(text4Div);
text4Div.classList.add("text4DivClass");

let button1=document.createElement("button")
text4Div.append(button1)
button1.innerText="Resume"
button1.classList.add("button1")

let button2=document.createElement("button")
text4Div.append(button2)
button2.innerText="Projects"
button2.classList.add("button2")

let imgElement = document.createElement('img');
imgElement.src = "profile.png";
imgElement.classList.add('imgClass');
imgDiv.append(imgElement);


let section1Div=document.createElement("div");
body.append(section1Div)
section1Div.classList.add("section1Div")

let about=document.createElement("div")
section1Div.append(about)
about.innerText="About Me"
about.classList.add("about")

let my =document.createElement("div")
section1Div.append(my)
my.innerText="My name is Start Bootstrap and I help brands grow."
my.classList.add("my")

let lorem =document.createElement("div")
section1Div.append(lorem)
lorem.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"
lorem.classList.add("lorem")

icons.classList.add("icons")
icons.innerHTML = '<i class="bi bi-twitter"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>';