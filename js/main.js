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
    //let m = Math.min(peso);
    //console.log(m);
    if(peso < biciPiccola){
        biciPiccola = peso;
    }
    
});
        const biciPeso = `<span>${nomeBici}</span> </br> <span>dal peso di :${biciPiccola}kg</span>`;
        domBici.innerHTML = biciPeso;
       // console.log(peso);

















/*const squadra = [
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
for
function generateRandomNumber(min, max){
    const randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
    return randomNumber;
}

function generateUniqueRandomNumber(array, min, max){
    let value = false;
    let uniqueRandomNumber;
    while( !value ){
        uniqueRandomNumber = generateRandomNumber(min, max);
        if(!array.includes(uniqueRandomNumber)){
            value = true; 
        }
    }
    return uniqueRandomNumber;
}*/