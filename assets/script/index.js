const btnOpenSidebar = document.querySelector(".header__more__btn_sidebar");
const sidebar = document.querySelector(".sidebar");
const btnCloseSidebar = document.querySelector(
  ".sidebar__sidebar_header__btn--close"
);
const backdrop = document.querySelector(".backdrop");
const category = document.querySelector(".section__list");
const btnDown = document.querySelector(
  ".section__list__item__content__btn_down"
);

btnOpenSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--closed");
  backdrop.classList.toggle("nofill");
});

btnCloseSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--closed");
  backdrop.classList.toggle("nofill");
});

backdrop.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--closed");
  backdrop.classList.toggle("nofill");
});

btnDown.addEventListener("click", () => {
  category.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
});
