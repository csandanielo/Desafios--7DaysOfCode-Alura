/* Day 1_Comparador

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'



function comparador(){
    if (numeroUm == stringUm) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');}
    else {
        console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
    }
    if (numeroTrinta === stringTrinta) {
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, e mesmo tipo');}
    else {
        console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');}
   if (numeroDez == stringDez) {
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');}
    else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');}
}


*Day 2_Interação com usuário



const nome = prompt("Qual seu nome?");
const bemvindo = `Bem-vindo ${nome}`;

alert(bemvindo);

const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?")
const mensagem = `Olá ${nome}, você tem ${idade} e ja está aprendendo ${linguagem}`;


alert(mensagem);

const pergunta = prompt(`Você está gostando de estudar ${linguagem}? Responda 1 para SIM e 2 para NÃO`);


    if (pergunta ==1) {
        alert (`Muito bom! Continue estudando e você terá muito sucesso`);
    }
    else { 
        alert (`Ahh que pena... Experimente aprender outras linguagens!`);
    }

*/

/*Day 3_Fluxo de decisão

while (teste){
    const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite: 1 para 'Front-End' ou 2 para 'Back-End'");
    let linguagem ="";

    if (area ==1){
    linguagem = prompt("Você quer aprender React ou Vue?");
    }
    else if (area ==2) {
    linguagem = prompt("Você quer aprender C# ou Java?");
    } 

    else {
    teste = true
    alert("Você não inseriu um valor válido!");
    }
}


while (teste){

    const especializacao = prompt("Legal! Para seguir se especializando na área escolhida digite 1, ou 2 se quiser se tornar Fullstack");
    if (especializacao == 1) { 
    alert(`Muito bom! Continue se dedicando!`);
    }
        else if (especializacao == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`)
    }
    else {
    teste = true
    alert("Você não inseriu um valor válido!");
    }
}
while (teste){
    let mensagem= prompt("Existe alguma outra tecnologia que gostaria de aprender? Digite ok para sim ou não para não");

        while (mensagem === "ok"){
        let qual= prompt("Qual seria?")
        alert(`Muito bem! ${qual} é muito interessante!`);
            mensagem = prompt("Existe alguma outra tecnologia que gostaria de aprender? Digite ok para sim ou não para não");
                if (mensagem ==="não"){
                alert(`Obrigado por participar! Boa sorte em sua jornada.`);
                }
                else {
                    teste = true
                    alert(`Você não inseriu um valor válido!`);
                }
        break;
        }
    }
    */

    /* Day 4_Randomização

    const numero = 8; 
    let chute = "";
    let acertou = false;

   
    for (let contador = 0; contador < 3; contador++){
        chute =  prompt (`Qual número estou pensando? de 0 a 10`);
        if (chute == numero){
            alert(`Parabéns, você acertou! O número era ${numero}`);
            acertou = true;
        break;
        }
        else {
            alert("Errado!");
        }
    }
    if (!acertou){
        alert(`Chances esgotadas! O número era ${numero}`);
    }
*/

/* Day 4_RandomizaçãoExtra

    const numeroAleatorio = Math.floor(Math.random()*(11) + 0);
    let chute = "";
    let acertou = false;

   
    for (let contador = 0; contador < 3; contador++){
        chute =  prompt (`Qual número estou pensando? de 0 a 10`);
        if (chute == numeroAleatorio){
            alert(`Parabéns, você acertou! O número era ${numeroAleatorio}`);
            acertou = true;
        break;
        }
        else {
            alert("Errado!");
        }
    }
    if (!acertou){
        alert(`Chances esgotadas! O número era ${numeroAleatorio}`);
    }
*/

/* Day 5_Listas

let Frutas = [];
let Laticinios = [];
let Congelados = [];
let Doces = []; 
let Basicos = [];
let Bebidas = [];
let listaDeCompras =[];
let setor = ["Frutas", "Laticinios", "Congelados", "Doces", "Basicos", "Bebidas"];
let categoria = [Frutas, Laticinios, Congelados, Doces, Basicos, Bebidas];



alert("Bem vindo à sua lista de compras");

while(true){
    adicionarNaLista  = prompt("Deseja adicionar algum item na sua lista de compra? Responda 1 para sim ou 2 para não");
        if (adicionarNaLista == 2){
        alert(`Obrigada por usar nossa lista!`);
        break;
        }
    

        if (adicionarNaLista == 1){
        qual = prompt("Qual comida deseja adicionar?");
        qualSetor = prompt("Qual setor é classificado? Frutas, Laticinios, Congelados, Doces, Basicos, Bebidas");

            for (i=0; i<setor.length; i++){

                if(qualSetor == setor[i]){
                    categoria[i].push(qual);
                }
            }
        }
}
alert(`LISTA DE COMPRAS  frutas: ${Frutas} Laticinios : ${Laticinios} Congelados: ${Congelados} Doces: ${Doces} Itens Basicos:  ${Basicos} Bebidas :  ${Bebidas}`);
*/

/* Day 6_Remoção de listas


let Frutas = [];
let Laticinios = [];
let Congelados = [];
let Doces = []; 
let Basicos = [];
let Bebidas = [];
let listaDeCompras =[];
let setor = ["Frutas", "Laticinios", "Congelados", "Doces", "Basicos", "Bebidas"];
let categoria = [Frutas, Laticinios, Congelados, Doces, Basicos, Bebidas];
let verificaItem = [];
let removeItem = [];
let removeQual = [];



alert("Bem vindo à sua lista de compras");

while(true){
    adicionarNaLista  = prompt("Deseja adicionar algum item na sua lista de compra? Responda 1 para sim ou 2 para não");
        if (adicionarNaLista == 2){
        alert(`Obrigada por usar nossa lista!`);
        break;
        }
    

        if (adicionarNaLista == 1){
        qual = prompt("Qual comida deseja adicionar?");
        qualSetor = prompt("Qual setor é classificado? Frutas, Laticinios, Congelados, Doces, Basicos, Bebidas");

            for (i=0; i<setor.length; i++){

                if(qualSetor == setor[i]){
                    categoria[i].push(qual);
                }
            }
        }
}
alert(`LISTA DE COMPRAS  frutas: ${Frutas} Laticinios : ${Laticinios} Congelados: ${Congelados} Doces: ${Doces} Itens Basicos:  ${Basicos} Bebidas :  ${Bebidas}`);

while (true){
    
    alert(`LISTA DE COMPRAS  frutas: ${Frutas} Laticinios : ${Laticinios} Congelados: ${Congelados} Doces: ${Doces} Itens Basicos:  ${Basicos} Bebidas :  ${Bebidas}`);
    removeItem = prompt ("Você deseja remover algum item da sua lista? Responda 1 para sim ou 2 para não");
    removeQual = prompt ("Qual item?");


    if(Frutas.indexOf(removeQual) != -1){
        Frutas.splice(Frutas.indexOf(removeQual),1);
        alert(`${removeQual} foi removido da lista`); 
    }else if(Laticinios.indexOf(removeQual) != -1){
        Laticinios.splice(Laticinios.indexOf(removeQual),1);
        alert(`${removeQual} foi removido da lista`);
    }else if(Congelados.indexOf(removeQual) != -1){
        Congelados.splice(Congelados.indexOf(removeQual),1);
        alert(`${removeQual} foi removido da lista`);
    }else if(Doces.indexOf(removeQual) != -1){
        Doces.splice(Doces.indexOf(removeQual),1);
        alert(`${removeQual} foi removido da lista`);
    }else if(Basicos.indexOf(removeQual) != -1){
        Basicos.splice(Basicos.indexOf(removeQual),1);
        alert(`${removeQual} foi removido da lista`);
    }else if(Bebidas.indexOf(removeQual) != -1){
        Bebidas.splice(Bebidas.indexOf(removeQual),1);
        alert(`${removeQual} foi removido da lista`);
    }else{
    alert("essa comida não está na lista");
    }

    if (removeItem == 2){
        alert(`LISTA DE COMPRAS  frutas: ${Frutas} Laticinios : ${Laticinios} Congelados: ${Congelados} Doces: ${Doces} Itens Basicos:  ${Basicos} Bebidas :  ${Bebidas}`);
        alert(`Boas compras!`);
        break;
    }
}
*/

