const livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };

const { titulo, autor } = livro;
console.log(titulo, autor);

function descricaoLivro({ titulo, autor }) {
  return `${titulo} - ${autor}`;
}

console.log(descricaoLivro(livro));