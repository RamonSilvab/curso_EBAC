$(document).ready(() => {
    $('#carousel-imagens').slick({  //animação do corousel 
        autoplay:true
    });

    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle();    // esconder ou mostrar menu
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {                            //regras dos inputs
            nome: {                        
                required:true
            },
            email: {                    
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            veiculoDeInteresse: {
                required:true
            },
            mensagem: {
                required:true
            }
        },
        messages: {                         //mensagens de erros
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone:'Por favor, insira o seu telefone',
            veiculoDeInteresse:'Por favor, insira o veículo de seu interesse',
            mensagem:'Por favor, insira o sua mensagem'
        },
        submitHandler: form => {                //formulario html
            console.log(form)
        },
        invalidHandler: (event, validador) => {         //campos invalidos
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    });

    $('.lista-veiculos button').click(function () {             //seleciona a lista de veiculos e o elemento button dentro dele

        const destino = $('#contato');                          //section de contato

        const nomeVeiculo = $(this).parent().find('h3').text(); //busca o titulo do card clicado    

        $('#veiculo-interesse').val(nomeVeiculo);               //preenche o campo veiculo de interesse com o nome do card clicado

        $('html').animate({
            scrollTop: destino.offset().top                     //ao clicar em tenho interesse roda a pagina para a aba de contato
        }, 1000);

    })
});