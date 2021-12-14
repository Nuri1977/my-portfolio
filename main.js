const header = document.querySelector('#header');
const nav = document.querySelector('#nav-flex');
const hamburger = document.querySelector('#hamburger');
const logo = document.querySelector('#logo');
const navPortfolio = document.querySelector('.nav-portfolio');
const navContact = document.querySelector('.nav-contact');
const navAbout = document.querySelector('.nav-about');
const xbtn = document.querySelector('.fa-times');
const envelope = document.querySelector('.fa-envelope');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
let dropStatus = false;

function openDrop() {
  header.classList.replace('header', 'header1');
  nav.classList.replace('nav-flex', 'nav-flex1');
  xbtn.classList.replace('hide', 'show');
  envelope.classList.replace('show', 'hide');
  circle1.classList.replace('show', 'hide');
  circle2.classList.replace('show', 'hide');
  hamburger.classList.toggle('hide');
  logo.classList.toggle('hide');
  dropStatus = true;
}

function closeDrop() {
  header.classList.replace('header1', 'header');
  nav.classList.replace('nav-flex1', 'nav-flex');
  xbtn.classList.replace('show', 'hide');
  envelope.classList.replace('hide', 'show');
  circle1.classList.replace('hide', 'show');
  circle2.classList.replace('hide', 'show');
  hamburger.classList.toggle('hide');
  logo.classList.toggle('hide');
  dropStatus = false;
}

hamburger.addEventListener('click', openDrop);

xbtn.addEventListener('click', closeDrop);

navPortfolio.addEventListener('click', () => {
  if (dropStatus === true) {
    closeDrop();
  }
});

navContact.addEventListener('click', () => {
  if (dropStatus === true) {
    closeDrop();
  }
});

navAbout.addEventListener('click', () => {
  if (dropStatus === true) {
    closeDrop();
  }
});

/* -------------------------------------------------- */
/*                  MODAL WINDOW                      */ 
/* -------------------------------------------------- */
const projects = [ 
  {
    id: 1,
    name: "Figma project 1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum excepturi tempora suscipit velit asperiores est explicabo non cumque reprehenderit consectetur ut, minus nihil sed incidunt possimus quas deleniti maiores, tempore magnam rerum nulla fugiat. Aliquid sint reiciendis distinctio repudiandae debitis ipsam reprehenderit quidem ipsum dolores, architecto eius laudantium vitae.",
    imageUrl: "/images/Portfolio1.png",
    technologies: ["html", "Ruby on rails", "Javascript"],
    liveLink: "http://nuri1977.github.io/bootsrap5-figma-01/",
    sourceLink: "https://github.com/Nuri1977/bootsrap5-figma-01"
  },
  {
    id: 2,
    name: "Project name2",
    description: "Project description2",
    imageUrl: "/images/app_screenshot.jpg",
    technologies: ["html", "Ruby on rails", "Javascript"],
    liveLink: "livelink2",
    sourceLink: "sourcelink2"
  },
  {
    id: 3,
    name: "Project name3",
    description: "Project description3",
    imageUrl: "/images/app_screenshot.jpg",
    technologies: ["html", "Ruby on rails", "Javascript"],
    liveLink: "livelink3",
    sourceLink: "sourcelink3"
  },
  {
    id: 4,
    name: "Project name4",
    description: "Project description4",
    imageUrl: "/images/app_screenshot.jpg",
    technologies: ["html", "Ruby on rails", "Javascript"],
    liveLink: "livelink4",
    sourceLink: "sourcelink4"
  }
]

const projectBtn1 = document.querySelector('.btnP1');
const projectBtn2 = document.querySelector('.btnP2');
const projectBtn3 = document.querySelector('.btnP3');
const projectBtn4 = document.querySelector('.btnP4');
const modalContainer = document.querySelector('.modal-container');
const modalTitle = document.querySelector('.modal-title');
const modalClose = document.querySelector('.modal-btn-close');
const modalImg = document.querySelector('.modal-img');
const modalPargraph = document.querySelector('.modal-paragraph');
const modalTech1 = document.querySelector('.modal-tech1');
const modalTech2 = document.querySelector('.modal-tech2');
const modalTech3 = document.querySelector('.modal-tech3');
const modalLive = document.querySelector('.modal-live');
const modalSource = document.querySelector('.modal-source');
let modalProject = {};

const fetchData = (event) => {
  for (let i = 0; i < projects.length; i++) {
    if(event.target.value == projects[i].id) {
      modalProject = projects[i]
    }
  }
  modalTitle.innerHTML = modalProject.name;
  modalPargraph.innerHTML = modalProject.description;
  modalImg.src = modalProject.imageUrl;
  modalTech1.innerHTML = modalProject.technologies[0];
  modalTech2.innerHTML = modalProject.technologies[1];
  modalTech3.innerHTML = modalProject.technologies[2];
  modalLive.href = modalProject.liveLink;
  modalSource.href = modalProject.sourceLink;
  
  modalContainer.classList.replace('hide', 'show');
}

projectBtn1.addEventListener('click', fetchData);
projectBtn2.addEventListener('click', fetchData);
projectBtn3.addEventListener('click', fetchData);
projectBtn4.addEventListener('click', fetchData);

modalClose.addEventListener('click', () => modalContainer.classList.replace('show', 'hide'))

