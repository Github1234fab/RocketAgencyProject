let header = document.querySelector(".header");
let marquee_wrapper = document.querySelector(".marquee_wrapper");

let rocket = document.querySelector(".rocket_wrapper");
let flame = document.querySelector(".flame");


// ++++++++++++++++++++++++++
// ++++++++++++++++++++++++++
//     STARS
// ++++++++++++++++++++++++++
// ++++++++++++++++++++++++++


for (let i = 0; i < 400; i++) {
   let starsA = document.createElement("div");

   starsA.classList.add("stars");
   starsA.style.width = Math.floor(Math.random() * 1 + 1) + "px";
   starsA.style.left = Math.random() * innerWidth + "px";
   starsA.style.top = Math.random() * innerHeight + "px";
   starsA.style.backgroundColor = "yellow";
   if (window.innerWidth < 770) {
      starsA.style.top = Math.random() * 1.5 * innerWidth + "px";
   }

   header.appendChild(starsA);
}

const explosionAudio = document.querySelector(".explosion");
for (let i = 0; i < 2; i++) {
   let clone = rocket.cloneNode(true); // Créer un clone de la balise rocket
   clone.style.left = Math.random() * innerWidth + "px";
   clone.style.height = Math.floor(Math.random() * 50 + 10) + "px";
   header.appendChild(clone);
}
CustomEase.create(
   "custom",
   "M0,0 C0.023,0.07 0.356,0.104 0.41,0.186 0.65,0.551 0.544,1.09 0.634,1.228 0.721,1.363 0.926,1.282 1,1.282 "
);

const rockets = document.querySelectorAll(".rocket_wrapper");
const audioExplosion = document.querySelector(".explosion");
const test = document.querySelector(".test");
const rocketa = document.querySelector(".rocket");

rockets.forEach((rocket, index) => {
   const playAudio = new Audio("./assets/sf_explosion_01.mp3");

   // =========================================
   // =========================================
   //ANIMATION AU SCROLL
   // =========================================
   // =========================================

   gsap.to(rocket, {
      y: -680,
      duration: 1.3,
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
   },
});

gsap.to(".sectionB", {
   opacity: 1,
   duration: 1,
   scrollTrigger: {
      trigger: ".marquee_wrapper",
      start: "top",
   },
});

gsap.to(".moon", {
   y: -270,
   duration: 4,
   scrollTrigger: {
      trigger: ".header",
      start: "top",
      end: "top -4px",
      toggleActions: "play none reverse none",
   },
});

gsap.to(".sectionA_container_services", {
   y: -200,
   duration: 1,
   scrollTrigger: {
      trigger: ".sectionA",
      start: "top -30%",
      end: "top ",
      toggleActions: "play none reverse none",
   },
});
gsap.to(".featuresBenefits-h2", {
   x: 30,
   duration: 1,
   scrollTrigger: {
      trigger: ".header",
      start: "top -10%",
      end: "center 30% ",
      toggleActions: "play none reverse none",
   },
});
gsap.to(".featuresBenefits-h3", {
   x: 40,
   duration: 2,
   scrollTrigger: {
      trigger: ".header",
      start: "top -20%",
      end: "center 30% ",
      toggleActions: "play none reverse none",
   },
});
gsap.to(".featuresBenefits-h4", {
   x: 40,
   duration: 3,
   scrollTrigger: {
      trigger: ".header",
      start: "top -20%",
      end: "center 30% ",
      toggleActions: "play none reverse none",
   },
});

// ++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++
//   Déplacement containers services pour smartphone
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++

if (window.innerWidth < 768) {
   gsap.fromTo(
      ".service1 ",
      {
         x: 0,
      },
      {
         x: 30,
         // duration: 1,
         scrollTrigger: {
            trigger: ".sectionCTA",
            start: "top -200px",
            end: "center -100%",
            toggleActions: "play none reverse none",
         },
      }
   );
   gsap.fromTo(
      ".service2 ",
      {
         x: 0,
      },
      {
         x: -30,
         // marginBottom: 50,
         // duration: 1,
         scrollTrigger: {
            trigger: ".sectionCTA",
            start: "top -400px",
            end: "center -100%",
            toggleActions: "play none reverse none",
         },
      }
   );
   gsap.fromTo(
      ".service3 ",
      {
         x: 0,
      },
      {
         x: 30,
         // marginBottom: 50,
         // duration: 1,
         scrollTrigger: {
            trigger: ".sectionCTA",
            start: "top -600px",
            end: "center -100%",
            toggleActions: "play none reverse none",
         },
      }
   );
   gsap.fromTo(
      ".service4 ",
      {
         x: 0,
      },
      {
         x: -30,
         // marginBottom: 50,
         // duration: 1,
         scrollTrigger: {
            trigger: ".sectionCTA",
            start: "top -800px",
            end: "center -100%",
            toggleActions: "play none reverse none",
         },
      }
   );
   gsap.fromTo(
      ".service5 ",
      {
         x: 0,
      },
      {
         x: 30,
         // marginBottom: 50,
         // duration: 1,
         scrollTrigger: {
            trigger: ".sectionCTA",
            start: "top -1000px",
            end: "bottom",
            toggleActions: "play none reverse none",
         },
      }
   );
}

// ++++++++++++++++++++
//   +++++++++++++++++++
//     ++++++++++++

if (window.innerWidth >= 768) {
   gsap.to(".service1 ", {
      x: 150,
      duration: 2,
      scrollTrigger: {
         trigger: ".sectionCTA",
         start: "top -100px",
         end: "center -100%",
         toggleActions: "play none reverse none",
      },
   });
   gsap.to(".service2 ", {
      x: -150,
      // marginBottom: 50,
      duration: 2,
      scrollTrigger: {
         trigger: ".sectionCTA",
         start: "top -400px",
         end: "center -100%",
         toggleActions: "play none reverse none",
      },
   });
   gsap.to(".service3 ", {
      x: 150,
      // marginBottom: 50,
      duration: 2,
      scrollTrigger: {
         trigger: ".sectionCTA",
         start: "top -600px",
         end: "center -100%",
         toggleActions: "play none reverse none",
      },
   });
   gsap.to(".service4 ", {
      x: -150,
      // marginBottom: 50,
      duration: 2,
      scrollTrigger: {
         trigger: ".sectionCTA",
         start: "top -800px",
         end: "center -100%",
         toggleActions: "play none reverse none",
      },
   });
   gsap.to(".service5 ", {
      x: 150,
      // marginBottom: 50,
      duration: 2,
      scrollTrigger: {
         trigger: ".sectionCTA",
         start: "top -1000px",
         end: "bottom",
         toggleActions: "play none reverse none",
      },
   });
}

// =========================================
// =========================================
// TYPEWRITTER
// =========================================
// =========================================

let autoTxt = document.querySelector(".auto_text");
gsap.to(".auto_text", {
   scrollTrigger: {
      trigger: ".sectionCTA",
      start: "top",
      end: "center",
      // toggleActions: "play none reverse none",
      onUpdate: function () {
         var typewriter = new Typewriter(autoTxt, {
            // loop: true,
         });

         typewriter
            .changeDelay(50)
            .typeString("Votre succes ")
            .typeString("depend de notre ")
            .typeString("qulate ")
            .pauseFor(400)
            .deleteChars(7)
            .typeString("qualite ")
            .pauseFor(600)
            .typeString("d'e")
            .pauseFor(400)
            .typeString("coute")
            .pauseFor(1000)
            .typeString(". ! ")
            .start();
      },
   },
});

// =========================================
// =========================================
// AUDIO SUR CLICK MENU
// =========================================
// =========================================

const sonar = document.querySelector(".sonar");
const menuTitle = document.querySelectorAll(".menu_title");
console.log(menuTitle);

menuTitle.forEach(function (menuTitle) {
   menuTitle.addEventListener("click", function () {
      console.log("ok");
      const audio = new Audio(sonar.src);
      audio.volume = 0.1;
      audio.play();
      this.dataset.translate =
         this.dataset.translate == "false" ? "true" : "false";
      if (this.dataset.translate == "true") {
         this.style.transform = "translateY(10px)";
         audio.volume = 0.1;
      } else {
         this.style.transform = "translateY(0px)";
         audio.volume = 0.1;
      }
   });
});

const buttons = document.querySelectorAll(".button_astonaut_choice");
console.log(buttons);
const autoTextAnswer = document.querySelector(".auto_text_answer");

const txt =
   "Le succès de votre communication dépend de notre qualité d'écoute.";

// =========================================
// =========================================
// ANIMATION BACKGROUND FEATURES IMG3
// =========================================
// =========================================

let wrapperFeatures1 = document.querySelector(".wrapper-features-img1");
let backgroundColorFeatures1 = document.querySelector(
   ".backgroundColor-features-img1"
);

// Écouter l'événement "mouseenter"
wrapperFeatures1.addEventListener("mouseenter", function () {
   backgroundColorFeatures1.style.transform = "translateX(-7px)";
   backgroundColorFeatures1.style.transition = "1s";
});

// Écouter l'événement "mouseleave"
wrapperFeatures1.addEventListener("mouseleave", function () {
   backgroundColorFeatures1.style.transform = "translateX(190px)";
   backgroundColorFeatures1.style.transition = "1s";
});

// =========================================
// =========================================
// ANIMATION BACKGROUND FEATURES IMG2
// =========================================
// =========================================

let wrapperFeatures2 = document.querySelector(".wrapper-features-img2");
let backgroundColorFeatures2 = document.querySelector(
   ".backgroundColor-features-img2"
);

// Écouter l'événement "mouseenter"
wrapperFeatures2.addEventListener("mouseenter", function () {
   backgroundColorFeatures2.style.transform = "translateX(-7px)";
   backgroundColorFeatures2.style.transition = "1s";
});

// Écouter l'événement "mouseleave"
wrapperFeatures2.addEventListener("mouseleave", function () {
   backgroundColorFeatures2.style.transform = "translateX(190px)";
   backgroundColorFeatures2.style.transition = "1s";
});

// =========================================
// =========================================
// ANIMATION BACKGROUND FEATURES IMG3
// =========================================
// =========================================

let wrapperFeatures3 = document.querySelector(".wrapper-features-img3");
let backgroundColorFeatures3 = document.querySelector(
   ".backgroundColor-features-img3"
);

// Écouter l'événement "mouseenter"
wrapperFeatures3.addEventListener("mouseenter", function () {
   backgroundColorFeatures3.style.transform = "translateX(-23px)";
   backgroundColorFeatures3.style.transition = "1s";
});

// Écouter l'événement "mouseleave"
wrapperFeatures3.addEventListener("mouseleave", function () {
   backgroundColorFeatures3.style.transform = "translateX(190px)";
   backgroundColorFeatures3.style.transition = "1s";
});

// =========================================
// =========================================
// ANIMATION TOGGLE menuIcon
// =========================================
// =========================================

const burger = document.querySelector(".burger");
let headerMenuHamburger = document.querySelector(".header-menu-hamburger");
let isActive = false;

burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   isActive = !isActive; // Inverser l'état de la variable isActive
   if (isActive) {
      headerMenuHamburger.classList.add("header-menu-hamburger-visible");
   } else {
      headerMenuHamburger.classList.remove("header-menu-hamburger-visible");
      // Le code à exécuter lorsque la classe "active" n'est plus présente
   }
});

// =========================================
// =========================================
// WRAPPER SOCIAL PROOF APPARATION TEXTE FULL
// =========================================
// =========================================

let bloc = document.querySelectorAll(".bloc");

bloc.forEach((element) => {
   element.addEventListener("mouseenter", textToFullText);

   let fullText = element.querySelector(".full-text");
   let textEllipisis = element.querySelector(".social-proof");

   function textToFullText() {
      fullText.style.display = "block";
      textEllipisis.style.display = "none";
      console.log("ok");
   }

   element.addEventListener("mouseleave", fullTextTotext);

   function fullTextTotext() {
      fullText.style.display = "none";
      textEllipisis.style.display = "block";
      console.log("ok");
   }
});

// let menuIcon = document.querySelector(".menu-icon");
// let menuIconCross = document.querySelector(".menu-icon-cross");
// let headerMenuHamburger = document.querySelector(".header-menu-hamburger");

// if (window.innerWidth < 778) {
//   console.log("okkok");
//   menuIcon.addEventListener("click", function () {
//     this.dataset.menuIcon = this.dataset.menuIcon === "true" ? "false" : "true";
//     this.dataset.menuIconCross = this.dataset.menuIconCross === "true" ? "false" : "true";
//     if (this.dataset.menuIcon == "true") {
//       headerMenuHamburger.classList.add("header-menu-hamburger-visible");
//       this.dataset.menuIconCross == "true";
//       menuIcon.style.display = "none";
//       menuIconCross.style.visibility = "visible";

//       menuIcon.style.transition = ".300s ease-in-out";

//       console.log("ok");
//     }
//   });
//   menuIconCross.addEventListener("click", function () {
//     this.dataset.menuIcon = this.dataset.menuIcon === "true" ? "false" : "true";
//     this.dataset.menuIconCross = this.dataset.menuIconCross === "true" ? "false" : "true";
//     if (this.dataset.menuIconCross == "true") {
//       headerMenuHamburger.classList.remove("header-menu-hamburger-visible");
//       this.dataset.menuIcon == "false";
//       menuIcon.style.display= "block";
//       menuIconCross.style.visibility = "hidden";

//       menuIcon.style.transition = ".300s ease-in-out";

//       console.log("ok");
//     }
//   });
// }

// else {
//   console.log("nok");
//    headerMenuHamburger.style.transition = "top 0.7s ease-in-out";
//   headerMenuHamburger.classList.remove("header-menu-hamburger-visible");
//   menuIcon.style.visibility= "visible";
//   menuIconCross.style.display = "none";
//   menuIcon.style.transition = ".300s ease-in-out";
// }
// headerMenuHamburger.style.transition = ".600s ease-in-out";
//   });
// }

// for (let i = 0; i <2700; i++) {
//   let starsA = document.createElement("div");

//   starsA.classList.add("stars");
//   starsA.style.width = Math.floor(Math.random() * 1 + 1) + "px";
//   starsA.style.left = Math.random() * innerWidth + "px";
//   starsA.style.top = Math.random() * innerWidth + "px";
//   starsA.style.backgroundColor = "yellow";
//   if (window.innerWidth < 770) {
//     starsA.style.top = Math.random() * 1.5 * innerWidth + "px";
//   }

//   header.appendChild(starsA);
// }

// ______________________________________________
// ______________________________________________
// animation bouton header
// ______________________________________________
// ______________________________________________

// let buttonHeader = document.querySelector(".promiseValue-cta");
// let buttonFlash = document.querySelector(".flash-button")

// buttonHeader.addEventListener("mouseenter", change);

// function change() {
//   buttonFlash.style.transform = "scale(3)";
//   buttonFlash.style.opacity = "0";
// }

// wrapperFeatures.addEventListener("mouseenter", function () {
//   this.dataset.backgroundColorFeatures = this.dataset.backgroundColorFeatures === "false" ? "true" : "false";
//   if (this.dataset.backgroundColorFeatures == "true") {
//     backgroundColorFeatures.style.transform = "translateX(0px)";
//     backgroundColorFeatures.style.transition = "1s";
//   } else {
//     backgroundColorFeatures.style.transform = "translateX(150px)";
//     backgroundColorFeatures.style.transition = "1s";
//   }
// });

// buttons.forEach((buttons) =>
//   buttons.addEventListener("click", function () {
//     this.dataset.choice = this.dataset.choice == "1" ? "2" : "1";

//     if (this.dataset.choice === "2") {
//       console.log(txt2);
//       autoTextAnswer.textContent = txt2;
//       autoTextAnswer.classList.add("auto_text");
//     } else if (this.dataset.choice === "1") {
//       autoTextAnswer.textContent = txt3;
//       autoTextAnswer.classList.add("auto_text");
//       console.log(txt3);
//     }
//   })
// );

// const satelit = document.querySelector(".satelit");
// const headerMenu = document.querySelector(".header_menu_invisible");
// const headerMenuVisible = document.querySelector(".header_menu");

// satelit.addEventListener("click", function () {
//   this.dataset.menu = this.dataset.menu == "false" ? "true" : "false";
//   if (this.dataset.menu == "true") {
//     headerMenu.classList.add("header_menu");
//     headerMenu.style.opacity = 1;
//     satelit.style.animationName = "noBounce";
//     satelit.style.translateX = "0px";
//   } else {
//     headerMenu.classList.remove("header_menu");
//     satelit.style.animationName = "bounce";
//   }
// });
