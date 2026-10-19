let pontuacao = 5;
let nota;

if (pontuacao >= 90) {
    nota = "A";
} else if (pontuacao >= 80) {
    nota = "B";
} else if (pontuacao >= 70) {
    nota = "C";
} else if (pontuacao >= 60) {
    nota = "D";
} else {
    nota = "E";
}
console.log("A nota é " + nota + ".");