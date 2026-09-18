/* =========================================================
   TEMP.ROУP — SCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTOS PRINCIPAIS
       ===================================================== */

    const telaAbertura = document.getElementById("tela-abertura");
    const telaLogin = document.getElementById("tela-login");
    const aplicativo = document.getElementById("aplicativo");

    const formLogin = document.getElementById("form-login");
    const mensagemLogin = document.getElementById("mensagem-login");

    const mostrarSenhaBtn = document.getElementById("mostrarSenhaBtn");
    const loginSenha = document.getElementById("loginSenha");

    const nomeUsuario = document.getElementById("nome-usuario");
    const perfilNome = document.getElementById("perfil-nome");
    const perfilEmail = document.getElementById("perfil-email");

    let usuarioAtual = null;

    let temperaturaDesejada = 24;
    let modoAtual = "aquecer";
    let conectado = false;

    let bateria = 78;

    let carrinho = [];

    const produtos = {
        blusa: {
            nome: "Blusa Inteligente Temp.Roup",
            preco: 299.90,
            imagem: "./blusa-temp-roup.jpeg"
        },

        bateria: {
            nome: "Bateria Temp.Roup",
            preco: 79.90,
            imagem: null
        },

        regata: {
            nome: "Regata Smart",
            preco: 249.90,
            imagem: null
        },

        modulo: {
            nome: "Módulo de renovação",
            preco: 99.90,
            imagem: null
        }
    };


    /* =====================================================
       LOGIN
       ===================================================== */

    function carregarUsuario() {

        const usuarioSalvo = localStorage.getItem("tempRoupUsuario");

        if (usuarioSalvo) {
            try {
                usuarioAtual = JSON.parse(usuarioSalvo);
            } catch (erro) {
                usuarioAtual = null;
            }
        }

        if (usuarioAtual) {
            mostrarAplicativo();
        } else {
            telaLogin.style.display = "flex";
            aplicativo.style.display = "none";
        }
    }


    function mostrarAplicativo() {

        if (telaLogin) {
            telaLogin.style.display = "none";
        }

        if (aplicativo) {
            aplicativo.style.display = "flex";
        }

        atualizarDadosUsuario();
        atualizarCarrinho();
    }


    function atualizarDadosUsuario() {

        if (!usuarioAtual) return;

        const nome =
            usuarioAtual.nome ||
            usuarioAtual.email?.split("@")[0] ||
            "Usuário";

        if (nomeUsuario) {
            nomeUsuario.textContent = "Olá, " + nome;
        }

        if (perfilNome) {
            perfilNome.textContent = nome;
        }

        if (perfilEmail) {
            perfilEmail.textContent = usuarioAtual.email || "";
        }
    }


    if (formLogin) {

        formLogin.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();
            const senha = document.getElementById("loginSenha").value.trim();

            if (!email || !senha) {

                mensagemLogin.textContent =
                    "Preencha seu e-mail e sua senha.";

                mensagemLogin.style.color = "#dc3545";

                return;
            }

            usuarioAtual = {
                nome: email.split("@")[0],
                email: email
            };

            localStorage.setItem(
                "tempRoupUsuario",
                JSON.stringify(usuarioAtual)
            );

            mensagemLogin.textContent = "Login realizado!";

            mensagemLogin.style.color = "#18a558";

            setTimeout(function () {
                mostrarAplicativo();
            }, 500);
        });
    }


    /* =====================================================
       MOSTRAR / ESCONDER SENHA
       ===================================================== */

    if (mostrarSenhaBtn && loginSenha) {

        mostrarSenhaBtn.addEventListener("click", function () {

            if (loginSenha.type === "password") {

                loginSenha.type = "text";
                mostrarSenhaBtn.textContent = "🙈";

            } else {

                loginSenha.type = "password";
                mostrarSenhaBtn.textContent = "👁";
            }
        });
    }


    /* =====================================================
       NAVEGAÇÃO DO MENU
       ===================================================== */

    const menuItens = document.querySelectorAll(".menu-item");
    const telas = document.querySelectorAll(".tela");

    const titulos = {
        inicio: {
            titulo: "Início",
            subtitulo: "Controle sua experiência Temp.Roup."
        },

        estatisticas: {
            titulo: "Estatísticas",
            subtitulo: "Acompanhe o uso da sua Temp.Roup."
        },

        "minha-roupa": {
            titulo: "Minha Roupa",
            subtitulo: "Gerencie suas roupas inteligentes."
        },

        loja: {
            titulo: "Loja",
            subtitulo: "Produtos e acessórios Temp.Roup."
        },

        perfil: {
            titulo: "Perfil",
            subtitulo: "Gerencie suas informações."
        },

        configuracoes: {
            titulo: "Configurações",
            subtitulo: "Configure sua experiência Temp.Roup."
        },

        carrinho: {
            titulo: "Carrinho",
            subtitulo: "Confira seus produtos antes da compra."
        },

        sugestoes: {
            titulo: "Sugestões",
            subtitulo: "Recomendações para seu conforto térmico."
        }
    };


    function abrirTela(nomeTela) {

        telas.forEach(function (tela) {
            tela.classList.remove("ativa");
        });

        const telaSelecionada =
            document.getElementById("tela-" + nomeTela);

        if (telaSelecionada) {
            telaSelecionada.classList.add("ativa");
        }

        menuItens.forEach(function (item) {

            item.classList.remove("ativo");

            if (item.dataset.tela === nomeTela) {
                item.classList.add("ativo");
            }
        });

        const tituloTela =
            document.getElementById("titulo-tela");

        const subtituloTela =
            document.getElementById("subtitulo-tela");

        if (titulos[nomeTela]) {

            if (tituloTela) {
                tituloTela.textContent =
                    titulos[nomeTela].titulo;
            }

            if (subtituloTela) {
                subtituloTela.textContent =
                    titulos[nomeTela].subtitulo;
            }
        }

        fecharMenuMobile();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    menuItens.forEach(function (item) {

        item.addEventListener("click", function () {

            const tela = item.dataset.tela;

            if (tela) {
                abrirTela(tela);
            }
        });
    });


    /* =====================================================
       BOTÕES DATA-TELA
       ===================================================== */

    document.querySelectorAll("[data-tela]").forEach(function (botao) {

        botao.addEventListener("click", function (event) {

            if (botao.classList.contains("menu-item")) {
                return;
            }

            const tela = botao.dataset.tela;

            if (tela) {
                event.preventDefault();
                abrirTela(tela);
            }
        });
    });


    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const botaoMenuMobile =
        document.getElementById("botao-menu-mobile");

    const menuLateral =
        document.querySelector(".menu-lateral");


    if (botaoMenuMobile) {

        botaoMenuMobile.addEventListener("click", function () {

            menuLateral.classList.toggle("aberto");
        });
    }


    function fecharMenuMobile() {

        if (menuLateral) {
            menuLateral.classList.remove("aberto");
        }
    }


    /* =====================================================
       TEMPERATURA
       ===================================================== */

    const temperaturaDesejadaElemento =
        document.getElementById("temperatura-desejada");

    const botaoDiminuir =
        document.getElementById("diminuir-temperatura");

    const botaoAumentar =
        document.getElementById("aumentar-temperatura");


    function atualizarTemperaturaDesejada() {

        if (temperaturaDesejadaElemento) {

            temperaturaDesejadaElemento.textContent =
                temperaturaDesejada + "°C";
        }

        atualizarSugestao();
    }


    if (botaoDiminuir) {

        botaoDiminuir.addEventListener("click", function () {

            if (temperaturaDesejada > 20) {

                temperaturaDesejada--;

                atualizarTemperaturaDesejada();
            }
        });
    }


    if (botaoAumentar) {

        botaoAumentar.addEventListener("click", function () {

            if (temperaturaDesejada < 30) {

                temperaturaDesejada++;

                atualizarTemperaturaDesejada();
            }
        });
    }


    /* =====================================================
       MODOS DE TEMPERATURA
       ===================================================== */

    const botoesModo =
        document.querySelectorAll(".modo-btn");


    botoesModo.forEach(function (botao) {

        botao.addEventListener("click", function () {

            botoesModo.forEach(function (item) {
                item.classList.remove("selecionado");
            });

            botao.classList.add("selecionado");

            modoAtual = botao.dataset.modo;

            mostrarMensagemModo();
        });
    });


    function mostrarMensagemModo() {

        const statusRoupa =
            document.getElementById("status-roupa");

        if (!statusRoupa) return;

        if (!conectado) {

            statusRoupa.textContent =
                "DESCONECTADA";

            statusRoupa.style.color =
                "#dc3545";

            return;
        }

        if (modoAtual === "aquecer") {

            statusRoupa.textContent =
                "AQUECENDO";

        } else if (modoAtual === "resfriar") {

            statusRoupa.textContent =
                "RESFRIANDO";

        } else if (modoAtual === "automatico") {

            statusRoupa.textContent =
                "AUTOMÁTICO";

        } else {

            statusRoupa.textContent =
                "ATIVA";
        }

        statusRoupa.style.color = "#18a558";
    }


    /* =====================================================
       BLUETOOTH
       ===================================================== */

    const botaoConectar =
        document.getElementById("botao-conectar");

    const statusDesconectada =
        document.querySelector(".status-desconectada");

    const statusRoupa =
        document.getElementById("status-roupa");


    async function conectarBluetooth() {

        /*
         * O navegador só permite Bluetooth real em ambientes
         * compatíveis e normalmente exige HTTPS.
         */

        if (!navigator.bluetooth) {

            alert(
                "O Bluetooth deste navegador não está disponível. " +
                "A interface continuará funcionando normalmente."
            );

            return;
        }

        try {

            const dispositivo =
                await navigator.bluetooth.requestDevice({
                    acceptAllDevices: true,
                    optionalServices: []
                });

            conectado = true;

            atualizarStatusBluetooth(
                dispositivo.name || "Minha Temp.Roup"
            );

        } catch (erro) {

            console.log(
                "Conexão Bluetooth cancelada ou indisponível."
            );
        }
    }


    function atualizarStatusBluetooth(nomeRoupa) {

        conectado = true;

        if (botaoConectar) {
            botaoConectar.textContent = "CONECTADA";
        }

        if (statusRoupa) {

            statusRoupa.textContent =
                "CONECTADA";

            statusRoupa.style.color =
                "#18a558";
        }

        if (statusDesconectada) {

            const texto =
                statusDesconectada.querySelector("strong");

            const descricao =
                statusDesconectada.querySelector("small");

            const ponto =
                statusDesconectada.querySelector(".status-ponto");

            if (texto) {
                texto.textContent =
                    "Roupa conectada";
            }

            if (descricao) {
                descricao.textContent =
                    nomeRoupa + " • Bluetooth";
            }

            if (ponto) {
                ponto.style.background =
                    "#18a558";
            }

            statusDesconectada.style.borderColor =
                "#cdebd8";
        }

        document.querySelectorAll(".conexao-roupa")
            .forEach(function (elemento) {

                elemento.textContent =
                    "🟢 Conectada";

                elemento.style.color =
                    "#18a558";
            });

        mostrarMensagemModo();
    }


    if (botaoConectar) {

        botaoConectar.addEventListener(
            "click",
            conectarBluetooth
        );
    }


    /* =====================================================
       BOTÃO DE CONEXÃO NA MINHA ROUPA
       ===================================================== */

    document.querySelectorAll(".roupa-info .botao-secundario")
        .forEach(function (botao) {

            botao.addEventListener("click", function () {

                conectarBluetooth();
            });
        });


    const configBluetooth =
        document.getElementById("config-bluetooth");


    if (configBluetooth) {

        configBluetooth.addEventListener("click", function () {

            conectarBluetooth();
        });
    }


    /* =====================================================
       SUGESTÕES
       ===================================================== */

    function atualizarSugestao() {

        const sugestaoTitulo =
            document.querySelector(".sugestao-card.frio h3");

        if (!sugestaoTitulo) return;

        if (temperaturaDesejada <= 22) {

            console.log(
                "Sugestão: utilizar aquecimento."
            );

        } else if (temperaturaDesejada >= 27) {

            console.log(
                "Sugestão: utilizar resfriamento."
            );

        } else {

            console.log(
                "Sugestão: utilizar modo automático."
            );
        }
    }


    document.querySelectorAll(".sugestao-card button")
        .forEach(function (botao) {

            botao.addEventListener("click", function () {

                const texto =
                    botao.textContent.toLowerCase();

                if (texto.includes("aquecer")) {

                    selecionarModo("aquecer");

                } else if (texto.includes("resfriar")) {

                    selecionarModo("resfriar");

                } else {

                    selecionarModo("automatico");
                }

                abrirTela("inicio");
            });
        });


    function selecionarModo(modo) {

        modoAtual = modo;

        botoesModo.forEach(function (botao) {

            botao.classList.remove("selecionado");

            if (botao.dataset.modo === modo) {
                botao.classList.add("selecionado");
            }
        });

        mostrarMensagemModo();
    }


    /* =====================================================
       CARRINHO
       ===================================================== */

    function salvarCarrinho() {

        localStorage.setItem(
            "tempRoupCarrinho",
            JSON.stringify(carrinho)
        );
    }


    function carregarCarrinho() {

        const salvo =
            localStorage.getItem("tempRoupCarrinho");

        if (!salvo) {
            carrinho = [];
            return;
        }

        try {

            carrinho = JSON.parse(salvo);

            if (!Array.isArray(carrinho)) {
                carrinho = [];
            }

        } catch (erro) {

            carrinho = [];
        }
    }


    function adicionarAoCarrinho(idProduto) {

        const produto = produtos[idProduto];

        if (!produto) return;

        const existente =
            carrinho.find(
                item => item.id === idProduto
            );

        if (existente) {

            existente.quantidade++;

        } else {

            carrinho.push({
                id: idProduto,
                nome: produto.nome,
                preco: produto.preco,
                imagem: produto.imagem,
                quantidade: 1,
                tamanho: "M",
                cor: "Azul"
            });
        }

        salvarCarrinho();

        atualizarCarrinho();

        alert(
            produto.nome +
            " foi adicionado ao carrinho."
        );
    }


    document.querySelectorAll(".adicionar-produto")
        .forEach(function (botao) {

            botao.addEventListener("click", function () {

                const produto =
                    botao.dataset.produto;

                adicionarAoCarrinho(produto);
            });
        });


    function atualizarContadores() {

        const quantidade =
            carrinho.reduce(
                (total, item) =>
                    total + item.quantidade,
                0
            );

        const contador =
            document.getElementById("contador-carrinho");

        const contadorLoja =
            document.getElementById("contador-loja");


        if (contador) {
            contador.textContent = quantidade;
        }

        if (contadorLoja) {
            contadorLoja.textContent = quantidade;
        }
    }


    function formatarPreco(valor) {

        return valor.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );
    }


    function atualizarCarrinho() {

        const container =
            document.getElementById("itens-carrinho");

        if (!container) return;

        atualizarContadores();

        if (carrinho.length === 0) {

            container.innerHTML = `
                <div class="carrinho-vazio">
                    <div>🛒</div>
                    <h3>Seu carrinho está vazio</h3>
                    <p>Adicione produtos pela Loja Temp.Roup.</p>
                    <button
                        class="botao-principal"
                        data-tela="loja">
                        Ir para a loja
                    </button>
                </div>
            `;

            const botaoLoja =
                container.querySelector("[data-tela='loja']");

            if (botaoLoja) {

                botaoLoja.addEventListener(
                    "click",
                    function () {
                        abrirTela("loja");
                    }
                );
            }

        } else {

            container.innerHTML = "";

            carrinho.forEach(function (item, indice) {

                const linha =
                    document.createElement("div");

                linha.style.display = "flex";
                linha.style.alignItems = "center";
                linha.style.gap = "15px";
                linha.style.padding = "15px 0";
                linha.style.borderBottom =
                    "1px solid #edf0f5";

                let imagemHTML = "";

                if (item.imagem) {

                    imagemHTML = `
                        <img
                            src="${item.imagem}"
                            alt="${item.nome}"
                            style="
                                width:80px;
                                height:80px;
                                object-fit:contain;
                                background:#f2f5fb;
                                border-radius:10px;
                            ">
                    `;

                } else {

                    imagemHTML = `
                        <div style="
                            width:80px;
                            height:80px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            background:#f2f5fb;
                            border-radius:10px;
                            font-size:30px;
                        ">${item.id === "bateria" ? "🔋" : "⚙️"}</div>
                    `;
                }


                linha.innerHTML = `
                    ${imagemHTML}

                    <div style="flex:1;">
                        <strong style="
                            color:#071b72;
                            display:block;
                            margin-bottom:5px;
                        ">
                            ${item.nome}
                        </strong>

                        <small style="color:#667085;">
                            Quantidade: ${item.quantidade}
                        </small>

                        <br>

                        <small style="color:#667085;">
                            Tamanho: ${item.tamanho}
                            • Cor: ${item.cor}
                        </small>

                        <div style="
                            color:#071b72;
                            font-weight:bold;
                            margin-top:5px;
                        ">
                            ${formatarPreco(
                                item.preco *
                                item.quantidade
                            )}
                        </div>
                    </div>

                    <button
                        class="remover-item"
                        data-indice="${indice}"
                        style="
                            border:none;
                            background:#fff0f1;
                            color:#dc3545;
                            border-radius:8px;
                            padding:8px;
                            cursor:pointer;
                        ">
                        Remover
                    </button>
                `;

                container.appendChild(linha);
            });


            container
                .querySelectorAll(".remover-item")
                .forEach(function (botao) {

                    botao.addEventListener(
                        "click",
                        function () {

                            const indice =
                                Number(
                                    botao.dataset.indice
                                );

                            carrinho.splice(
                                indice,
                                1
                            );

                            salvarCarrinho();
                            atualizarCarrinho();
                        }
                    );
                });
        }


        calcularResumoCarrinho();
    }


    function calcularResumoCarrinho() {

        const subtotal =
            carrinho.reduce(
                (total, item) =>
                    total +
                    item.preco *
                    item.quantidade,
                0
            );

        const frete =
            subtotal > 0 ? 20 : 0;

        const total =
            subtotal + frete;


        const elementoSubtotal =
            document.getElementById(
                "subtotal-carrinho"
            );

        const elementoFrete =
            document.getElementById(
                "frete-carrinho"
            );

        const elementoTotal =
            document.getElementById(
                "total-carrinho"
            );


        if (elementoSubtotal) {
            elementoSubtotal.textContent =
                formatarPreco(subtotal);
        }

        if (elementoFrete) {
            elementoFrete.textContent =
                formatarPreco(frete);
        }

        if (elementoTotal) {
            elementoTotal.textContent =
                formatarPreco(total);
        }
    }


    /* =====================================================
       FINALIZAR COMPRA
       ===================================================== */

    const finalizarCompra =
        document.getElementById("finalizar-compra");


    if (finalizarCompra) {

        finalizarCompra.addEventListener(
            "click",
            function () {

                if (carrinho.length === 0) {

                    alert(
                        "Seu carrinho está vazio."
                    );

                    return;
                }

                alert(
                    "Compra preparada! " +
                    "Na versão final, esta etapa será conectada ao pagamento."
                );
            }
        );
    }


    /* =====================================================
       PRODUTO EM DESTAQUE
       ===================================================== */

    const verProduto =
        document.getElementById("ver-produto");


    if (verProduto) {

        verProduto.addEventListener(
            "click",
            function () {

                const produto =
                    document.querySelector(
                        ".produto-card"
                    );

                if (produto) {

                    produto.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }
        );
    }


    /* =====================================================
       BATERIA
       ===================================================== */

    function atualizarBateria() {

        const elemento =
            document.getElementById(
                "nivel-bateria"
            );

        if (elemento) {
            elemento.textContent =
                bateria + "%";
        }

        const status =
            document.querySelector(
                ".bateria-status"
            );

        if (status) {

            if (bateria <= 20) {

                status.textContent =
                    "Bateria baixa";

                status.style.color =
                    "#dc3545";

            } else {

                status.textContent =
                    "Disponível";

                status.style.color =
                    "#18a558";
            }
        }
    }


    atualizarBateria();


    /* =====================================================
       NOTIFICAÇÃO
       ===================================================== */

    const notificacao =
        document.querySelector(".notificacao");


    if (notificacao) {

        notificacao.addEventListener(
            "click",
            function () {

                if (!conectado) {

                    alert(
                        "⚠️ Roupa desconectada\n\n" +
                        "Conecte sua Temp.Roup via Bluetooth."
                    );

                } else if (bateria <= 20) {

                    alert(
                        "⚠️ Bateria baixa\n\n" +
                        "Acesse a Loja para comprar uma nova bateria."
                    );

                } else {

                    alert(
                        "🔔 Nenhuma nova notificação."
                    );
                }
            }
        );
    }


    /* =====================================================
       INICIALIZAÇÃO
       ===================================================== */

    carregarCarrinho();

    atualizarTemperaturaDesejada();

    carregarUsuario();


    /* =====================================================
       SERVICE WORKER
       ===================================================== */

    if (
        "serviceWorker" in navigator &&
        window.location.protocol === "https:"
    ) {

        window.addEventListener(
            "load",
            function () {

                navigator.serviceWorker
                    .register("./service-worker.js")
                    .then(function () {

                        console.log(
                            "Temp.Roup: Service Worker ativo."
                        );

                    })
                    .catch(function (erro) {

                        console.log(
                            "Erro no Service Worker:",
                            erro
                        );
                    });
            }
        );
    }

});
