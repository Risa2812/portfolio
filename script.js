/*hamberger*/
  const toggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  toggle.addEventListener('click', () => navList.classList.toggle('open'));
  navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

const lightbox = document.getElementById('lightbox');
const lightboxFront = document.getElementById('lightboxFront');
const lightboxBack = document.getElementById('lightboxBack');
const lightboxClose = document.getElementById('lightboxClose');

/*card leaflet*/
document.querySelectorAll('.leaflet-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    lightboxFront.src = card.dataset.front;
    lightboxBack.src = card.dataset.back;
    lightbox.classList.add('open');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('open');
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){
    lightbox.classList.remove('open');
  }
});
/*card cms*/
document.querySelectorAll('.leaflet-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    lightboxFront.src = card.dataset.front;
    lightboxBack.src = card.dataset.back;
    lightbox.classList.add('open');
  });
});
document.querySelectorAll('.cms-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    lightboxFront.src = card.dataset.full;
    lightboxBack.src = '';
    lightbox.classList.add('open');
  });
});

