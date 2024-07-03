// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn-buscar-cep').addEventListener('click', () => {
//         const xhttp = new XMLHttpRequest();

//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//     });
// });

$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click( function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        // $.ajax(endpoint).done(function (resposta) {
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereço = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        //     $('#endereco').val(endereço);

        //     $(botao).find('i').removeClass('d-none');
        //     $(botao).find('span').addClass('d-none');
        // })

        fetch(endpoint).then(function(response) {
            return response.json();
        })
        .then(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereço = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereço);

        })
        .catch(function(erro) {
            alert('Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.')
        })
        .finally(function() {
            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        });
    });

    $('#formulario-pedido').submit(function(e) {
        e.preventDefault();

        if ($('#nome').val().length == 0 ) {
            throw new Error('Digite o nome');
        }
    })
})