var lista = [];
const form = document.getElementById('form-atividade');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaPessoas();
})

function adicionaPessoas() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    if (nome !== '' && telefone !== '') {
        if (lista.some(object => object.nome === nome )) {
            alert('O nome já está Cadastrado!');
        }else if(lista.some(object => object.telefone === telefone )){
            alert('O telefone já está Cadastrado!');
        } else {
            var pessoa = {
                    nome: nome,
                    telefone: telefone
                }
    
                lista.push(pessoa);
                nome = document.getElementById('nome').value = '';
                telefone = document.getElementById('telefone').value = '';
                atualizaTela(lista);
        }
    } else {
        alert('Campo vazio!');
    }

}


function atualizaTela(lista) {
    let tabelaPessoas = document.getElementById('lista-pessoas');
    tabelaPessoas.innerHTML = '';

    lista.forEach(function (object, index) {
        let linha = document.createElement('tr');
        let colunaNome = document.createElement('td');
        let colunaTelefone = document.createElement('td');

        colunaNome.textContent = object.nome;
        colunaTelefone.textContent = object.telefone;

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.className = 'btn btn-danger ps-3 pe-3'

        botaoRemover.onclick = e => { remover(index) };

        linha.appendChild(colunaNome);
        linha.appendChild(colunaTelefone);
        linha.appendChild(botaoRemover);
        tabelaPessoas.appendChild(linha);
    })
}

function remover(index) {
    if (index !== -1) {
        lista.splice(index, 1);
        atualizaTela(lista);
    }
}

document.getElementById('crescente').addEventListener('click', function() {
    lista.sort(function (a, b){
        return a.nome.localeCompare(b.nome);
    });
    atualizaTela(lista);
});

document.getElementById('decrescente').addEventListener('click', function() {
    lista.sort(function (a, b){
        return b.nome.localeCompare(a.nome);
    });
    atualizaTela(lista);
});

document.getElementById('buscar').addEventListener('click', function() {
    let filtrar = document.getElementById('nome-consulta').value.toLowerCase();
    let resultado = lista.filter(object => object.nome.toLowerCase().includes(filtrar));


    atualizaTela(resultado);
})

const carro = {
    marca: "ford",
    modelo: "fusion",
    ano: 2021
};

