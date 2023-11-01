var next = 1,
    tt = 3000; // 'total time'

var allSections = gsap.utils.toArray(".section");
var allSectionsNotFirst = allSections.slice(1);

gsap.set(allSections[0], { yPercent: -100 });

var fade = gsap.timeline({ defaults: { duration: 2, stagger: next } })
  .to(allSectionsNotFirst, { yPercent: -100, scale: 0.9, y: "+=20" }) // Додали зміну розміру
  .to('.section', { opacity: 0, scale: 0.9 }, 0); // Додали зміну розміру

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


gsap.registerPlugin(ScrollTrigger);

const textContainer = document.querySelector(".text-container");

const startColor = "#000000"; // Початковий колір тексту (чорний)
const endColor = "#0FCD94"; // Кінцевий колір тексту (білий)

const textGradientAnimation = gsap.to(textContainer, {
  color: startColor, // Початковий колір тексту
  duration: 1, // Тривалість анімації (змініть на ваш вибір)
  scrollTrigger: {
    trigger: ".section__three", // Секція, яка активує анімацію
    start: "top center", // Точка початку анімації
    end: "bottom center", // Точка завершення анімації
    scrub: true, // Плавне відтворення анімації при прокручуванні
    // markers: true,
    ease: "none", 
    onUpdate: (self) => {
      // Функція викликається при кожному оновленні
      const progress = self.progress; // Прогрес прокрутки від 0 до 1
      const newColor = interpolateColors(startColor, endColor, progress); // Розрахунок проміжного кольору
      textContainer.style.color = newColor; // Зміна кольору тексту
    },
  },
});

// Функція для інтерполяції кольорів
function interpolateColors(startColor, endColor, progress) {
  const r1 = parseInt(startColor.slice(1, 3), 16);
  const g1 = parseInt(startColor.slice(3, 5), 16);
  const b1 = parseInt(startColor.slice(5, 7), 16);

  const r2 = parseInt(endColor.slice(1, 3), 16);
  const g2 = parseInt(endColor.slice(3, 5), 16);
  const b2 = parseInt(endColor.slice(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * progress);
  const g = Math.round(g1 + (g2 - g1) * progress);
  const b = Math.round(b1 + (b2 - b1) * progress);

  return `rgb(${r}, ${g}, ${b})`;
}

// Паралакс для секції
gsap.to(".section__three", {
  y: "-30%", // Зміна положення секції по вертикалі
  scrollTrigger: {
    trigger: ".section__three", // Секція, яка активує анімацію
    start: "top top", // Точка початку анімації
    end: "bottom bottom", // Точка завершення анімації
    scrub: true, // Плавне відтворення анімації при прокручуванні
  },
});





















