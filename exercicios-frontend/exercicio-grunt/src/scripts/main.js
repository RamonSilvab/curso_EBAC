$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const listaTarefa = $('<li></li>');
        $(listaTarefa).text(novaTarefa);
        $(listaTarefa).appendTo('ul');

        $('#nova-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).addClass("tarefa-concluida");
    })
})
