const projectsData = [
  {
    id: 1,
    imgSrc: ['./assets/images/placeholder.jpg', './assets/images/modal_placeholder.jpg'],
    imgAlt: 'placeholder',
    heading: 'Multi-Post Stories',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
    source: '',
  },
  {
    id: 2,
    imgSrc: ['./assets/images/placeholder.jpg', './assets/images/modal_placeholder.jpg'],
    imgAlt: 'placeholder',
    heading: 'Multi-Post Lets change this',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
    source: '',
  },
  {
    id: 3,
    imgSrc: ['./assets/images/placeholder.jpg', './assets/images/modal_placeholder.jpg'],
    imgAlt: 'placeholder',
    heading: 'Multi-Post Check in',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
    source: '',
  },
  {
    id: 4,
    imgSrc: ['./assets/images/placeholder.jpg', './assets/images/modal_placeholder.jpg'],
    imgAlt: 'placeholder',
    heading: 'Multi-Post Stories',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
    source: '',
  },
];

const projects = document.querySelector('.projects');

projectsData.forEach((projectData) => {
  const project = document.createElement('div');
  project.className = 'project';
  project.id = projectData.id;

  const img = document.createElement('img');
  const [projectImgSrc] = projectData.imgSrc;
  img.src = projectImgSrc;
  img.alt = projectData.imgAlt;
  project.appendChild(img);

  const projectDetails = document.createElement('div');
  projectDetails.className = 'project-details';

  const h3 = document.createElement('h3');
  h3.textContent = projectData.heading;
  projectDetails.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = projectData.paragraph;
  projectDetails.appendChild(p);

  const stack = document.createElement('div');
  stack.className = 'stack';
  const ul = document.createElement('ul');
  projectData.stack.forEach((stackItem) => {
    const li = document.createElement('li');
    li.textContent = stackItem;
    ul.appendChild(li);
  });
  stack.appendChild(ul);
  projectDetails.appendChild(stack);

  const a = document.createElement('a');
  a.className = 'btn';
  a.href = `#${projectData.id}`;
  a.textContent = 'See Project';
  a.classList.add('see-project');
  a.setAttribute('data-project-id', projectData.id);
  projectDetails.appendChild(a);

  project.appendChild(projectDetails);
  projects.appendChild(project);
});

// Creating a modal for each project

const modalSection = document.querySelector('.modal-section');
const seeProjectBtn = document.querySelectorAll('.see-project');

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const projectId = e.currentTarget.getAttribute('data-project-id');
    const project = projectsData.find(
      (item) => item.id === parseInt(projectId, 10),
    );

    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.innerHTML = `
                        <div class="modal-title">
                          <h3>${project.heading}</h3>
                          <img src="assets/images/cancel_icon.svg" id="cancel-modal" alt="Cancel Icon" />
                        </div>

                        <div class="modal-image">
                          <img class="modal-image-desktop" src="${project.imgSrc[1]}" alt="${project.imgAlt}" />
                          <img class="modal-image-mobile" src="${project.imgSrc[0]}" alt="${project.imgAlt}" />
                        </div>

                        <div class="modal-text">
                          <p>${project.paragraph}</p>

                          <div class="stack modal-text-stack">
                            <ul>
                              ${project.stack.map((i) => `<li>${i}</li>`).join('')}
                            </ul>
                          </div>
                        </div>

                        <div class="modal-buttons">
                          <a href="${project.link}" class="btn">
                            See live
                            <img src="assets/images/live_icon.svg" alt="Live Icon" />
                          </a>
                          <a href="${project.source}" class="btn">
                            See live
                            <img src="assets/images/github_icon.svg" alt="Live Icon" />
                          </a>
                        </div>
                      `;

    modalSection.appendChild(modal);
    modalSection.style.display = 'block';
  });
});

modalSection.addEventListener('click', (event) => {
  if (event.target.id === 'cancel-modal') {
    const modal = document.querySelector('.modal');
    modalSection.style.display = 'none';
    modal.parentNode.removeChild(modal);
  }
});

// Responsive 'required' attributes for desktop and mobile name inputs

const mobileName = document.querySelector('#name');
const desktopFirst = document.querySelector('#first_name');
const desktopLast = document.querySelector('#last_name');

if (window.innerWidth >= 768) {
  mobileName.removeAttribute('required');
} else {
  desktopFirst.removeAttribute('required');
  desktopLast.removeAttribute('required');
}

// Mobile Menu

const mobileMenu = document.querySelector('.header-mobile');
const cancel = document.querySelector('#cancel');
const hamburger = document.querySelector('#hamburger');

const display = () => {
  mobileMenu.classList.remove('header-mobile-visibility');
};

const hide = () => {
  mobileMenu.classList.add('header-mobile-visibility');
};

hamburger.addEventListener('click', display);
cancel.addEventListener('click', hide);

const form = document.querySelector('#form');

const validateForm = (e) => {
  const email = document.querySelector('#email');
  const errorMessage = document.querySelector('.contact-us-form-error');
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.innerHTML = 'Please use only lowercase';
  } else {
    errorMessage.textContent = '';
  }
};
form.addEventListener('submit', validateForm);
