<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Temp.Roup</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- =====================================================
         TELA INICIAL
    ====================================================== -->

    <section id="inicio" class="tela-inicial">

        <div class="inicio-conteudo">

            <img
                src="tela-inicial.png"
                alt="Temp.Roup"
                class="imagem-inicial"
            >

            <div class="botoes-inicial">

                <button
                    class="btn-cadastrar"
                    onclick="mostrarCadastro()">
                    CADASTRAR-SE
                </button>

                <button
                    class="btn-entrar"
                    onclick="mostrarLogin()">
                    ENTRAR
                </button>

            </div>

        </div>

    </section>


    <!-- =====================================================
         CADASTRO
    ====================================================== -->

    <section id="cadastro" class="tela-formulario">

        <div class="formulario">

            <div class="logo-form">
                <span>TEMP</span><strong>ROUP</strong>
            </div>

            <h1>Criar conta</h1>

            <p class="subtitulo">
                Preencha seus dados para criar sua conta
            </p>


            <div class="campo">

                <label for="cadNome">
                    Nome completo:
                </label>

                <input
                    type="text"
                    id="cadNome"
                    placeholder="Digite seu nome completo"
                >

            </div>


            <div class="campo">

                <label for="cadEmail">
                    E-mail:
                </label>

                <input
                    type="email"
                    id="cadEmail"
                    placeholder="Digite seu e-mail"
                >

            </div>


            <div class="campo">

                <label for="cadSenha">
                    Senha:
                </label>

                <div class="senha">

                    <input
                        type="password"
                        id="cadSenha"
                        placeholder="Digite sua senha"
                    >

                    <button
                        type="button"
                        onclick="mostrarSenha('cadSenha')">
                        👁
                    </button>

                </div>

            </div>


            <div class="campo">

                <label for="confirmarSenha">
                    Confirmar senha:
                </label>

                <div class="senha">

                    <input
                        type="password"
                        id="confirmarSenha"
                        placeholder="Confirme sua senha"
                    >

                    <button
                        type="button"
                        onclick="mostrarSenha('confirmarSenha')">
                        👁
                    </button>

                </div>

            </div>


            <div class="termos">

                <input
                    type="checkbox"
                    id="aceitarTermos"
                >

                <label for="aceitarTermos">

                    Eu aceito os
                    <span>Termos de Uso</span>
                    e a
                    <span>Política de Privacidade</span>

                </label>

            </div>


            <button
                class="btn-principal"
                onclick="cadastrar()">

                CADASTRAR

            </button>


            <p class="troca">

                Já tem uma conta?

                <span onclick="mostrarLogin()">
                    Entrar
                </span>

            </p>


            <button
                class="voltar"
                onclick="mostrarInicio()">

                ← Voltar

            </button>

        </div>

    </section>


    <!-- =====================================================
         LOGIN
    ====================================================== -->

    <section id="login" class="tela-formulario">

        <div class="formulario">

            <div class="logo-form">
                <span>TEMP</span><strong>ROUP</strong>
            </div>

            <h1>Entrar na sua conta</h1>

            <p class="subtitulo">
                Que bom te ver de novo!
                <br>
                Faça login para continuar.
            </p>


            <div class="campo">

                <label for="loginEmail">
                    E-mail:
                </label>

                <input
                    type="text"
                    id="loginEmail"
                    placeholder="Digite seu e-mail"
                >

            </div>


            <div class="campo">

                <label for="loginSenha">
                    Senha:
                </label>

                <div class="senha">

                    <input
                        type="password"
                        id="loginSenha"
                        placeholder="Digite sua senha"
                    >

                    <button
                        type="button"
                        onclick="mostrarSenha('loginSenha')">
                        👁
                    </button>

                </div>

            </div>


            <p
                class="esqueceu"
                onclick="recuperarSenha()">

                Esqueceu a senha?

            </p>


            <button
                class="btn-principal"
                onclick="fazerLogin()">

                ENTRAR

            </button>


            <div class="ou">

                <span></span>

                <p>Ou entre com</p>

                <span></span>

            </div>


            <div class="sociais">

                <button onclick="loginGoogle()">
                    G
                </button>

                <button onclick="loginFacebook()">
                    f
                </button>

                <button onclick="loginApple()">
                    
                </button>

            </div>


            <p class="troca">

                Ainda não tem uma conta?

                <span onclick="mostrarCadastro()">
                    Cadastrar
                </span>

            </p>


            <button
                class="voltar"
                onclick="mostrarInicio()">

                ← Voltar

            </button>

        </div>

    </section>


    <!-- =====================================================
         APLICATIVO / SITE PRINCIPAL
    ====================================================== -->

    <section id="site" class="site">

        <!-- HEADER -->

        <header class="app-header">

            <div class="header-logo">
                TEMP<span>ROUP</span>
            </div>

            <button
                class="header-carrinho"
                onclick="abrirCarrinho()">

                🛒
                <span id="contador">0</span>

            </button>

        </header>


        <!-- =================================================
             CONTEÚDO
        ================================================== -->

        <main class="app-content">


            <!-- =============================================
                 INÍCIO
            ============================================== -->

            <section
                id="telaInicio"
                class="app-tela ativa">

                <div class="saudacao">

                    <p>Olá!</p>

                    <h1 id="nomeUsuario">
                        Bem-vindo à Temp.Roup
                    </h1>

                    <p>
                        Tecnologia para o seu conforto.
                    </p>

                </div>


                <div class="temperatura-card">

                    <div>

                        <span class="temperatura-icon">
                            🌡️
                        </span>

                    </div>

                    <div>

                        <small>
                            Temperatura atual
                        </small>

                        <strong id="temperaturaAtual">
                            24°C
                        </strong>

                        <span id="condicaoAtual">
                            Clima agradável
                        </span>

                    </div>

                </div>


                <div class="banner-app">

                    <img
                        src="64661.jpg"
                        alt="Blusa inteligente Temp.Roup"
                    >

                    <div class="banner-texto">

                        <span>
                            TECNOLOGIA + CONFORTO
                        </span>

                        <h2>
                            A primeira blusa
                            inteligente do Brasil
                        </h2>

                        <button
                            onclick="abrirTela('loja')">

                            Conhecer produto

                        </button>

                    </div>

                </div>


                <h2 class="titulo-secao">
                    Acesso rápido
                </h2>


                <div class="atalhos">

                    <button onclick="abrirTela('sugestoes')">

                        <span>💡</span>

                        <strong>
                            Sugestões
                        </strong>

                        <small>
                            Veja o que vestir
                        </small>

                    </button>


                    <button onclick="abrirTela('minhaRoupa')">

                        <span>👕</span>

                        <strong>
                            Minha Roupa
                        </strong>

                        <small>
                            Seu guarda-roupa
                        </small>

                    </button>


                    <button onclick="abrirTela('estatisticas')">

                        <span>📊</span>

                        <strong>
                            Estatísticas
                        </strong>

                        <small>
                            Veja seus dados
                        </small>

                    </button>


                    <button onclick="abrirTela('loja')">

                        <span>🛍️</span>

                        <strong>
                            Loja
                        </strong>

                        <small>
                            Comprar roupas
                        </small>

                    </button>

                </div>

            </section>


            <!-- =============================================
                 LOJA
            ============================================== -->

            <section
                id="telaLoja"
                class="app-tela">

                <div class="tela-titulo">

                    <h1>Loja</h1>

                    <p>
                        Encontre roupas para cada temperatura.
                    </p>

                </div>


                <div class="filtros">

                    <button
                        class="filtro ativo"
                        onclick="filtrarLoja('todos', this)">

                        Todos

                    </button>

                    <button
                        class="filtro"
                        onclick="filtrarLoja('frio', this)">

                        Frio

                    </button>

                    <button
                        class="filtro"
                        onclick="filtrarLoja('ameno', this)">

                        Ameno

                    </button>

                    <button
                        class="filtro"
                        onclick="filtrarLoja('quente', this)">

                        Quente

                    </button>

                </div>


                <div class="produto-card">

                    <div class="produto-imagem">

                        <img
                            src="64661.jpg"
                            alt="Blusa Inteligente Temp.Roup"
                        >

                        <span class="produto-tag">
                            DESTAQUE
                        </span>

                    </div>


                    <div class="produto-info">

                        <span class="produto-categoria">
                            Tecnologia vestível
                        </span>

                        <h2>
                            Blusa Inteligente Temp.Roup
                        </h2>

                        <p>
                            Uma blusa desenvolvida para
                            proporcionar tecnologia,
                            conforto e praticidade.
                        </p>


                        <div class="produto-recursos">

                            <span>
                                🌡️ Controle térmico
                            </span>

                            <span>
                                📱 Bluetooth
                            </span>

                            <span>
                                ⚡ Baixa tensão
                            </span>

                        </div>


                        <div class="produto-preco">

                            <span>
                                R$
                            </span>

                            299,90

                        </div>


                        <button
                            class="botao-comprar"
                            onclick="abrirDetalhesProduto()">

                            Ver produto

                        </button>

                    </div>

                </div>


                <div
                    id="detalhesProduto"
                    class="detalhes-produto">

                    <h2>
                        Blusa Inteligente
                    </h2>


                    <p>
                        Escolha as opções da sua blusa:
                    </p>


                    <h3>
                        Tamanho
                    </h3>

                    <div class="opcoes">

                        <button onclick="selecionarTamanho('P')">
                            P
                        </button>

                        <button onclick="selecionarTamanho('M')">
                            M
                        </button>

                        <button onclick="selecionarTamanho('G')">
                            G
                        </button>

                        <button onclick="selecionarTamanho('GG')">
                            GG
                        </button>

                    </div>


                    <h3>
                        Cor
                    </h3>

                    <div class="opcoes">

                        <button onclick="selecionarCor('Preto')">
                            Preto
                        </button>

                        <button onclick="selecionarCor('Branco')">
                            Branco
                        </button>

                        <button onclick="selecionarCor('Cinza')">
                            Cinza
                        </button>

                    </div>


                    <div class="selecionado">

                        <p>
                            Tamanho:
                            <strong id="tamanhoEscolhido">
                                Nenhum
                            </strong>
                        </p>

                        <p>
                            Cor:
                            <strong id="corEscolhida">
                                Nenhuma
                            </strong>
                        </p>

                    </div>


                    <button
                        class="botao-comprar"
                        onclick="adicionarCarrinho()">

                        🛒 Adicionar ao carrinho

                    </button>

                </div>

            </section>


            <!-- =============================================
                 SUGESTÕES
            ============================================== -->

            <section
                id="telaSugestoes"
                class="app-tela">

                <div class="tela-titulo">

                    <span class="icone-titulo">
                        💡
                    </span>

                    <h1>
                        Sugestões
                    </h1>

                    <p>
                        Escolha melhor o que vestir
                        de acordo com a temperatura.
                    </p>

                </div>


                <div class="clima-sugestao">

                    <span>🌡️</span>

                    <div>

                        <small>
                            Temperatura considerada
                        </small>

                        <strong>
                            <span id="temperaturaSugestao">
                                24
                            </span>°C
                        </strong>

                    </div>

                </div>


                <div class="sugestao-principal">

                    <span class="grande-icone">
                        👕
                    </span>

                    <div>

                        <span class="tag-sugestao">
                            RECOMENDAÇÃO
                        </span>

                        <h2 id="tituloSugestao">
                            Blusa leve
                        </h2>

                        <p id="textoSugestao">
                            Uma opção confortável
                            para o clima atual.
                        </p>

                    </div>

                </div>


                <h2 class="titulo-secao">
                    Por que essa escolha?
                </h2>


                <div class="motivos">

                    <div>
                        <span>✓</span>
                        Conforto térmico
                    </div>

                    <div>
                        <span>✓</span>
                        Adequada ao clima
                    </div>

                    <div>
                        <span>✓</span>
                        Praticidade no dia a dia
                    </div>

                </div>


                <button
                    class="botao-principal"
                    onclick="abrirTela('loja')">

                    Ver roupas recomendadas

                </button>

            </section>


            <!-- =============================================
                 MINHA ROUPA
            ============================================== -->

            <section
                id="telaMinhaRoupa"
                class="app-tela">

                <div class="tela-titulo">

                    <span class="icone-titulo">
                        👕
                    </span>

                    <h1>
                        Minha Roupa
                    </h1>

                    <p>
                        Organize suas roupas e receba
                        sugestões personalizadas.
                    </p>

                </div>


                <button
                    class="adicionar-roupa"
                    onclick="abrirFormularioRoupa()">

                    <span>＋</span>

                    Adicionar roupa

                </button>


                <div
                    id="formularioRoupa"
                    class="form-roupa">

                    <h2>
                        Nova roupa
                    </h2>


                    <input
                        type="text"
                        id="nomeRoupa"
                        placeholder="Nome da roupa"
                    >


                    <select id="categoriaRoupa">

                        <option value="">
                            Categoria
                        </option>

                        <option value="Camiseta">
                            Camiseta
                        </option>

                        <option value="Calça">
                            Calça
                        </option>

                        <option value="Jaqueta">
                            Jaqueta
                        </option>

                        <option value="Regata">
                            Regata
                        </option>

                        <option value="Casaco">
                            Casaco
                        </option>

                    </select>


                    <select id="temperaturaRoupa">

                        <option value="">
                            Temperatura indicada
                        </option>

                        <option value="Frio">
                            Frio
                        </option>

                        <option value="Ameno">
                            Ameno
                        </option>

                        <option value="Quente">
                            Quente
                        </option>

                    </select>


                    <div class="form-acoes">

                        <button
                            onclick="salvarRoupa()">

                            Salvar

                        </button>

                        <button
                            onclick="fecharFormularioRoupa()">

                            Cancelar

                        </button>

                    </div>

                </div>


                <div
                    id="listaRoupas"
                    class="lista-roupas">

                </div>

            </section>


            <!-- =============================================
                 ESTATÍSTICAS
            ============================================== -->

            <section
                id="telaEstatisticas"
                class="app-tela">

                <div class="tela-titulo">

                    <span class="icone-titulo">
                        📊
                    </span>

                    <h1>
                        Estatísticas
                    </h1>

                    <p>
                        Acompanhe seus hábitos no aplicativo.
                    </p>

                </div>


                <div class="estatisticas-grid">

                    <div class="estatistica">

                        <span>
                            🌡️
                        </span>

                        <strong id="mediaTemperatura">
                            24°C
                        </strong>

                        <small>
                            Temperatura média
                        </small>

                    </div>


                    <div class="estatistica">

                        <span>
                            👕
                        </span>

                        <strong id="totalRoupas">
                            0
                        </strong>

                        <small>
                            Roupas cadastradas
                        </small>

                    </div>


                    <div class="estatistica">

                        <span>
                            🛒
                        </span>

                        <strong id="totalCompras">
                            0
                        </strong>

                        <small>
                            Itens no histórico
                        </small>

                    </div>


                    <div class="estatistica">

                        <span>
                            💡
                        </span>

                        <strong>
                            24
                        </strong>

                        <small>
                            Sugestões disponíveis
                        </small>

                    </div>

                </div>


                <div class="grafico-card">

                    <h2>
                        Temperaturas da semana
                    </h2>

                    <div class="grafico">

                        <div class="barra">
                            <span>22°</span>
                            <i style="height:55%"></i>
                            <small>Seg</small>
                        </div>

                        <div class="barra">
                            <span>24°</span>
                            <i style="height:70%"></i>
                            <small>Ter</small>
                        </div>

                        <div class="barra">
                            <span>26°</span>
                            <i style="height:85%"></i>
                            <small>Qua</small>
                        </div>

                        <div class="barra">
                            <span>23°</span>
                            <i style="height:62%"></i>
                            <small>Qui</small>
                        </div>

                        <div class="barra">
                            <span>25°</span>
                            <i style="height:77%"></i>
                            <small>Sex</small>
                        </div>

                        <div class="barra">
                            <span>21°</span>
                            <i style="height:48%"></i>
                            <small>Sáb</small>
                        </div>

                        <div class="barra">
                            <span>24°</span>
                            <i style="height:70%"></i>
                            <small>Dom</small>
                        </div>

                    </div>

                </div>


                <div class="historico-card">

                    <h2>
                        Atividade recente
                    </h2>

                    <p>
                        💡 Sugestão de roupa consultada
                    </p>

                    <p>
                        👕 Roupa adicionada ao guarda-roupa
                    </p>

                    <p>
                        🛍️ Produto visualizado na loja
                    </p>

                </div>

            </section>


            <!-- =============================================
                 PERFIL
            ============================================== -->

            <section
                id="telaPerfil"
                class="app-tela">

                <div class="perfil-topo">

                    <div class="avatar">
                        👤
                    </div>

                    <h1 id="perfilNome">
                        Usuário Temp.Roup
                    </h1>

                    <p id="perfilEmail">
                        usuario@email.com
                    </p>

                </div>


                <div class="perfil-menu">

                    <button onclick="editarPerfil()">

                        <span>✏️</span>

                        <div>
                            <strong>
                                Editar perfil
                            </strong>

                            <small>
                                Alterar seus dados
                            </small>
                        </div>

                        <b>›</b>

                    </button>


                    <button onclick="abrirTela('estatisticas')">

                        <span>📊</span>

                        <div>
                            <strong>
                                Minhas estatísticas
                            </strong>

                            <small>
                                Ver seus dados
                            </small>
                        </div>

                        <b>›</b>

                    </button>


                    <button onclick="mostrarMensagem('Configurações em desenvolvimento.', '#071b72')">

                        <span>⚙️</span>

                        <div>
                            <strong>
                                Configurações
                            </strong>

                            <small>
                                Preferências do aplicativo
                            </small>
                        </div>

                        <b>›</b>

                    </button>


                    <button onclick="sairDaConta()">

                        <span>🚪</span>

                        <div>
                            <strong>
                                Sair da conta
                            </strong>

                            <small>
                                Voltar para a tela inicial
                            </small>
                        </div>

                        <b>›</b>

                    </button>

                </div>

            </section>

        </main>


        <!-- =================================================
             MENU INFERIOR
        ================================================== -->

        <nav class="menu-inferior">

            <button
                class="menu-item ativo"
                data-tela="inicio"
                onclick="abrirTela('inicio')">

                <span>⌂</span>

                <small>
                    Início
                </small>

            </button>


            <button
                class="menu-item"
                data-tela="loja"
                onclick="abrirTela('loja')">

                <span>🛍</span>

                <small>
                    Loja
                </small>

            </button>


            <button
                class="menu-item"
                data-tela="sugestoes"
                onclick="abrirTela('sugestoes')">

                <span>💡</span>

                <small>
                    Sugestões
                </small>

            </button>


            <button
                class="menu-item"
                data-tela="minhaRoupa"
                onclick="abrirTela('minhaRoupa')">

                <span>👕</span>

                <small>
                    Minha Roupa
                </small>

            </button>


            <button
                class="menu-item"
                data-tela="perfil"
                onclick="abrirTela('perfil')">

                <span>👤</span>

                <small>
                    Perfil
                </small>

            </button>

        </nav>

    </section>


    <!-- =====================================================
         CARRINHO
    ====================================================== -->

    <div
        id="carrinho"
        class="carrinho-box">

        <div class="topo-carrinho">

            <div>

                <small>
                    SEU PEDIDO
                </small>

                <h2>
                    Carrinho
                </h2>

            </div>

            <button
                onclick="fecharCarrinho()">

                ×

            </button>

        </div>


        <div id="itens-carrinho">

        </div>


        <div class="carrinho-total">

            <span>
                Total
            </span>

            <strong id="total">
                R$ 0,00
            </strong>

        </div>


        <button
            class="finalizar"
            onclick="finalizarCompra()">

            FINALIZAR COMPRA

        </button>

    </div>


    <!-- =====================================================
         MENSAGEM
    ====================================================== -->

    <div
        id="mensagem"
        class="mensagem">
    </div>


    <script src="script.js"></script>

</body>

</html># temprouptcc_app
