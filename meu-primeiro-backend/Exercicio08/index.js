const usuario = {
  id: 101,
  nome: "Kamilly Ribeiro",
  email: "kamilly@senai.br",
  ehAdmin: true
};

console.log("Nome do Usuário:", usuario.nome);
console.log("Email:", usuario.email);
console.log("Perfil:", usuario.ehAdmin ? "Administrador" : "Aluno");