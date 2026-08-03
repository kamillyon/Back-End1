const gerarRespostaHTTP = (status, mensagem) => {
  return `HTTP Status ${status}: ${mensagem}`;
};

const resultado = gerarRespostaHTTP(200, "Sucesso ao buscar produtos");
console.log(resultado);