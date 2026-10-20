const sparkles = document.querySelector('.sparkles');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function addSpark(burst = false) {
  const spark = document.createElement('span');
  spark.className = burst ? 'spark burst' : 'spark';
  spark.textContent = '✦';
  spark.style.setProperty('--x', `${12 + Math.random() * 75}%`);
  spark.style.setProperty('--y', `${8 + Math.random() * 76}%`);
  spark.style.setProperty('--size', `${7 + Math.random() * 12}px`);
  spark.style.setProperty('--duration', `${1.5 + Math.random() * 2}s`);
  spark.style.setProperty('--delay', `${-Math.random() * 4}s`);
  sparkles.append(spark);
  if (burst) setTimeout(() => spark.remove(), 1900);
}

for (let i = 0; i < 24; i++) addSpark();

document.querySelector('#rose-button').addEventListener('click', () => {
  if (!reducedMotion.matches) {
    for (let i = 0; i < 22; i++) addSpark(true);
  }
  document.querySelector('#rose-status').textContent = 'Một bó hoa hồng lấp lánh, dành riêng cho Như Ý. Thương em thật nhiều!';
});

document.querySelector('#open-letter').addEventListener('click', () => {
  document.querySelector('#love-content').hidden = false;
  document.querySelector('#open-letter').setAttribute('aria-expanded', 'true');
  document.querySelector('#letter-hint').textContent = 'LỜI THƯƠNG ĐÃ MỞ ♡';
  const title = document.querySelector('#letter-title');
  title.setAttribute('tabindex', '-1');
  title.focus({ preventScroll: true });
  document.querySelector('#letter').scrollIntoView({
    behavior: reducedMotion.matches ? 'instant' : 'smooth',
    block: 'start'
  });
});
