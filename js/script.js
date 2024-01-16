// 클릭시 해당 페이지로 이동 (스크롤 : 부드럽게)
if (document.getElementById("my-work-button")) {
  document.getElementById("my-work-button").addEventListener("click", () => {
    document.getElementById("my-work-section").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
}
const hamburger = document.querySelector(".hamburger");
const hamburgerbg = document.querySelector(".hamburger-bg");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
hamburgerbg.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  hamburgerbg.classList.toggle("active");
  navMenu.classList.toggle("active");
}
// 메뉴 클릭시 메뉴바가 사라지도록
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// 다크모드 이벤트 핸들링
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
//버튼 클릭시 스위치 되면서 다크모드
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//새로고침해도 지정되어있던 모드로 진행되도록
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

//다크모드 or 기본모드인지 저장해줌.

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//footer의 버전을 년마다 변경되도록

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;
