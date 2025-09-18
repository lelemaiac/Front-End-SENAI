// Elementos HTML
const $list = document.getElementById('list');
const $error = document.getElementById('error');
const $spinner = document.getElementById('spinner');

const form = document.getElementById("postForm");
const output = document.getElementById("output");

const API = 'https://dummyjson.com'; // API pública de testes

function showSpinner(show) {
    $spinner.style.display = show ? 'inline' : 'none';
    $spinner.textContent = "Salvo"
}

function showError(msg) {
    $error.textContent = msg || '';
}

// função para exibir os posts
function renderPosts(posts) {

    // innerHTML para modificar o elemento
    // .map transforma o JSON em HTML
    // for carro in carros é igual a post.map(p =>
    $list.innerHTML = posts.map(p => `
    <div class="card">
      <strong>#${p.id} — ${p.title}</strong>
      <p>${p.body}</p>
    </div>
  `).join('');
}

// função assincrona que carrega os posts
async function getPosts() {
    showError('');
    try {
        // fazendo uma requisição GET
        const res = await fetch(`${API}/usuarios`);

        // verifica se deu algum erro na API
        if (!res.ok) {
            throw new Error(`Erro HTTP ${res.status}`);
        }

        // aguarda o retorno da API
        const data = await res.json();

        // chama a função para exibir o resultado
        renderPosts(data);
    } catch (err) {
        showError(err.message ?? 'Falha ao buscar dados');
    }
}

// função assincrona que cadastra um post
async function createPost() {
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // impede recarregar a página

        // pega os valores digitados nos campos/inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const papel = document.getElementById("papel").value;

        try {
            const response = await fetch("http://10.135.235.50:5002/cadastrar_usuarios", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, email, papel})
            });

            if (!response.ok) {
                output.textContent = "Erro na requisição: " + response.status;
                return;
            }

            alert(`Post criado com sucesso`)
        } catch (err) {
            output.textContent = "Erro: " + err.message;
        }
    });
}

async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const response = await fetch("http://10.135.235.50:5002/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, senha})
        });

        if (!response.ok) {
            throw new Error("Login falhou");
        }

        const data = await response.json();
        localStorage.setItem("token", data.access_token); // salva token
    } catch (e) {
        output.textContent = "Erro: " + e.message;
    }
}

async function createPostToken() {
    document.getElementById("btn").addEventListener("click", async (e) => {
        const token = localStorage.getItem("token"); // Pegar o token

        if (!token) {
            output.textContent = "Realize o login novamente!";
            return;
        }

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const papel = document.getElementById("papel").value;

        try {
            const response = await fetch("http://10.135.235.50:5002/cadastrar_usuarios", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${access_token}`, // 🔑 Aqui vai o token
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, email, papel})
            });

            if (!response.ok) {
                output.textContent = "Erro: " + response.status;
                return;
            }

            const data = await response.json();
            // usar a resposta da api ...
        } catch (err) {
            output.textContent = "Erro: " + err.message;
        }
    });
}

// função para exibir os posts
function renderPost(posts) {

    // innerHTML para modificar o elemento
    // .map transforma o JSON em HTML
    // for carro in carros é igual a post.map(p =>
    $list.innerHTML = posts.products.map(product => `
    <div id="card" class="card ${product.category}">
        <img src="${product.thumbnail}" alt="img">
        <strong>${product.title}</strong>
        <p><strong>Categoria:</strong> ${product.category}</p>
        <p><strong>R$:</strong> ${product.price}</p>
        <p><strong>Avaliação: </strong> ${product.rating}</p>
        <p><strong>Restam apenas: </strong> ${product.stock}</p>
        <button>🛒Comprar</button>
    </div>
  `).join('');
}

// função que carrega os posts
async function getPost() {
    showError('');
    try {
        const res = await fetch(`${API}/products`);
        if (!res.ok) {
            throw new Error(`Erro HTTP ${res.status}`);
        }
        const data = await res.json();

        allProducts = data.products;  // SALVA os produtos aqui
        renderPost(data);              // EXIBE os produtos

    } catch (err) {
        showError(err.message ?? 'Falha ao buscar dados');
    }
}


let allProducts = []; // guarda todos os produtos

function filterByCategory() {
  const selectedCategory = document.getElementById('filtrar_categoria').value;

  if (selectedCategory === 'all') {
    renderPost({ products: allProducts });
  } else {
    const filtered = allProducts.filter(product =>
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    renderPost({ products: filtered });
  }
}


// adiciona o evento de mudança direto no <select>
document.getElementById('filtrar_categoria').addEventListener('change', filterByCategory);

// chama para carregar os produtos ao abrir a página
getPost();