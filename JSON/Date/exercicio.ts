// Queres saber se uma data acontece depois de outra.

// Oque fazer

// 1. Declarar uma função isAfter com parametros fisrtDate: Date, secondDate: Date e retorno boolean
// 2. Devolver firstDate.getTime() > secondDate.getTime()
// 3. Criar duas datas com Date.UTC - pOR EXEMPLO 8 de julho e 1 de Julho de 2026.
// 4. Chama isAfter e confirma que devolve true.

function isAfter(firstDate: Date, secondDate: Date): boolean {
    return firstDate.getTime() > secondDate.getTime();
}

const date1 = new Date(Date.UTC(2026, 6, 8)); // 8 de julho de 2026
const date2 = new Date(Date.UTC(2026, 6, 1)); // 1 de julho de 2026

console.log(isAfter(date1, date2)); // true 