document.addEventListener("DOMContentLoaded", function () {
  // Project data
  const projectsData = [
    {
      id: 1,
      title: "Aironic",
      description:
        "A chatbot with an ironic twist. Powered by advanced AI, Guido answers your questions just as the artist would—with a gentle touch of irony.",
      image: "/images/aironic.png",
      url: "https://aironic.vercel.app/",
    },
    {
      id: 2,
      title: "FaceFunk",
      description:
        "Instantly transform your selfies into stunning cartoon caricatures using advanced AI. Quick, easy, and pay only if you love the result!",
      image: "/images/facefunk.png",
      url: "https://facefunk.vercel.app/",
    },
    {
      id: 3,
      title: "Last Words",
      description:
        "An artistic exploration using AI to match your face with death row inmates, presenting their final statements to evoke empathy and reflection on capital punishment and human identity",
      image: "/images/lastword.png",
      url: "https://last-words-web-app.vercel.app/",
    },
    {
      id: 4,
      title: "Drawing Games for Little Observers",
      description:
        "A playful book of creative drawing games, encouraging children to explore art by sharpening their observational skills, boosting confidence, and celebrating unique perspectives—turning drawing into joyful exploration rather than a test of accuracy.",
      image: "/images/book_icon.png",
      url: "https://amzn.eu/d/1Bz5bYl",
    },
  ];

  // Function to create a project card element
  function createProjectCard(project) {
    return `
      <div class="col-md-6 col-lg-3" data-project-id="${project.id}">
        <div class="project-card card h-100">
          <a href="${project.url}" target="_blank">
            <img
              src="${project.image}"
              class="card-img-top"
              alt="${project.title}"
            />
          </a>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text flex-grow-1">${project.description}</p>
            <a href="${project.url}" class="btn btn-primary mt-3 project-link">View Project</a>
          </div>
        </div>
      </div>
    `;
  }

  // Function to render all projects
  function renderProjects() {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) return;

    projectsContainer.innerHTML = "";

    projectsData.forEach((project) => {
      projectsContainer.innerHTML += createProjectCard(project);
    });

    // Add event listeners after rendering
    attachEventListeners();
  }

  // Function to attach event listeners to project cards
  function attachEventListeners() {
    // Add hover effect class
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.classList.add("project-hover");
      });

      card.addEventListener("mouseleave", function () {
        this.classList.remove("project-hover");
      });
    });

    // Add click events for project links
    document.querySelectorAll(".project-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        // You can add custom behavior here if needed
        console.log(`Navigating to: ${this.getAttribute("href")}`);
        // If you want to prevent default and handle navigation programmatically:
        // e.preventDefault();
        // handleProjectNavigation(this.getAttribute('href'));
      });
    });
  }

  // Function to filter projects (can be expanded later)
  function filterProjects(category) {
    // This could be implemented to filter projects by category
    console.log(`Filtering projects by: ${category}`);
    // For now, just re-render all projects
    renderProjects();
  }

  // Initialize the page
  function init() {
    renderProjects();

    // Example of how to add a filter control
    const filterButtons = document.querySelectorAll(".filter-btn");
    if (filterButtons.length > 0) {
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          const category = this.getAttribute("data-category");
          filterProjects(category);

          // Update active button
          filterButtons.forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
        });
      });
    }
  }

  // Start the application
  init();
});
