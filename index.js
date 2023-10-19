const projectsData = [
  {
    imgSrc: './assets/images/placeholder.jpg',
    imgAlt: 'placeholder',
    heading: 'Multi-Post Stories',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
  },
  {
    imgSrc: './assets/images/placeholder.jpg',
    imgAlt: 'placeholder',
    heading: 'Multi-Post Stories',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
  },
  {
    imgSrc: './assets/images/placeholder.jpg',
    imgAlt: 'placeholder',
    heading: 'Multi-Post Stories',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
  },
  {
    imgSrc: './assets/images/placeholder.jpg',
    imgAlt: 'placeholder',
    heading: 'Multi-Post Stories',
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    link: '',
  },
];

const projects = document.querySelector('.projects');

projectsData.forEach((projectData) => {
  const project = document.createElement('div');
  project.className = 'project';

  const img = document.createElement('img');
  img.src = projectData.imgSrc;
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
  a.href = projectData.link;
  a.textContent = 'See Project';
  projectDetails.appendChild(a);

  project.appendChild(projectDetails);
  projects.appendChild(project);
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
