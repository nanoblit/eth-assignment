import "./styles/reset.css";
import "./styles/main.css";
import "./styles/nav.css";
import "./styles/social.css";
import "./styles/call-to-action.css";
import "./styles/team.css";
import "./styles/contact-us.css";
import "./styles/footer.css";

setupDots(
  document.querySelector(".team-members"),
  document.querySelector(".team-scroll-dots")
);

function setupDots(scrollable, dotsContainer) {
  const dots = [...dotsContainer.querySelectorAll('.team-dot')];

  updateDotsVisibility();
  updateDotsColor();

  function updateDotsVisibility() {
    if (scrollable.scrollWidth === scrollable.clientWidth) {
      dotsContainer.style.display = "none";
    } else {
      dotsContainer.style.display = "flex";
    }
  }

  function updateDotsColor() {
    const scrollMiddlePosition = scrollable.scrollLeft + scrollable.clientWidth / 2;
    const clientMiddlePosition = scrollable.scrollWidth / 2;

    if (scrollMiddlePosition < clientMiddlePosition) {
      dots[0].classList.add('team-dot--active');
      dots[1].classList.remove('team-dot--active');
    } else {
      dots[0].classList.remove('team-dot--active');
      dots[1].classList.add('team-dot--active');
    }
  }

  window.addEventListener("resize", updateDotsVisibility);
  scrollable.addEventListener("scroll", updateDotsColor);
}
