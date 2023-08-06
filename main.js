let header = document.querySelector(".header");
let marquee_wrapper = document.querySelector(".marquee_wrapper");

for (let i = 0; i < 750; i++) {
  let starsA = document.createElement("div");

  starsA.classList.add("stars");
  starsA.style.width = Math.floor(Math.random() * 1 + 1) + "px";
  starsA.style.left = Math.random() * innerWidth + "px";
  starsA.style.top = Math.random() * innerWidth + "px";
  starsA.style.backgroundColor = "yellow";
  if (window.innerWidth < 770) {
    starsA.style.top = Math.random() * 1.5 * innerWidth + "px";
  }

  header.appendChild(starsA);
}

let rocket = document.querySelector(".rocket_wrapper");
let flame = document.querySelector(".flame");

const explosionAudio = document.querySelector(".explosion");
for (let i = 0; i < 2; i++) {
  let clone = rocket.cloneNode(true); // Créer un clone de la balise rocket
  clone.style.left = Math.random() * innerWidth + "px";
  clone.style.height = Math.floor(Math.random() * 50 + 10) + "px";
  header.appendChild(clone);
}
CustomEase.create("custom", "M0,0 C0.023,0.07 0.356,0.104 0.41,0.186 0.65,0.551 0.544,1.09 0.634,1.228 0.721,1.363 0.926,1.282 1,1.282 ");

const rockets = document.querySelectorAll(".rocket_wrapper");
const audioExplosion = document.querySelector(".explosion");
const test = document.querySelector(".test");
const rocketa = document.querySelector(".rocket");

rockets.forEach((rocket, index) => {
  const playAudio = new Audio("./assets/sf_explosion_01.mp3");

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
  duration: 2,
  scrollTrigger: {
    trigger: ".header",
    start: "top -20%",
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
gsap.to(".service1 ", {
  x: 150,
  marginBottom: 50,
  duration: 2,
  scrollTrigger: {
    trigger: ".sectionCTA",
    start: "top -200px",
    end: "center -100%",
    toggleActions: "play none reverse none",
  },
});
gsap.to(".service2 ", {
  x: -150,
  marginBottom: 50,
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
  marginBottom: 50,
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
  marginBottom: 50,
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
  marginBottom: 50,
  duration: 2,
  scrollTrigger: {
    trigger: ".sectionCTA",
    start: "top -1000px",
    end: "bottom",
    toggleActions: "play none reverse none",
  },
});




if (window.innerWidth < 768) {
  gsap.to(".service1 ", {
    x: 50,
    marginBottom: 50,
    duration: 2,
    scrollTrigger: {
      trigger: ".sectionCTA",
      start: "top -200px",
      end: "center -100%",
      toggleActions: "play none reverse none",
    },
  });
  gsap.to(".service2 ", {
    x: -50,
    marginBottom: 50,
    duration: 2,
    scrollTrigger: {
      trigger: ".sectionCTA",
      start: "top -400px",
      end: "center -100%",
      toggleActions: "play none reverse none",
    },
  });
  gsap.to(".service3 ", {
    x: 50,
    marginBottom: 50,
    duration: 2,
    scrollTrigger: {
      trigger: ".sectionCTA",
      start: "top -600px",
      end: "center -100%",
      toggleActions: "play none reverse none",
    },
  });
  gsap.to(".service4 ", {
    x: -50,
    marginBottom: 50,
    duration: 2,
    scrollTrigger: {
      trigger: ".sectionCTA",
      start: "top -800px",
      end: "center -100%",
      toggleActions: "play none reverse none",
    },
  });
  gsap.to(".service5 ", {
    x: 50,
    marginBottom: 50,
    duration: 2,
    scrollTrigger: {
      trigger: ".sectionCTA",
      start: "top -1000px",
      end: "bottom",
      toggleActions: "play none reverse none",
    },
  });
}








let autoTxt = document.querySelector(".auto_text");
gsap.to(".auto_text", {
  scrollTrigger: {
    trigger: ".sectionCTA",
    start: "center 40%",
    end: "bottom ",
    toggleActions: "play none reverse none",
    onUpdate: function () {
      var typewriter = new Typewriter(autoTxt, {
        // loop: true,
      });

      typewriter
        .changeDelay(50)
        .typeString("Votre succes ")
        .typeString("depend de notre ")
        .pauseFor(400)
        .typeString("qult ")
        .deleteChars(5)
        .typeString("qualite ")
        .pauseFor(1000)
        .typeString("d'ecoute . ")
        .pauseFor(1000)
        .typeString("C'est la le coeur meme ")
        .pauseFor(500)
        .typeString("de notre metier. ")
        .start();
    },
  },
});

const sonar = document.querySelector(".sonar");
const menuTitle = document.querySelectorAll(".menu_title");
console.log(menuTitle);

menuTitle.forEach(function (menuTitle) {
  menuTitle.addEventListener("click", function () {
    console.log("ok");
    const audio = new Audio(sonar.src);
    audio.volume = 0.1;
    audio.play();
    this.dataset.translate = this.dataset.translate == "false" ? "true" : "false";
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

const txt = "Le succès de votre communication dépend de notre qualité d'écoute.";

// ###################################################### animation background features img1

let wrapperFeatures1 = document.querySelector(".wrapper-features-img1");
let backgroundColorFeatures1 = document.querySelector(".backgroundColor-features-img1");

// Écouter l'événement "mouseenter"
wrapperFeatures1.addEventListener("mouseenter", function () {
  backgroundColorFeatures1.style.transform = "translateX(-30px)";
  backgroundColorFeatures1.style.transition = "1s";
});

// Écouter l'événement "mouseleave"
wrapperFeatures1.addEventListener("mouseleave", function () {
  backgroundColorFeatures1.style.transform = "translateX(150px)";
  backgroundColorFeatures1.style.transition = "1s";
});

// ###################################################### animation background features img2

let wrapperFeatures2 = document.querySelector(".wrapper-features-img2");
let backgroundColorFeatures2 = document.querySelector(".backgroundColor-features-img2");

// Écouter l'événement "mouseenter"
wrapperFeatures2.addEventListener("mouseenter", function () {
  backgroundColorFeatures2.style.transform = "translateX(-30px)";
  backgroundColorFeatures2.style.transition = "1s";
});

// Écouter l'événement "mouseleave"
wrapperFeatures2.addEventListener("mouseleave", function () {
  backgroundColorFeatures2.style.transform = "translateX(150px)";
  backgroundColorFeatures2.style.transition = "1s";
});

// ###################################################### animation background features img3

let wrapperFeatures3 = document.querySelector(".wrapper-features-img3");
let backgroundColorFeatures3 = document.querySelector(".backgroundColor-features-img3");

// Écouter l'événement "mouseenter"
wrapperFeatures3.addEventListener("mouseenter", function () {
  backgroundColorFeatures3.style.transform = "translateX(-30px)";
  backgroundColorFeatures3.style.transition = "1s";
});

// Écouter l'événement "mouseleave"
wrapperFeatures3.addEventListener("mouseleave", function () {
  backgroundColorFeatures3.style.transform = "translateX(150px)";
  backgroundColorFeatures3.style.transition = "1s";
});

let menuIcon = document.querySelector(".menu-icon");
let headerMenu = document.querySelector(".header_menu");

menuIcon.addEventListener("click", function () {
  this.dataset.menuIcon = this.dataset.menuIcon === "true" ? "false" : "true";
  if (this.dataset.menuIcon == "true") {
    headerMenu.style.transform = "translateY(10px)";
    console.log("ok")
  } else {
     console.log("nok");
    headerMenu.style.transform = "translateY(-150px)";
  }
  headerMenu.style.transition = "transform 1s ease-in-out";
});






















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
