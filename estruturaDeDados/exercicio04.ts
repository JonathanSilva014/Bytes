//Escreve porId: recebe o array e devolve um Map que liga cada Id ao nome. um ciclo e um set.

type Aluno = {id: string; nome: string}

function porId(alunos: Aluno[]): Map<string, string> {
    const indice = new Map<string, string>()
    for (const aluno of alunos) {
        indice.set(aluno.id, aluno.nome);
    }
    return indice
}

const mapa = porId([{ id: "stu-1", nome: "Marta" }, { id: "stu-2", nome: "Rui"}])

console.log(mapa.get("stu-2")) // => "Rui"