const divisao = document.querySelectorAll('.divisao');

function revelarAoScroll_divisao() {
  const alturaJanela = window.innerHeight;
  divisao.forEach((divisao) => {
    const topo = divisao.getBoundingClientRect().top;
    if (topo < alturaJanela - 100) {
      divisao.classList.add('visivel');
    } else {
      divisao.classList.remove('visivel');
    }
  });
}
window.addEventListener('scroll', () => {
  revelarAoScroll_divisao();
});

window.addEventListener('load', () => {
  revelarAoScroll_divisao();

});