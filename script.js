// ===============================
// NAVEGAÇÃO DAS TELAS
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

    if (!nome || !email || !senha || !confirmarSenha) {
        mostrarMensagem("Preencha todos os campos.", "red");
        return;
    }

    if (!termos.checked) {
        mostrarMensagem("Aceite os termos para continuar.", "red");
        return;
    }

    if (senha !== confirmarSenha) {
        mostrarMensagem("As senhas não coincidem.", "red");
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

    const emailCadastrado = localStorage.getItem("email");
    const senhaCadastrada = localStorage.getItem("senha");

    if (!email || !senha) {
        mostrarMensagem("Preencha o e-mail e a senha.", "red");
        return;
    }

    if (email === emailCadastrado && senha === senhaCadastrada) {

        document.getElementById("inicio").style.display = "none";
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("site").style.display = "block";

        mostrarMensagem("Login realizado com sucesso!", "green");

    } else {
        mostrarMensagem("E-mail ou senha incorretos.", "red");
    }
}


// ===============================
// LOGIN SOCIAL
// ===============================

function loginGoogle() {
    mostrarMensagem("Login com Google em desenvolvimento.", "orange");
}

function loginFacebook() {
    mostrarMensagem("Login com Facebook em desenvolvimento.", "orange");
}

function loginApple() {
    mostrarMensagem("Login com Apple em desenvolvimento.", "orange");
}


// ===============================
// MOSTRAR / OCULTAR SENHA
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

    document.querySelectorAll(".tamanho").forEach(botao => {
        botao.classList.remove("selecionado");
    });

    const botoes = document.querySelectorAll(".tamanho");

    botoes.forEach(botao => {
        if (botao.textContent.trim() === tamanho) {
            botao.classList.add("selecionado");
        }
    });

    const tamanhoTexto = document.getElementById("tamanhoSelecionado");

    if (tamanhoTexto) {
        tamanhoTexto.textContent = tamanho;
    }
}


function selecionarCor(cor) {

    corSelecionada = cor;

    document.querySelectorAll(".cor").forEach(botao => {
        botao.classList.remove("selecionado");
    });

    const botoes = document.querySelectorAll(".cor");

    botoes.forEach(botao => {
        if (botao.dataset.cor === cor) {
            botao.classList.add("selecionado");
        }
    });

    const corTexto = document.getElementById("corSelecionada");

    if (corTexto) {
        corTexto.textContent = cor;
    }
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


function abrirCarrinho() {

    const carrinhoElemento = document.getElementById("carrinho");

    if (carrinhoElemento) {
        carrinhoElemento.classList.add("ativo");
    }

    atualizarCarrinho();
}


function fecharCarrinho() {

    const carrinhoElemento = document.getElementById("carrinho");

    if (carrinhoElemento) {
        carrinhoElemento.classList.remove("ativo");
    }
}


// ===============================
// ADICIONAR AO CARRINHO
// ===============================

function adicionarCarrinho() {

    if (!tamanhoSelecionado) {
        mostrarMensagem("Selecione um tamanho.", "red");
        return;
    }

    if (!corSelecionada) {
        mostrarMensagem("Selecione uma cor.", "red");
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
    abrirCarrinho();

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
            `R$ ${total.toFixed(2).replace(".", ",")}`;
    }
}


// ===============================
// REMOVER ITEM
// ===============================

function removerItem(index) {

    carrinho.splice(index, 1);

    salvarCarrinho();
    atualizarCarrinho();

    mostrarMensagem("Produto removido do carrinho.", "orange");
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
