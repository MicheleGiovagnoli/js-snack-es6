const bici = [
    {
        nome:'Cannondale',
        peso: '3'
    }, {
        nome:'Factor',
        peso: '1'
    }, {
        nome:'Pinarello',
        peso: '9'
    }
];
let biciPiccola = 100;
let nomeBici = '';
const domBici = document.querySelector('.bici');
bici.forEach(element => {
    const {peso,nome} = element;
    nomeBici=nome;
    if(peso < biciPiccola){
        biciPiccola = peso;
    }
    
});
    const biciPeso = `<span>${nomeBici}</span> </br> <span>dal peso di :${biciPiccola}kg</span>`;
    domBici.innerHTML = biciPeso;
       

















const squadra = [
    {
        nome:'inter',
        punti_fatti: '0',
        falli_subiti:'0'
    }, {
        nome:'milane',
        punti_fatti: '0',
        falli_subiti:'0'
    }, {
        nome:'roma',
        punti_fatti: '0',
        falli_subiti:'0'
    }
];

let squadraNome = '';
let squadraPunti_fatti = generateRandomNumber(1,100);;
let squadraFalli_subiti = generateRandomNumber(1,100);;
squadra.forEach(element => {
    const {nome,punti_fatti,falli_subiti} = element;
    squadraNome = nome;
    
});

const domSquadra = document.querySelector('.squadra');
const newSquadra = `<span>${squadraNome}</span> </br> <span>${squadraPunti_fatti}</span> </br> <span>${squadraFalli_subiti}</span>`;
    domSquadra.innerHTML = newSquadra;


function generateRandomNumber(min, max){
    const randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
    return randomNumber;
}
