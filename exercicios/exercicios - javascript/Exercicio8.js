let pessoa = { nome: "carlos", idade: 28, cidade: "ssão paulo" };

pessoa.profissao = "engenheiro";
console.log(pessoa);

delete pessoa.cidade;
console.log(pessoa);

console.log(Object.keys(pessoa));