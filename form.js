var btncadastro = document.querySelector("#btncadastro");
btncadastro.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-cadastro");

    var cliente = obtemClienteDoFormulário(form);

    var erros = validaCliente(cliente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }
    adicionaClienteNaTabela(cliente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemClienteDoFormulário(form) {

    var cliente = {
        nome: form.nome.value,
        contato: form.contato.value,
        email: form.email.value,
        dtassinatura: form.dtassinatura.value,
        tmassinatura: form.tmassinatura.value,
        vencimento: form.vencimento.value
    }

    return cliente;
}
function montaTr(cliente) {
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.contato, "info-contato"));
    clienteTr.appendChild(montaTd(cliente.email, "info-email"));
    clienteTr.appendChild(montaTd(cliente.dtassinatura, "info-dtassinatura"));
    clienteTr.appendChild(montaTd(cliente.tmassinatura, "info-tmassinatura"));
    clienteTr.appendChild(montaTd(cliente.vencimento, "info-vencimento"));

    return clienteTr;
}
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
function validaCliente(cliente) {

    var erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (cliente.contato.length == 0) {
        erros.push("A contato não pode ser em branco");
    }

    if (cliente.email.length == 0) {
        erros.push("O email não pode ser em branco");
    }

    if (cliente.dtassinatura.length == 0) {
        erros.push("A data de assinatura não pode ser em branco");
    }

    if (cliente.tmassinatura.length == 0) {
        erros.push("O tempo não pode ser em branco");
    }
    
    if (cliente.vencimento.length == 0) {
        erros.push("Vencimento não pode estar em branco");
    }
    return erros;
}
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaClienteNaTabela(cliente) {
    var clienteTr = montaTr(cliente);
    var tabela = document.querySelector("#tabela-cliente");
    tabela.appendChild(clienteTr);
}
