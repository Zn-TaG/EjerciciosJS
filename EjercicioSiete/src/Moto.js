import { Vehiculo } from "./Vehiculo.js";

export class Moto extends Vehiculo{
    constructor(cilindrada){
        this.cilindrada = cilindrada
        super()
    }
    descripcion(){
        return console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Cilindrada: ${this.cilindrada}`);
    }
}

