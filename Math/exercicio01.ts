// um preço chaega como decimal e queres mostra-lo como interiro

// Oque fazer 

// 1. Declarar uma função roundPrice como o parametro price: number e retorno number
// 2. Devolver Math.round(price)
// 3. Mostrar Math.round(14.6), Math.floor(4.9) e Math.ceil(4.1)
// 4. Mostrar Math.round(-4,5)  e confirmar que dá -4 (não -5)
// 5. Chama roundPrice(19.6) e confirmar que dá 20.


const roundPrice = (price: number): number =>{
    return Math.round(price);
};

console.log(Math.round(14.6)); //ARRENDODAR
console.log(Math.floor(4.9)); // IGNORA DEPOIS DO PONTO
console.log(Math.ceil(4.1)); // ARREDONDA PARA CIMA, IGNORA DEPOIS DO PONTO
console.log(Math.round(-4.5));
console.log(roundPrice(19.6));