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
/*                  DATABASE                     */
/* -------------------------------------------------- */
const projects = [
  {
    id: 1,
    name: 'Figma project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum excepturi tempora suscipit velit asperiores est explicabo non cumque reprehenderit consectetur ut, minus nihil sed incidunt possimus quas deleniti maiores, tempore magnam rerum nulla fugiat.',
    imageUrl: 'images/app_sceenshot.jpg',
    technologies: ['html', 'Ruby on rails', 'Javascript'],
    liveLink: 'http://nuri1977.github.io/bootsrap5-figma-01/',
    sourceLink: 'https://github.com/Nuri1977/bootsrap5-figma-01',
  },
  {
    id: 2,
    name: 'Figma project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum excepturi tempora suscipit velit asperiores est explicabo non cumque reprehenderit consectetur ut, minus nihil sed incidunt possimus quas deleniti maiores, tempore magnam rerum nulla fugiat.',
    imageUrl: 'images/app_sceenshot.jpg',
    technologies: ['html', 'Ruby on rails', 'Javascript'],
    liveLink: 'livelink2',
    sourceLink: 'sourcelink2',
  },
  {
    id: 3,
    name: 'Figma project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum excepturi tempora suscipit velit asperiores est explicabo non cumque reprehenderit consectetur ut, minus nihil sed incidunt possimus quas deleniti maiores, tempore magnam rerum nulla fugiat.',
    imageUrl: 'images/app_sceenshot.jpg',
    technologies: ['html', 'Ruby on rails', 'Javascript'],
    liveLink: 'livelink3',
    sourceLink: 'sourcelink3',
  },
  {
    id: 4,
    name: 'Figma project 4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum excepturi tempora suscipit velit asperiores est explicabo non cumque reprehenderit consectetur ut, minus nihil sed incidunt possimus quas deleniti maiores, tempore magnam rerum nulla fugiat.',
    imageUrl: 'images/app_sceenshot.jpg',
    technologies: ['html', 'Ruby on rails', 'Javascript'],
    liveLink: 'livelink4',
    sourceLink: 'sourcelink4',
  },
];

/* -------------------------------------------------- */
/*                 RENDERING CARDS                    */
/* -------------------------------------------------- */

const cardContent = document.querySelector('#cards-render');
let cardObject = {};

const rendeCards = () => {
  for (let i = 0; i < projects.length; i += 1) {
    cardObject = projects[i];
    let btnModal = '';
    let cardReverse = '';
    if (cardObject.id === 2 || cardObject.id === 4) cardReverse = 'card-reverse';
    btnModal = `btnP${cardObject.id}`;
    const content = `
      <div class="card  ${cardReverse}">
        <div class="card-image">
          <img src="${cardObject.imageUrl}" alt="mypage" />
        </div>
        <div class="card-text">
          <h3 class="card-header">${cardObject.name}</h3>
          <p class="card-paragraph">
            ${cardObject.description}
          </p>
          <ul class="techs">
            <li class="tech1">${cardObject.technologies[0]}</li>
            <li class="tech2">${cardObject.technologies[1]}</li>
            <li class="tech3">${cardObject.technologies[2]}</li>
          </ul>
          <div>
            <button type="button" class="btn-card  ${btnModal}" value=${cardObject.id} >See Project</button>
          </div>
        </div>
      </div>
    `;

    cardContent.innerHTML += content;
  }
};

rendeCards();

/* -------------------------------------------------- */
/*                  MODAL WINDOW                      */
/* -------------------------------------------------- */

const projectBtn1 = document.querySelector('.btnP1');
const projectBtn2 = document.querySelector('.btnP2');
const projectBtn3 = document.querySelector('.btnP3');
const projectBtn4 = document.querySelector('.btnP4');
const modalContainer = document.querySelector('.modal-container');
const modalTitle = document.querySelector('.modal-title');
const modalClose = document.querySelector('.modal-btn-close');
const modalImg = document.querySelector('.modal-img');
const modalPargraph = document.querySelector('.modal-paragraph');
const modalTechs = document.querySelector('.modal-techs');
const modalLive = document.querySelector('.modal-live');
const modalSource = document.querySelector('.modal-source');
let modalProject = {};

const fetchData = (event) => {
  for (let i = 0; i < projects.length; i += 1) {
    if (+event.target.value === projects[i].id) {
      modalProject = projects[i];
    }
  }
  modalTitle.innerHTML = modalProject.name;
  modalPargraph.innerHTML = modalProject.description;
  modalImg.src = modalProject.imageUrl;
  const techs = modalProject.technologies;
  modalTechs.innerHTML = '';
  for (let i = 0; i < techs.length; i += 1) {
    const techsClass = toString(i + 1);
    const newtechs = `<li class="modal-tech${techsClass}">${techs[i]}</li>`;
    modalTechs.innerHTML += newtechs;
  }

  modalLive.href = modalProject.liveLink;
  modalSource.href = modalProject.sourceLink;

  modalContainer.classList.replace('hide', 'show');
};

projectBtn1.addEventListener('click', fetchData);
projectBtn2.addEventListener('click', fetchData);
projectBtn3.addEventListener('click', fetchData);
projectBtn4.addEventListener('click', fetchData);

modalClose.addEventListener('click', () => modalContainer.classList.replace('show', 'hide'));

/* -------------------------------------------------- */
/*                  FORM VALIDATION  PRACTICE         */
/* -------------------------------------------------- */

const contactForm = document.getElementById('contact-form');
const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('contact-email');
const userMsg = document.getElementById('message');
const emailRegex = /[A-Z]/;

function toastMsg() {
  const x = document.getElementById('snackbar');
  x.className = 'show1';
  setTimeout(() => { x.className = x.className.replace('show1', ''); }, 10000);
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailRegex.test(email.value) === true) { toastMsg(); } else { contactForm.submit(); }
});

/* -------------------------------------------------- */
/*                  LOCAL STORAGE                     */
/* -------------------------------------------------- */
let formData = {};
let formJson = '';
const localContact = localStorage.getItem('lsForm');

const updateForm = () => {
  formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    userMsg: userMsg.value,
  };
};

firstName.addEventListener('onchange', (e) => { formData.firstName = e.target.value; });
lastName.addEventListener('onchange', (e) => { formData.lastName = e.target.value; });
email.addEventListener('onchange', (e) => { formData.email = e.target.value; });
userMsg.addEventListener('onchange', (e) => { formData.userMsg = e.target.value; });

const setForm = () => {
  updateForm();
  formJson = JSON.stringify(formData);
  localStorage.setItem('lsForm', formJson);
};

contactForm.addEventListener('keyup', () => {
  setForm();
});

const setData = () => {
  if (localContact) {
    const formHolder = JSON.parse(localContact);
    firstName.value = formHolder.firstName;
    lastName.value = formHolder.lastName;
    email.value = formHolder.email;
    userMsg.value = formHolder.userMsg;
  }
};

setData();