const os = require('os');

console.log('=== INFORMAÇÕES DO SISTEMA ===');
console.log('\nArquitetura do processador: ', process.arch);
console.log('Versão do Node.js: ', process.version);
console.log('Diretório atual: ', process.cwd());
console.log('Diretório home do usuário: ', os.homedir())