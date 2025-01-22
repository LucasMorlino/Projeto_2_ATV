const form = document.getElementById('form-contatos');
const imgIconeH = '<img src="./images/iconeH.png" alt="Icone Homem" />';
const imgIconeM = '<img src="./images/iconeM.png" alt="Icone Mulher" />';
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
        e.preventDefault();
        adicionaLinha();
        atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato  = document.getElementById('tel-contato');
    const inputGenCadastro = document.getElementById('escolha-gen');

    if( telefones.includes(inputTelContato.value)){
        alert(`O telefone: ${inputTelContato.value} já foi inserido.`);
    }else{
        nomes.push(inputNomeContato.value);
        telefones.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `<td>${inputGenCadastro.value == "Homem" ? imgIconeH : imgIconeM} </td>`
        linha += '<tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value  = '';
    inputGenCadastro.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    document.getElementById('total-contatos').innerHTML = telefones.length;
}

