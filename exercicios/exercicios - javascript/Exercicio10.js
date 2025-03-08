let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

let dobrados = pares.map(num => num * 2);
console.log(dobrados);

let soma = dobrados.reduce((acc, num) => acc + num, 0);
console.log(soma);