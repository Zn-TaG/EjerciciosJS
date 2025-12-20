import { Auto } from "../Auto.js";
import { Camion } from "../Camion.js";
import { Moto } from "../Moto.js";

export class Factory {
    crearVehiculo(tipo) {
        switch (tipo) {
            case 'auto':
                return new Auto("audi", "R8", 2022, 4);
            case 'camion':
                return new Camion("chevrolet", "GGG", 2022, 10);
            case 'moto':
                return new Moto("KTM", "DF", 2022, 125);
            default:
                throw new Error('Tipo de vehículo no reconocido');
        }
    }
}