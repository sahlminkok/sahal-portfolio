const projectsData = [
  {
    imgSrc: "./assets/images/placeholder.jpg",
    imgAlt: "placeholder",
    heading: "Multi-Post Stories",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ["Css", "Html", "Bootstrap", "Ruby"],
    link: "",
  },
  {
    imgSrc: "./assets/images/placeholder.jpg",
    imgAlt: "placeholder",
    heading: "Multi-Post Stories",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ["Css", "Html", "Bootstrap", "Ruby"],
    link: "",
  },
  {
    imgSrc: "./assets/images/placeholder.jpg",
    imgAlt: "placeholder",
    heading: "Multi-Post Stories",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ["Css", "Html", "Bootstrap", "Ruby"],
    link: "",
  },
  {
    imgSrc: "./assets/images/placeholder.jpg",
    imgAlt: "placeholder",
    heading: "Multi-Post Stories",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ["Css", "Html", "Bootstrap", "Ruby"],
    link: "",
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

  const project_details = document.createElement('div');
  project_details.className = 'project-details';

  const h3 = document.createElement('h3');
  h3.textContent = projectData.heading;
  project_details.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = projectData.paragraph;
  project_details.appendChild(p);

  const stack = document.createElement('div');
  stack.className = 'stack';
  const ul = document.createElement('ul');
  projectData.stack.forEach((stackItem) => {
    const li = document.createElement('li');
    li.textContent = stackItem;
    ul.appendChild(li);
  });
  stack.appendChild(ul);
  project_details.appendChild(stack);

  const a = document.createElement('a');
  a.className = 'btn';
  a.href = projectData.link;
  a.textContent = 'See Project';
  project_details.appendChild(a);

  project.appendChild(project_details);
  projects.appendChild(project);
});
