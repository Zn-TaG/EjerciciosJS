import { Personas, helados } from './data.js';

class Persona {
    constructor(name,dinero){
        this.name = name;
        this.dinero = dinero;
    }
}

const Roberto = new Persona(Personas[0].name,Personas[0].dinero);
const Pedro = new Persona(Personas[1].name,Personas[1].dinero);
const Cofla = new Persona(Personas[2].name,Personas[2].dinero);

function eleccionHelado(name){
    helados.forEach((element => {
        if(name.dinero >= element.precio){
            console.log(`${name.name} Puedes comprar el: ${element.name} y tu vuelto es:`+ (name.dinero - element.precio));
        }
    }));
}

eleccionHelado(Roberto);
eleccionHelado(Pedro);
eleccionHelado(Cofla);