document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    tempoAteOEvento();
});

function tempoAteOEvento() {
    const dataDoEvento = new Date("Dec 12, 2024 19:00");
    const timeSpampDoEvento = dataDoEvento.getTime();

    var contaTempo = setInterval ( () => {
        const agora = new Date();
        const timeSpampAtual = agora.getTime();

        const distanciaAteOEvento = timeSpampDoEvento - timeSpampAtual;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60 ;
        const minutoEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMs) / 1000);

        const timeText = ' começa em ' + diasAteOEvento + 'd ' + horasAteOEvento + 'h ' + minutosAteOEvento + 'm ' + segundosAteOEvento + 's';
        document.getElementById('contador').innerHTML = timeText;

        if (diasAteOEvento < 0) {
            clearInterval(contaTempo)
            document.getElementById('contador').innerHTML= ' ja acabou!';
        }
    }, 1000);
}