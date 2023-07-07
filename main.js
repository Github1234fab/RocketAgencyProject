let header = document.querySelector(".header");
let marquee_wrapper = document.querySelector(".marquee_wrapper");

for (let i = 0; i < 550; i++) {
  let starsA = document.createElement("div");

  starsA.classList.add("stars");
  starsA.style.width = Math.floor(Math.random() * 2 + 1) + "px";
  starsA.style.left = Math.random() * innerWidth + "px";
  starsA.style.top = Math.random() * innerWidth + "px";
  starsA.style.boxShadow = "0px 0px 5px white";

  header.appendChild(starsA);
}

let rocket = document.querySelector(".rocket_wrapper");
let flame = document.querySelector(".flame");

for (let i = 0; i < 2; i++) {
  let clone = rocket.cloneNode(true); // Créer un clone de la balise rocket
  clone.style.left = Math.random() * innerWidth + "px";
  clone.style.height = Math.floor(Math.random() * 50 + 10) + "px";
  header.appendChild(clone);
}
CustomEase.create("custom", "M0,0 C0.023,0.07 0.356,0.104 0.41,0.186 0.65,0.551 0.544,1.09 0.634,1.228 0.721,1.363 0.926,1.282 1,1.282 ");

const rockets = document.querySelectorAll(".rocket_wrapper");

rockets.forEach((rocket, index) => {
  gsap.to(rocket, {
    y: -640,
    duration: 1,
    scrollTrigger: {
      trigger: ".header",
      start: "top",
      end: "top -4px",
      toggleActions: "play none reverse none",
    },
    delay: index * 1, // Délai d'exécution différent pour chaque fusée
  });
});

gsap.to(".sectionA", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".header",
    start: "top -15%",
  },
});

gsap.to(".marquee_wrapper", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".sectionA",
    start: "center 50%",
    scrub: 3,
  },
});

gsap.to(".sectionB", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".marquee_wrapper",
    start: "top",
    scrub: 3,
  },
});

gsap.to(".moon", {
  y: -280,
  duration: 3,
  scrollTrigger: {
    trigger: ".header",
    start: "top",
    end: "top -4px",
    toggleActions: "play none reverse none",
  },
});

gsap.to(".sectionA_container_titles", {
  y: -200,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".header",
    start: "center",
    // end: "bottom",
    toggleActions: "play none reverse none",
  },
});

const satelit = document.querySelector(".satelit");
const headerMenu = document.querySelector(".header_menu_invisible");
const headerMenuVisible = document.querySelector(".header_menu");

satelit.addEventListener("click", function () {
  this.dataset.menu = this.dataset.menu == "false" ? "true" : "false";
  if (this.dataset.menu == "true") {
    headerMenu.classList.add("header_menu");
    headerMenu.style.opacity = 1;
  } else {
    headerMenu.classList.remove("header_menu");
  }
});

const sonar = document.querySelector(".sonar");
const menuTitle = document.querySelectorAll(".menu_title");
console.log(menuTitle);

menuTitle.forEach(function (menuTitle) {
  menuTitle.addEventListener("click", function () {
    console.log("ok");
    const audio = new Audio(sonar.src);
    audio.play();
    this.dataset.translate = this.dataset.translate == "false" ? "true" : "false";
    if (this.dataset.translate == "true") {
      this.style.transform = "translateY(5px)";
    } else {
      this.style.transform = "translateY(0px)";
    }
  });
});
