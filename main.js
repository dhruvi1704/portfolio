// === Projects Array (Global Scope) ===
const projects = [
  {
    number: "01",
    title: "Xplore On",
    description: "Plan your next trip with real-time budget optimization",
    tech: "React.js, Node.js, Express.js, MongoDB, stripe API, Tailwind CSS",
    github: "https://github.com/jemishkevadiya/XploreOn_Frontend",
    live: "#",
    details: {
      capstoneProject: "Capstone Project",
      projectSummary:
        "XploreOn is a budget-friendly trip planning app that helps users plan and book flights, hotels, and activities based on their budget. It ensures a smooth and cost-effective travel experience.",
      projectVision:
        "To simplify travel planning by providing personalized recommendations, real-time pricing, and secure booking options, making budget-conscious trips hassle-free.",
      projectBusinessRequirements:
        "User authentication and profile management ,Budget-based trip recommendations,Real-time API integration for flights, hotels, and activities, Secure payments with Stripe,Responsive and user-friendly UI",
      projectPlan:
        "Sprint 1: User stories, wireframes, and UI design Sprint 2: Backend development with authentication & filtering Sprint 3: Payment integration and booking system Sprint 4: UI optimization, testing, and deployment",
      requirementsAnalysisDesign:
        "Tech Stack: React, Node.js, Express.js, MongoDB API Integration: Stripe for payments, Google Maps for locations Tools Used: Figma (UI), Postman (API testing), MongoDB Atlas",
      wireframesMockups:
        "Designed using Figma, focusing on a clean and intuitive UI for easy trip planning and booking.",
      statusReports:
        "Regular sprint reviews ensured timely progress. Key milestones included authentication setup, booking system implementation, and UI improvements.",
      systemImplementation:
        "Implemented using React for frontend, Node.js/Express for backend, and Firebase for authentication.",
    },
  },
  {
    number: "02",
    title: "XploreOn Mobile App",
    description: "A fully functional e-commerce store built using Swift.",
    tech: "Swift",
    github: "https://github.com/jemishkevadiya/XploreOn_MobileApp/tree/dhruvi",
    live: "xploreon.html",
  },
  {
    number: "03",
    title: "Blog",
    description:
      "A full-stack blog platform where users can read, upvote, and comment on articles. Features Firebase authentication, a MongoDB-powered database, and a modern React frontend.",
    tech: "React, Node.js, Express.js, MongoDB, Firebase Auth, Tailwind CSS",
    github: "https://github.com/dhruvi1704/my-blog-project",
    live: "blog-images.html",
  },
  {
    number: "04",
    title: "Portfolio Project",
    description:
      "A sleek and modern personal portfolio website.designed to showcase my projects, skills, and achievements. This website is fully responsive and features smooth animations, interactive UI components, and a dark theme aesthetic",
    tech: "Next.js, Tailwind CSS,Frame Motion",
    github: "https://github.com/dhruvi1704/portfolio",
    live: "portfolioimg.html",
  },
  {
    number: "05",
    title: "Weather dashboard",
    description:
      "An intuitive weather dashboard that provides real-time weather updates for any city. It integrates with external APIs to fetch and display temperature, humidity, wind speed, and forecast details. The user-friendly interface ensures a seamless experience.",
    tech: "React, Node.js, Express.js, OpenWeather API",
    github: "https://github.com/dhruvi1704/Weather_webApp",
    live: "weatherimg.html",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // === Typed.js  ===
  if (window.typedInstance) {
    window.typedInstance.destroy();
  }
  window.typedInstance = new Typed(".text", {
    strings: ["Full-stack Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // === Projects Carousel ===
  let currentIndex = 0;

  const projectHeading = document.getElementById("project-heading");
  const projectNumber = document.getElementById("project-number");
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const projectTech = document.getElementById("project-tech");
  const githubLink = document.getElementById("github-link");
  const liveLink = document.getElementById("live-link");
  const projectDetailsCapstone = document.getElementById(
    "project-details-capstone"
  );
  const projectDetailsSummary = document.getElementById(
    "project-details-summary"
  );
  const projectDetailsVision = document.getElementById(
    "project-details-vision"
  );
  const projectDetailsRequirements = document.getElementById(
    "project-details-requirements"
  );
  const projectDetailsPlan = document.getElementById("project-details-plan");
  const projectDetailsAnalysis = document.getElementById(
    "project-details-analysis"
  );
  const projectDetailsWireframes = document.getElementById(
    "project-details-wireframes"
  );
  const projectDetailsStatus = document.getElementById(
    "project-details-status"
  );
  const projectDetailsImplementation = document.getElementById(
    "project-details-implementation"
  );
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  function updateProject(index) {
    const project = projects[index];
    projectNumber.textContent = project.number;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectTech.textContent = project.tech;
    githubLink.href = project.github;
    liveLink.href = project.live;

    projectHeading.innerHTML =
      index === 0
        ? "Capstone <span>Project</span>"
        : "Latest <span>Projects</span>";
    if (index === 0 && project.details) {
      projectDetailsCapstone.innerHTML = `<strong>Capstone Project:</strong> ${
        project.details.capstoneProject || ""
      }`;
      projectDetailsSummary.innerHTML = `<strong>Project Summary:</strong> ${
        project.details.projectSummary || ""
      }`;
      projectDetailsVision.innerHTML = `<strong>Project Vision:</strong> ${
        project.details.projectVision || ""
      }`;
      projectDetailsRequirements.innerHTML = `<strong>Project/Business Requirements:</strong> ${
        project.details.projectBusinessRequirements || ""
      }`;
      projectDetailsPlan.innerHTML = `<strong>Project Plan:</strong> ${
        project.details.projectPlan || ""
      }`;
      projectDetailsAnalysis.innerHTML = `<strong>Requirements Analysis and Design:</strong> ${
        project.details.requirementsAnalysisDesign || ""
      }`;
      projectDetailsWireframes.innerHTML = `<strong>Wireframes/Mockups:</strong> ${
        project.details.wireframesMockups || ""
      }`;
      projectDetailsStatus.innerHTML = `<strong>Status Reports:</strong> ${
        project.details.statusReports || ""
      }`;
      projectDetailsImplementation.innerHTML = `<strong>System Implementation:</strong> ${
        project.details.systemImplementation || ""
      }`;
      projectDetailsCapstone.style.display = "block";
      projectDetailsSummary.style.display = "block";
      projectDetailsVision.style.display = "block";
      projectDetailsRequirements.style.display = "block";
      projectDetailsPlan.style.display = "block";
      projectDetailsAnalysis.style.display = "block";
      projectDetailsWireframes.style.display = "block";
      projectDetailsStatus.style.display = "block";
      projectDetailsImplementation.style.display = "block";
      console.log("Details populated for Xplore On");
    } else {
      projectDetailsCapstone.style.display = "none";
      projectDetailsSummary.style.display = "none";
      projectDetailsVision.style.display = "none";
      projectDetailsRequirements.style.display = "none";
      projectDetailsPlan.style.display = "none";
      projectDetailsAnalysis.style.display = "none";
      projectDetailsWireframes.style.display = "none";
      projectDetailsStatus.style.display = "none";
      projectDetailsImplementation.style.display = "none";
      console.log("Details hidden for project", index + 1);
    }
  }
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
      updateProject(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % projects.length;
      updateProject(currentIndex);
    });
  }

  updateProject(currentIndex);

  // === Project Section Dynamically ===
  const projectsContainer = document.querySelector("#projects-container");
  if (projectsContainer) {
    projects.forEach((project) => {
      const projectHTML = `
              <div class="project">
                  <h2>${project.number}. ${project.title}</h2>
                  <p>${project.description}</p>
                  <p><strong>Tech Stack:</strong> ${project.tech}</p>
                  <a href="${
                    project.github
                  }" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                  ${
                    project.live !== "#"
                      ? `<a href="${project.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
                      : ""
                  }
              </div>
          `;
      projectsContainer.innerHTML += projectHTML;
    });
  }

  // === Accordion Section ===
  document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
      const contentId = button.getAttribute("data-tab");
      const content = document.getElementById(contentId + "-content");

      document
        .querySelectorAll(".accordion-header")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".accordion-content")
        .forEach((c) => c.classList.remove("active"));

      button.classList.add("active");
      content.classList.add("active");
    });
  });

  const activeAccordion = document.querySelector(".accordion-header.active");
  if (activeAccordion) {
    activeAccordion.click();
  }

  // === Tab Switch ===
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
        content.classList.remove("active");
      });

      const tab = button.getAttribute("data-tab");
      const content = document.getElementById(`${tab}-content`);
      content.classList.remove("hidden");
      content.classList.add("active");

      document.getElementById("right-heading").textContent = button.textContent;
    });
  });

  const activeTab = document.querySelector(".tab-header.active");
  if (activeTab) {
    activeTab.click();
  }

  // === Contact Form Submission ===
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const successMessage = document.getElementById("success-message");

      if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      const formData = { name, email, message };

      try {
        const response = await fetch("http://127.0.0.1:5010/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          successMessage.textContent = "✅ Message sent successfully!";
          successMessage.style.display = "block";
          contactForm.reset();
        } else {
          alert("❌ " + (result.error || "Failed to send message."));
        }
      } catch (error) {
        console.error("Error:", error);
        alert("❌ Something went wrong. Try again later.");
      }
    });
  }
});
