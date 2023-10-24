// gsap.registerPlugin(ScrollTrigger);

// const textContainer = document.querySelector(".text-container");

// const textGradientAnimation = gsap.to(textContainer, {
//   backgroundPosition: "100% 50%",
//   duration: 1, // Тривалість анімації (змініть на ваш вибір)
//   ease: "none",
// });

// const allSections = gsap.utils.toArray(".section");
// const allSectionsNotFirst = allSections.slice(1);

// gsap.set(allSections[0], { yPercent: -100 });

// const fade = gsap.timeline({ defaults: { duration: 1, stagger: 1 } })
//   .to(allSectionsNotFirst, { yPercent: -100 })
//   .to(".section", { opacity: 0 }, 0);

// ScrollTrigger.create({
//   trigger: ".component",
//   start: "top top",
//   endTrigger: ".section:last-child", // Вказуємо останню секцію як точку завершення
//   end: "bottom 50%", // Вказуємо позицію, коли анімація завершується
//   pin: true,
//   animation: fade,
//   scrub: 0.3,
//   markers: true,
//   onUpdate: () => {
//     textGradientAnimation.update();
//   },
// });



var next = 1,
    tt = 3000; // 'total time'

var allSections = gsap.utils.toArray(".section");
var allSectionsNotFirst = allSections.slice(1);

gsap.set(allSections[0], { yPercent: -100 });

var fade = gsap.timeline({ defaults: { duration: 2, stagger: next } })
  .to(allSectionsNotFirst, { yPercent: -100})
  .to('.section', { opacity: 0 }, 0);

ScrollTrigger.create({
  trigger: '.component',
  start: 'top top',
  end: '+=' + tt,
  pin: true,
  animation: fade,
  scrub: 0.3,
  // markers: true,
});

// Оголошення паралаксу для фону
ScrollTrigger.create({
  trigger: '.component',
  start: 'top top',
  end: '+=' + tt,
  onUpdate: self => {
    const progress = self.progress; // Отримання прогресу прокрутки (від 0 до 1)
    const yOffset = progress * 100; // Максимальний рух фону, визначений вами
    gsap.to('.bg', { yPercent: -yOffset });
  },
});


// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     const sections = Array.from(document.querySelectorAll(".section"));

//     const animations = sections.map((section, index) => {
//         return gsap.fromTo(section, {
//             y: index * 100, // Початкова позиція Y (різна для кожної секції)
//             opacity: 0, // Початкова прозорість
//         }, {
//             y: (index - 1) * 100, // Кінцева позиція Y (різна для кожної секції)
//             opacity: 1, // Кінцева прозорість
//             duration: 1,
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 20%",
//                 end: "top 80%",
//                 toggleActions: "play none none reverse",
//                 markers: true,
//                 scrub:true,
//                 pin:true,

//             },
//         });
//     });

//     // Створення загального timeline
//     const timeline = gsap.timeline();

//     // Додавання анімацій до загального timeline
//     timeline.add(animations);

//     // Запуск анімації
//     timeline.play();
// });




















