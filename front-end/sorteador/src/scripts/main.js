document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {
        e.preventDefault();
        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        

        document.getElementById('valor-resultado').innerText = numeroAleatorio;
        let resultado = document.querySelector('.resultado');
        resultado.classList.add('d-block');
    })
});