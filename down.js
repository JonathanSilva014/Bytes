let corSemaforo = "verde";

switch (corSemaforo) {
    case "verde":
        console.log("Pode passar.");
        break;
    case "amarelo":
        console.log("Prepare-se para parar.");
        break;
    case "vermelho":
        console.log("Pare!");
        break;
    default:
        console.log("Cor de semáforo inválida.");
}