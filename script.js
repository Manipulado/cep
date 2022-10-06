const inputTexto = document.querySelector("#enviar");
const submit = document.querySelector('#botao');
const textoArea = document.querySelector('.resultado');

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json()).then(body => {
        const cepArea = document.querySelector('#cep');
        const localidadeArea = document.querySelector('#localidade');
        const ufArea = document.querySelector('#uf');

        cepArea.innerText = `CEP: ${body.cep}`;
        localidadeArea.innerText = `Local/Cidade: ${body.localidade}`;
        ufArea.innerText = `UF: ${body.uf}`;
    })
}

function pegaTexto(event){
    event.preventDefault();
    const cep = inputTexto.value;
    buscaCep(cep)
}

submit.addEventListener('click', pegaTexto);