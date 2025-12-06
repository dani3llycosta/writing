(function(){
  const track = document.getElementById('track');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  function scrollByCard(dir = 1){
    const card = track.querySelector('.card');
    if(!card) return;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.getPropertyValue('gap')) || 16;
    const cardW = card.getBoundingClientRect().width;
    const amount = (cardW + gap) * dir;
    track.scrollBy({left: amount, behavior:'smooth'});
  }

  prev.addEventListener('click', () => scrollByCard(-1));
  next.addEventListener('click', () => scrollByCard(1));

  track.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') { scrollByCard(-1); e.preventDefault(); }
    if(e.key === 'ArrowRight'){ scrollByCard(1); e.preventDefault(); }
  });

  const cards = track.querySelectorAll('.card');
  cards.forEach(c => {
    c.addEventListener('focus', () => {
      c.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
    });
  });
})();
