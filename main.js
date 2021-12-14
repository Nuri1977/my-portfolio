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

/* ------------------------------------------------- */
/*                  MODAL WINDOW                    */ 
const cardBtn = document.querySelector('#header');

const projects = [ 
  {
    id: 1,
    project: {
      name: "Project name",
      description: "Project description",
      imageUrl: "/images/app_screenshot.jpg",
      technologies: ["html", "Ruby on rails", "Javascript"],
      liveLink: "livelink1",
      sourceLink: "sourcelink1"
    }
  }
]

