# pratica-react
2. Instruções para execução:
    na pasta backend, instalar as dependências necessárias (npm intall) e iniciar o servidor (node --watch server.js)
    na pasta catalogo-produtos, instalar as dependências necessárias (npm intall) e iniciar o servidor (npm run dev)

3. 
App (Gerencia o estado de produtos, busca por ID selecionado e carregamento)
├── Header (Cabeçalho do sistema)
├── ProductSearch (Campo de busca dos produtos)
├── ProductList (Renderiza a lista de produtos)
│   └── ProductCard (Exibe as informações de cada item e o botão "Ver detalhes")
└── ProductDetails (Exibe os detalhes das informações do produto selecionado via API)

4. O componente App é o responsável por buscar a lista completa de produtos na API (Server.js - usando express) e controla os estados globais dos produtos cadastrados, além da busca e da selação por ID. o temo digitado na barra de pesquisa (ProductSearch) atualiza, sem recarregar a página, a busca em App, filtrando a lista de produtos que vai ser exibida por ProductList. Cada item da lista filtrada é renderizada por um ProductCard, que recebe a função onViewDetails via props. O card do protudo possui um botão de exibir detalhes que, ao ser clicado, envia o ID do respectivo produto para a API por uma requisição GET pra buscar os dados específicos desse produto. Por fim, o objeto retornado pelo GET tem suas informações renderizadas pelo componente ProductDetails.

5.  ![alt text](<Captura de tela 2026-11-01 212009.png>)
    ![alt text](<Captura de tela 2026-11-01 212019.png>)
    ![alt text](<Captura de tela 2026-11-01 212027.png>)