window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const wrapper = document.querySelector('.lore-wrapper');

  // Use background-position with fixed center for infinite depth feel
  wrapper.style.backgroundPosition = `center calc(50% + ${scrollY * 0.2}px)`;
});
