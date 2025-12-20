import { Vehiculo } from "./Vehiculo.js";

export class Moto extends Vehiculo{
    constructor(marca, modelo, año, cilindrada){
        super(marca, modelo, año)
        this.cilindrada = cilindrada
    }
    descripcion(){
        return console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Cilindrada: ${this.cilindrada}`);
    }
}

