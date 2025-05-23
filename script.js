//digitar do inicio
const arrayText = [
    'Olá, Seja Bem-Vindo',
    'Este é o Meu Portfólio',
    'Sou Full-Stack Developer',
];

const writeSpeed = 50;
const pauseTime = 1000;

let indexSentence = 0;
let indexChar = 0;
const elementtext = document.querySelector('#text'); // Corrigido

function writeText() {
    if (indexChar <= arrayText[indexSentence].length) {
        elementtext.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar++;
        setTimeout(writeText, writeSpeed);
    } else {
        setTimeout(removeText, pauseTime);
    }
}
function removeText() {
    if (indexChar >= 0) {
        elementtext.textContent = arrayText[indexSentence].substring(0, indexChar);
        indexChar--;
        setTimeout(removeText, writeSpeed);
    } else {
        indexSentence++; 
        if (indexSentence >= arrayText.length) {
            indexSentence = 0;
        }
        setTimeout(writeText, pauseTime);
    }
}

writeText();

//aqui começa o blur entrando e saindo
const elements = document.querySelectorAll('.sla');
const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visualizar');
        } else {
            entry.target.classList.remove('visualizar');
        }
    });
});
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
elements.forEach((element) => observador.observe(element));

const linhasEsquerda = document.querySelectorAll('.linha_esquerda');
const linhasDireita = document.querySelectorAll('.linha_direita');

function revelarAoScroll_esquerda() {
  const alturaJanela = window.innerHeight;
  linhasEsquerda.forEach((linha) => {
    const topo = linha.getBoundingClientRect().top;
    if (topo < alturaJanela - 100) {
      linha.classList.add('visivel');
    } else {
      linha.classList.remove('visivel');
    }
  });
}

function revelarAoScroll_direita() {
  const alturaJanela = window.innerHeight;
  linhasDireita.forEach((linha) => {
    const topo = linha.getBoundingClientRect().top;
    if (topo < alturaJanela - 100) {
      linha.classList.add('visivel');
    } else {
      linha.classList.remove('visivel');
    }
  });
}

window.addEventListener('scroll', () => {
  revelarAoScroll_esquerda();
  revelarAoScroll_direita();
});

window.addEventListener('load', () => {
  revelarAoScroll_esquerda();
  revelarAoScroll_direita();

});