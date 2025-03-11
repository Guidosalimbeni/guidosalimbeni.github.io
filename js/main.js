document.addEventListener("DOMContentLoaded", function () {
  // Project data - can be replaced with real data later
  const projectsData = [
    {
      id: 1,
      title: "AI Art Generation",
      description:
        "Exploring the boundaries of creativity with machine learning algorithms to generate unique artistic expressions.",
      image: "https://via.placeholder.com/300x200",
      url: "#project1",
    },
    {
      id: 2,
      title: "Data Visualization",
      description:
        "Interactive data visualization tools that transform complex datasets into meaningful and accessible insights.",
      image: "https://via.placeholder.com/300x200",
      url: "#project2",
    },
    {
      id: 3,
      title: "Research Publications",
      description:
        "Academic research exploring the intersection of artificial intelligence, computational creativity, and traditional art forms.",
      image: "https://via.placeholder.com/300x200",
      url: "#project3",
    },
    {
      id: 4,
      title: "AI Consulting",
      description:
        "Strategic consulting services helping organizations leverage AI technologies for business growth and innovation.",
      image: "https://via.placeholder.com/300x200",
      url: "#project4",
    },
  ];

  // Function to create a project card element
  function createProjectCard(project) {
    return `
      <div class="col-md-6 col-lg-3" data-project-id="${project.id}">
        <div class="project-card card h-100">
          <img
            src="${project.image}"
            class="card-img-top"
            alt="${project.title}"
          />
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
