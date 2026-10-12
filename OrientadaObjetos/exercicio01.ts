// Precisas de um molde para guardar os dados dos estudantes do bootcamp, com propriedades e um método de resumo.

// o que deve fazer:

// 1. Criar classe Student com as propriedades name: string e score: number.
// 2. Adiciona um construtor que recebe name e score e os atribui com this.
// 3. Adiciona o método printSummary(): void que imprime o nome e a nota.
// 4. Testa com const student = new Stundent("Marta", 18) e student.printSummary(); esperas Marta teve 18 valores.

class Student {
    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
    printSummary(): void{
        console.log(`Nome: ${this.name}, Nota: ${this.score}`);
    }
}

const student = new Student("Marta", 18);
student.printSummary();
