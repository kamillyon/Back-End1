const rotasAPI = ["/usuarios", "/produtos"];

rotasAPI.push("/pedidos");

console.log("Total de rotas ativas:", rotasAPI.length);

rotasAPI.forEach((rota, indice) => {
  console.log(`Rota #${indice + 1}: ${rota}`);
});