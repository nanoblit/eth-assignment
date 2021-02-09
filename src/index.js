import MicroModal from "micromodal";

import "./styles/reset.css";
import "./styles/main.css";
import "./styles/nav.css";
import "./styles/social.css";
import "./styles/call-to-action.css";
import "./styles/team.css";
import "./styles/contact-us.css";
import "./styles/footer.css";
import "./styles/modal.css";

MicroModal.init({ awaitCloseAnimation: true });

window.onload = function() {
  setupDots(
    document.querySelector(".team-members"),
    document.querySelector(".team-scroll-dots")
  );
  setupNav();
} 

function setupDots(scrollable, dotsContainer) {
  const dots = [...dotsContainer.querySelectorAll(".team-dot")];

  function updateDotsVisibility() {
    if (scrollable.scrollWidth <= scrollable.clientWidth) {
      dotsContainer.style.display = "none";
    } else {
      dotsContainer.style.display = "flex";
    }
  }

  function updateDotsColor() {
    const scrollMiddlePosition =
      scrollable.scrollLeft + scrollable.clientWidth / 2;
    const clientMiddlePosition = scrollable.scrollWidth / 2;

    if (scrollMiddlePosition < clientMiddlePosition) {
      dots[0].classList.add("team-dot--active");
      dots[1].classList.remove("team-dot--active");
    } else {
      dots[0].classList.remove("team-dot--active");
      dots[1].classList.add("team-dot--active");
    }
  }

  updateDotsVisibility();
  updateDotsColor();
  
  dots[0].addEventListener("click", () => {
    scrollable.scrollLeft = 0;
  });
  dots[1].addEventListener("click", () => {
    scrollable.scrollLeft = scrollable.scrollWidth;
  });

  window.addEventListener("resize", updateDotsColor);
  window.addEventListener("resize", updateDotsVisibility);
  scrollable.addEventListener("scroll", updateDotsColor);
  scrollable.addEventListener("scroll", updateDotsVisibility);
}

function setupNav() {
  const teamElem = document.querySelector("#team");
  const contactElem = document.querySelector("#contact-us");

  const icoNavElem = document.querySelector("#ico-nav");
  const teamNavElem = document.querySelector("#team-nav");
  const contactNavElem = document.querySelector("#contact-nav");

  function setSelectedLink() {
    const teamRect = teamElem.getBoundingClientRect();
    const contactRect = contactElem.getBoundingClientRect();

    if (contactRect.top <= window.innerHeight / 2) {
      icoNavElem.classList.remove("nav-link--selected");
      teamNavElem.classList.remove("nav-link--selected");
      contactNavElem.classList.add("nav-link--selected");
    } else if (teamRect.top <= window.innerHeight / 2) {
      icoNavElem.classList.remove("nav-link--selected");
      teamNavElem.classList.add("nav-link--selected");
      contactNavElem.classList.remove("nav-link--selected");
    } else {
      icoNavElem.classList.add("nav-link--selected");
      teamNavElem.classList.remove("nav-link--selected");
      contactNavElem.classList.remove("nav-link--selected");
    }
  }

  setSelectedLink();

  document.addEventListener("scroll", setSelectedLink);
}
