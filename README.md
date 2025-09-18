1 – Qual o significado de UX? Cite um exemplo. 

UX (User Experience) significa Experiência do Usuário. Refere-se à forma como uma pessoa se sente ao interagir com um produto, serviço ou sistema. Isso inclui aspectos como facilidade de uso, acessibilidade, desempenho e até emoção. 

Exemplo: 

 Um app de banco que permite fazer transferências em poucos cliques, com segurança e rapidez, oferece uma boa UX, pois resolve a necessidade do usuário de forma eficiente. 

 

2 – Encontre um exemplo real de um software que tenha um bom UX. Por que ele é positivo? 

Exemplo real: Spotify 

Por que é positivo? 

 O Spotify oferece uma experiência fluida para ouvir músicas. Ele recomenda playlists personalizadas, tem busca eficiente, interface limpa e é fácil de usar, mesmo para iniciantes. Ele entende o que o usuário precisa e entrega isso de forma prática e agradável. 

3 – Qual o significado de UI? Cite um exemplo. 

UI (User Interface) significa Interface do Usuário. É a parte visual com a qual o usuário interage: botões, ícones, cores, fontes, menus, etc. 

Exemplo: 

 O botão de “curtir” no Instagram, com o ícone de coração, é um elemento de UI. Ele é facilmente reconhecível e transmite bem sua função. 
 

4 – Encontre um exemplo real de um software que tenha um bom UI. Por que ele é positivo? 

Exemplo real: Apple Music (iOS) 

Por que é positivo? 

 A interface é visualmente limpa, com ícones bem organizados, cores suaves e tipografia legível. Os elementos são intuitivos e agradáveis aos olhos, tornando a navegação simples e confortável. 

 

5 – Qual a diferença entre UX e UI? Exemplifique a diferença. 

Diferença: 

UX é sobre como o usuário se sente ao usar o produto. 

UI é sobre como o produto se apresenta visualmente e como é manipulado. 

Exemplo de diferença: 

 Imagine um site de e-commerce: 

Se o site carrega rápido, os produtos são fáceis de encontrar e a compra é finalizada sem complicações, isso é boa UX. 

Se o site tem um design moderno, cores agradáveis, botões bem posicionados e legíveis, isso é boa UI. 

 

📈 Melhorias para UX na função getPost 

Mostrar um spinner/loader claro enquanto os produtos estão sendo carregados para o usuário saber que a aplicação está buscando os dados. 

Exibir mensagem amigável e visível caso a API falhe ou retorne erro (ex: “Não foi possível carregar os produtos, tente novamente mais tarde”). 

Permitir recarregar a lista manualmente (botão “Atualizar”) para o usuário controlar a atualização. 

Carregar um número limitado de produtos inicialmente, se a lista for grande, e implementar paginação ou scroll infinito para melhorar performance. 

Organizar os produtos por categorias ou filtros para facilitar a busca (mesmo que simples, por exemplo, ordenar por preço). 

Garantir que a lista funcione bem e seja fácil de usar em dispositivos móveis (design responsivo). 

 

🎨 Melhorias para UI na função renderPost (exibição dos produtos) 

Cards com layout mais limpo e organizado (ex: imagem no topo, título e detalhes abaixo, espaçamento adequado). 

Melhorar contraste e cores dos textos para facilitar leitura (usar cores claras para texto sobre fundo escuro). 

Imagens dos produtos com tamanho consistente e bordas arredondadas para visual mais moderno. 

Adicionar sombra leve nos cards para destacá-los do fundo. 

Texto mais legível (tamanho e espaçamento entre linhas, fontes). 

Botão ou link claro para ação (ex: comprar, ver detalhes) se aplicável. 

Adicionar efeitos visuais nos cards ao passar o mouse (hover) para indicar interatividade. 

Colorir os Cards de acordo com a categoria, mantendo todos na mesma paleta de cores 

Ajustar o container do #list para manter os cards alinhados e com espaçamento uniforme. 

ANTES:
<img width="1917" height="912" alt="Captura de tela 2025-09-04 155814" src="https://github.com/user-attachments/assets/6556b051-e1cc-4682-b4a5-dc092ab14279" />


DEPOIS:
<img width="1919" height="777" alt="Captura de tela 2025-09-18 132331" src="https://github.com/user-attachments/assets/9dfcc473-b9fe-4c1f-936b-f1aac54a7959" />
<img width="1897" height="905" alt="Captura de tela 2025-09-18 132356" src="https://github.com/user-attachments/assets/3d39c9c8-36f3-4b6c-87b6-a2b1a375cfa1" />

As alterações foram: 
UX- filtragem por categoria
UI- botão de "Comprar", cores do card de acordo com a categoria e título do que está sendo exposto
