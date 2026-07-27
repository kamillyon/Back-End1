//DECLARAÇÃO DE VARIÁVEIS EM JAVASCRIPT
//Em JavaScript, existem três formas de declarar Variáveis:

//1. Usando var (forma mais antiga)
var idade = 25;
var nome = "Maria";
var estudante = true; //No sistema binário vale 1

//2. Usando let (introduzido no ES6)
let idade = 25;
let nome = "Maria";
let estudante = true;

//3. Usando const (para valores constantes (que não mudam))
const PI = 3.14159;
const NOME_EMPRESA = "TechSolutions";


//TIPOS DE DADOS EM JAVASCRIPT
//1. Tipos Primitivos
Number (número)
//Representa tanto números inteiros quanto decimais
let idade = 25; //Número inteiro
let altura = 1.75; //Número decimal
let temperatura = -5;

String (texto)
//Representa sequências de caracteres 
let nome = 'João';
let sobrenome = "Silva";
let endereco = "Rua das flores, 123";

Boolean (Booleano)
//Representa valores lógicos: verdadeiro (true) ou falso (false)
let estudante = true;
let  = false;

Undefined 
//Representa uma variável que foi declarada, mas não recebeu um valor definido
let cidade; //valor é undefined

Null
//Representa a ausência intencional de valor
let telefone = null; //Explicitamente sem valor

2. Tipos Complexos
//Array (vetor)
//Coleção ordenada de valores
let frutas = ["maçã", "banana", 'laranja'];
let numeros = [1, 2, 3, 4, 5];
let misturado = [1, 'dois', true, null];

//Object (objeto)
//Coleção de pares chave-valor
let pessoa = {
nome: 'Ana',
idade: 30,
profissao: "Desenvolvedora"
};


//VERIFICANDO O TIPO DE UMA VARIÁVEL

let idade = 25;
console.log(typeof idade);

let nome = 'Maria';
console.log(typeof nome);

let ativo = true;
console.log(typeof ativo);


//CONVERSÃO ENTRE TIPOS
///De string para número
let numeroTexto = '42';
let numero = Number(numeroTexto);
console.log(typeof numero); //"number"

let numero1 = parseInt(numeroTexto) //Para inteiros
let numero2 = parseFloat(numeroTexto) //Para decimais

//De número para string
let numero = 42;
let texto = String(numero); //"42" (texto)
//Alternativa
let texto2 = numero.toString(); //"42"(texto)
//Para booleano
let valor = 1;
let booleano = Boolean(valor); //True 
//Valores que convertem para false:
//0, "", null, undefined, NaN, false




//EXEMPLO PRÁTICO: CALCULADORA DE IDADE
//Declaração de variáveis
const anoAtual = 2026;
let anoNascimento = 1990;
//calculando a idade
let idade = anoAtual - anoNascimento;
//exbindo o resultado
console.log("Você tem " + idade + " anos."); //método antigo
console.log(`Você tem ${idade} anos.`) //método recente


//EXEMPLO PRÁTICO: CALCULADORA DE MÉDIA DE NOTAS
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.5;

let media = (nota1 + nota2 + nota3)/3;
console.log(`Sua média das notas é ${media.toFixed(1)}.`);


//OPERADORES DE ATRIBUIÇÃO COMBINADOS
let pontos = 100;
console.log(`Pontuação Inicial: ${pontos}.`);
//O jogador ganhou 50 pontos
pontos += 50;
console.log(`Pontuação após ganhar 50 pontos: ${pontos}`);
//O jogador perdeu 30 pontos
pontos -= 30;
console.log(`Pontuação após perder 30 pontos: ${pontos}.`);
