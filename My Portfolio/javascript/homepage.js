// Smooth scrolling for navigation
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Typewriter Effect - Corrected Version
document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('typewriter');
  const cursor = document.querySelector('.cursor');
  const roles = ["student", "junior software developer", "pianist", "cyber security enthusiast"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 150;

  function type() {
    const currentText = roles[roleIndex];
    
    // Display text
    element.textContent = currentText.substring(0, charIndex);
    
    if (!isDeleting && charIndex <= currentText.length) {
      charIndex++;
      speed = 150;
    } else if (isDeleting && charIndex >= 0) {
      charIndex--;
      speed = 50;
    } else {
      isDeleting = !isDeleting;
      speed = isDeleting ? 1000 : 500;
      if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    }
    
    setTimeout(type, speed);
  }
  
  type(); // Start the effect
});


// Footer year update
document.getElementById('year').textContent = new Date().getFullYear();

// Back-to-top button
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle

const darkModeToggle = document.getElementById('darkModeToggle');

// Create and style the icons
darkModeToggle.innerHTML = `
  <i class="fa-solid fa-moon" id="darkIcon" style="display: none; color: black;"></i>
  <i class="fa-solid fa-sun" id="lightIcon" style="display: none; color: white;"></i>
`;

const darkIcon = document.getElementById('darkIcon');
const lightIcon = document.getElementById('lightIcon');

// Set initial theme from localStorage or preference
function setInitialTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline-block';
  }
}

// Toggle between themes
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline-block';
    lightIcon.style.color = 'white'; // Ensure sun is white in dark mode
    localStorage.setItem('theme', 'dark');
  } else {
    darkIcon.style.display = 'inline-block';
    lightIcon.style.display = 'none';
    lightIcon.style.color = ''; // Reset to default color in light mode
    localStorage.setItem('theme', 'light');
  }
});

// Initialize theme
setInitialTheme();

// Projects Data - Add your projects here
const projects = [
  {
    title: "AfriBlaze",
    description: "An e-commerce website for African products",
    image: "images/portfolio-screenshot.jpg",
    demoUrl: "https://yourportfolio.com",
    codeUrl: "https://github.com/yourusername/portfolio",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Weather App",
    description: "Real-time weather application using API integration",
    image: "images/weather-screenshot.jpg",
    demoUrl: "https://yourweatherapp.com",
    codeUrl: "https://github.com/yourusername/weather-app",
    tags: ["API", "JavaScript", "CSS3"]
  }
];

// Display Projects Function
function displayProjects() {
  const projectGrid = document.querySelector('.project-grid');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          <a href="${project.demoUrl}" class="btn" target="_blank">Live Demo</a>
          <a href="${project.codeUrl}" class="btn-outline" target="_blank">View Code</a>
        </div>
      </div>
    `;
    
    projectGrid.appendChild(projectCard);
  });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  displayProjects();
  
  
});