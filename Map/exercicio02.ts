const stockByProductId: Map<string, number> = new Map();

stockByProductId.set("Teclado Mecânico", 10);
stockByProductId.set("Mouse Gamer", 5);
stockByProductId.set("Notebook", 3);

console.log(stockByProductId.get("Teclado Mecânico"));