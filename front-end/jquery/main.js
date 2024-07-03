$(document).ready(function() {

    $('#nova-imagen').click( () => {
        $('form').slideDown();
    });

    $('#btn-cancelar').click( () => {
        $('form').slideUp();
    })

    $('form').on('submit', e => {
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endenreco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-imagen-link">
            <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endenreco-imagem-nova').val('');
    })
})

//     document.getElementById('nova-imagen').addEventListener('click', () => {
//         var formAdd = document.querySelector('form');

//         formAdd.style.display = 'block';
//     })
    
//     document.getElementById('btn-cancelar').addEventListener('click', () => {
//         var formAdd = document.querySelector('form');

//         formAdd.style.display = 'none';
//     })

//     document.querySelector('form').addEventListener('submit', (e) => {
//         e.preventDefault();
//     })
// })

