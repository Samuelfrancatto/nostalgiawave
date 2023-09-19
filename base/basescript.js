
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
        botao.src = 'ícones/pause-icon.jpg';
        txt.innerHTML = 'Pause'
        audio.play();
    } else {
        botao.src = 'ícones/play-icon.png';
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


