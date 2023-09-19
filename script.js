
/* abre e fecha a barra lateral*/
var abrebl = document.getElementById('abrir')
var fechabl = document.getElementById('fechar')
var bl = document.getElementById('barralat')

function abrir(){
    barralat.style.width = '250px'
}

function fechar(){
    barralat.style.width = '0px'
}

/* dá play e pause na música*/
const botao = document.getElementById('botaoplay')
const audio = document.getElementById('musica')

const txt = document.getElementById('playpause')

botao.addEventListener('click', function() {
    if (audio.paused) {
        botao.src = '../imagens/pause-icon.jpg';
        txt.innerHTML = 'Pause'
        audio.play();
    } else {
        botao.src = '../imagens/play-icon.png';
        txt.innerHTML = 'Play'
        audio.pause();
    }
});

/* faz o relógio funcionar*/
function atualizarhora(){
    var dataAtual = new Date()
    var horas = dataAtual.getHours()
    var minutos = dataAtual.getMinutes()
    var relogio = document.getElementById('relogio')

    relogio.innerHTML = `${horas}:${minutos}`
}

setInterval(atualizarhora, 1)

/* Faz aparecer o texto aleatório que muda toda vez que carrega a página*/
const textos = [
    "Good Vibes Only...",
    "No sugar added",
    "Windows 95",
    "LOL",
    "XD",
    "Beat it!",
    "Eu te amo <3",
    "VHS",
    "720p SD",
    "The truth is out there",
    "Ah, sh*t, here we go again...",
    "Nothing really matters...",
    "Eu amo os anos 80",
    "Miau",
    "Lonely... i'm Mr. Lonely...",
    "Life could be a dream!",
    "liiivin' on a prayer!",
    "Follow the damn train, CJ!",
    "Never gonna give you up",
    "Press start",
    "Game Over",
    "Freeeee biiiiird, yeah"
]

function mostrarRandomTexto(){
    const indiceAleatorio = Math.floor(Math.random() * textos.length)
    const textoAleatorio = textos[indiceAleatorio]

    const elementoTexto = document.getElementById('randtexto')
    elementoTexto.innerHTML = textoAleatorio

    elementoTexto.classList.add('text-right')
}

window.addEventListener('load', mostrarRandomTexto)

/* Faz a página voltar para cima quando a seta verde for clicada */
document.getElementById('voltar para cima').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});



