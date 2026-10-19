// Escreva altura: quantos nós há no caminho mais longo, da raiz a uma folha? Resolve o primeiro a esquerda e a direita, deppois soma 1.


type TreeNode = { value: number; left?: TreeNode; right?: TreeNode }

function altura(no:TreeNode | undefined): number {
    if (no === undefined) {
        return 0;
    }

    return 1 + Math.max(altura(no.left), altura(no.right));
}

const arvore: TreeNode = { value: 40, left: { value: 20, left: { value: 10}, right: { value: 30 } }, right: { value: 60}}

console.log(altura(arvore)) // => 3