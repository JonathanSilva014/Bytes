// a Porcetangem de bateria nunca pode sair de 0 a 100

// o que deve fazer

// 1. Criar a Função clamp(value: number, min: number, max: number): number
// 2. Denrto dela, usa Math.max para garantir o minimo e math.min para garantir o maximo.
// 3. Faz console.log de clamp(100, 0, 100) clamp(0, 0, 100) e clamp(50, 0, 100) e confirma que dá 100, 0 e 50

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

console.log(clamp(100, 0, 100));
console.log(clamp(0, 0, 100));
console.log(clamp(50, 0, 100));