const bici = [
    {
        nome:'Cannondale',
        peso: '7'
    }, {
        nome:'Factor',
        peso: '8'
    }, {
        nome:'Pinarello',
        peso: '9'
    }
];
const domBici = document.querySelector('.bici');
bici.forEach(element => {
    const {peso,nome} = element;
    if(peso < 8){
        const biciPeso = `<span>${nome}</span> </br> <span>dal peso di :${peso}kg</span>`;
        domBici.innerHTML = biciPeso;
        console.log(peso);
    }
});