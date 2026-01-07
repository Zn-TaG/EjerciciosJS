export class User {
    constructor(name, status){
        this.name = name;
        this.status = status;
    }
    mostrarInfo(){
        return `Nombre de Usuario: ${this.name} - Status: ${this.status}. Status de Usuario: ${this.status}`
    }
}