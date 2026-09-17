// ===============================
// TEMP.ROU​P - SCRIPT.JS
// ===============================

// ===============================
// NAVEGAÇÃO ENTRE TELAS
// ===============================

function mostrarCadastro() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "flex";
    document.getElementById("site").style.display = "none";
}

function mostrarLogin() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("site").style.display = "none";
}

function mostrarInicio() {
    document.getElementById("inicio").style.display = "flex";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("site").style.display = "none";
}


// ===============================
// CADASTRO
// ===============================

function cadastrar() {

    const nome = document.getElementById("cadNome").value.trim();
    const email = document.getElementById("cadEmail").value.trim();
    const senha = document.getElementById("cadSenha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const termos = document.getElementById("aceitarTermos");

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        mostrarMensagem("Preencha todos os campos.", "red");
        return;
    }

    if (senha !== confirmarSenha) {
        mostrarMensagem("As senhas não são iguais.", "red");
        return;
    }

    if (!termos.checked) {
        mostrarMensagem("Aceite os termos para continuar.", "red");
        return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    mostrarMensagem("Cadastro realizado com sucesso!", "green");

    setTimeout(() => {
        mostrarLogin();
    }, 1200);
}


// ===============================
// LOGIN
// ===============================

function entrar() {

    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginSenha").value;

    const emailSalvo = localStorage.getItem("email");
    const senhaSalva = localStorage.getItem("senha");

    if (email === emailSalvo && senha === senhaSalva) {

        document.getElementById("inicio").style.display = "none";
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("site").style.display = "block";

        atualizarCarrinho();

    } else {
        mostrarMensagem("E-mail ou senha incorretos.", "red");
    }
}


// ===============================
// LOGIN SOCIAL
// ===============================

function loginGoogle() {
    mostrarMensagem("Login com Google em desenvolvimento.", "#f28c28");
}

function loginFacebook() {
    mostrarMensagem("Login com Facebook em desenvolvimento.", "#f28c28");
}

function loginApple() {
    mostrarMensagem("Login com Apple em desenvolvimento.", "#f28c28");
}


// ===============================
// MOSTRAR / ESCONDER SENHA
// ===============================

function mostrarSenha(id) {

    const campo = document.getElementById(id);

    if (campo.type === "password") {
        campo.type = "text";
    } else {
        campo.type = "password";
    }
}


// ===============================
// MENSAGENS
// ===============================

function mostrarMensagem(texto, cor) {

    const mensagem = document.getElementById("mensagem");

    if (!mensagem) return;

    mensagem.textContent = texto;
    mensagem.style.color = cor;
    mensagem.style.display = "block";

    setTimeout(() => {
        mensagem.style.display = "none";
    }, 3000);
}


// ===============================
// PRODUTO
// ===============================

let tamanhoSelecionado = "";
let corSelecionada = "";

function selecionarTamanho(tamanho) {

    tamanhoSelecionado = tamanho;

    const tamanhoAtual = document.getElementById("tamanhoSelecionado");

    if (tamanhoAtual) {
        tamanhoAtual.textContent = tamanho;
    }

    document.querySelectorAll(".tamanho-btn").forEach(botao => {
        botao.classList.remove("selecionado");
    });

    event.target.classList.add("selecionado");
}


function selecionarCor(cor) {

    corSelecionada = cor;

    const corAtual = document.getElementById("corSelecionada");

    if (corAtual) {
        corAtual.textContent = cor;
    }

    document.querySelectorAll(".cor-btn").forEach(botao => {
        botao.classList.remove("selecionado");
    });

    event.target.classList.add("selecionado");
}


// ===============================
// IR PARA PRODUTO
// ===============================

function irParaProduto() {

    const produto = document.getElementById("produto");

    if (produto) {
        produto.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===============================
// CARRINHO
// ===============================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}


// Abrir carrinho
function abrirCarrinho() {

    const carrinhoElemento = document.getElementById("carrinho");

    if (carrinhoElemento) {
        carrinhoElemento.classList.add("ativo");
    }

    atualizarCarrinho();
}


// Fechar carrinho
function fecharCarrinho() {

    const carrinhoElemento = document.getElementById("carrinho");

    if (carrinhoElemento) {
        carrinhoElemento.classList.remove("ativo");
    }
}


// ===============================
// ADICIONAR PRODUTO AO CARRINHO
// ===============================

function adicionarCarrinho() {

    if (tamanhoSelecionado === "") {
        mostrarMensagem("Escolha um tamanho.", "red");
        return;
    }

    if (corSelecionada === "") {
        mostrarMensagem("Escolha uma cor.", "red");
        return;
    }

    const produto = {
        id: Date.now(),
        nome: "Blusa Inteligente Temp.Roup",
        tamanho: tamanhoSelecionado,
        cor: corSelecionada,
        preco: 299.90
    };

    carrinho.push(produto);

    salvarCarrinho();

    atualizarCarrinho();

    mostrarMensagem("Produto adicionado ao carrinho!", "green");
}


// ===============================
// ATUALIZAR CARRINHO
// ===============================

function atualizarCarrinho() {

    const lista = document.getElementById("itensCarrinho");
    const contador = document.getElementById("contadorCarrinho");
    const totalElemento = document.getElementById("totalCarrinho");

    if (!lista) return;

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((produto, index) => {

        total += produto.preco;

        const item = document.createElement("div");

        item.className = "item-carrinho";

        item.innerHTML = `
            <div>
                <strong>${produto.nome}</strong>
                <p>Tamanho: ${produto.tamanho}</p>
                <p>Cor: ${produto.cor}</p>
                <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
            </div>

            <button onclick="removerItem(${index})">
                Remover
            </button>
        `;

        lista.appendChild(item);
    });

    if (contador) {
        contador.textContent = carrinho.length;
    }

    if (totalElemento) {
        totalElemento.textContent =
            "R$ " + total.toFixed(2).replace(".", ",");
    }
}


// ===============================
// REMOVER PRODUTO
// ===============================

function removerItem(index) {

    carrinho.splice(index, 1);

    salvarCarrinho();

    atualizarCarrinho();
}


// ===============================
// FINALIZAR COMPRA
// ===============================

function finalizarCompra() {

    if (carrinho.length === 0) {
        mostrarMensagem("Seu carrinho está vazio.", "red");
        return;
    }

    carrinho = [];

    salvarCarrinho();

    atualizarCarrinho();

    mostrarMensagem(
        "Compra finalizada com sucesso!",
        "green"
    );
}


// ===============================
// INICIALIZAÇÃO
// ===============================

window.onload = function () {
    atualizarCarrinho();
};
