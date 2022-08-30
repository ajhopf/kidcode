function buscaCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resp) => resp.json())
    .then((dados) => {
        console.log(dados);

        document.querySelector("#rua").value = dados.logradouro;
        document.querySelector("#numero").focus();
        document.querySelector("#bairro").value = dados.bairro;
        document.querySelector("#cidade").value = dados.localidade;
        document.querySelector("#estado").value = dados.uf;
    });
}
buscaCEP();