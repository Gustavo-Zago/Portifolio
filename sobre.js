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
const frase = document.querySelectorAll('.frase');

function revelarAoScroll_frase() {
  const alturaJanela = window.innerHeight;
  frase.forEach((frase) => {
    const topo = frase.getBoundingClientRect().top;
    if (topo < alturaJanela - 100) {
      frase.classList.add('visivel');
    } else {
      frase.classList.remove('visivel');
    }
  });
}
const titulo = document.querySelectorAll('.titulo');

function revelarAoScroll_titulo() {
  const alturaJanela = window.innerHeight;
  titulo.forEach((titulo) => {
    const topo = titulo.getBoundingClientRect().top;
    if (topo < alturaJanela - 100) {
      titulo.classList.add('visivel');
    } else {
      titulo.classList.remove('visivel');
    }
  });
}
window.addEventListener('scroll', () => {
  revelarAoScroll_divisao();
  revelarAoScroll_frase();
  revelarAoScroll_titulo();
});

window.addEventListener('load', () => {
  revelarAoScroll_divisao();
  revelarAoScroll_frase();
  revelarAoScroll_titulo();

});
