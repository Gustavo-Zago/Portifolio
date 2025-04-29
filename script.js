
const arrayText = [
    'Olá, Seja Bem-Vindo',
    'Este é o Meu Portifólio',
    'Sou Full-Stack Developer',
    ''
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
        indexSentence++; // Corrigido
        if (indexSentence >= arrayText.length) {
            indexSentence = 0;
        }
        setTimeout(writeText, pauseTime);
    }
}
writeText();
// Observador de elementos com a classe .sla
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

elements.forEach((element) => observador.observe(element));
