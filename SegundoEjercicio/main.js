//import de los datos del invitado
import { Invitados } from "./data.js";

let ticketFree = true;
const fiestaDalto = {
    name: "Fiestas de Dalto",
    listadoInvitados : []
};

class SistemOpen {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.contador = 0;
        this.horarioEntrada = 1000;
        this.ticketFree = ticketFree; 
    }
    contInvitados(){
        let listInvited = fiestaDalto.listadoInvitados;
        //si no hay invitados, se inicializa el contador y el horario de entrada
        if(listInvited[0] == undefined){
            // se crea el primer invitado
            let ticket = this.getInvitado();
            console.log(fiestaDalto.listadoInvitados);
            listInvited[listInvited.length -1][2] += 1;
            listInvited[listInvited.length -1][3] += (listInvited[listInvited.length -1][2] * 200);
            //se retorna el ticket del primer invitado
            return ticket;
         }
        //si ya hay invitados, se incrementa el contador y el horario de entrada
        else{
            //se obtiene el ultimo invitado de la lista
            let count = listInvited[listInvited.length -1][2];
            let hr = listInvited[listInvited.length -1][3];
            //se genera el nuevo ticket del invitado
            let ticket = this.getInvitado();
            //se realiza el incremento del contador y el horario de entrada
            listInvited[listInvited.length -1][2] = count + 1;
            listInvited[listInvited.length -1][3] = hr + 200;
            // se retorna el ticket del nuevo invitado
            return ticket;
        }
    }
    getInvitado(){
        //se crea el ticket del invitado
        let ticket = [];
        //se asignan los valores del ticket
        ticket.push(this.name,this.age,this.contador,this.horarioEntrada,this.ticketFree);
        //se agrega el ticket al listado de invitados
        fiestaDalto.listadoInvitados.push(ticket);
        //se retorna el ticket
        return ticket;
    }
    gestorPago(ticket){
        //se verifica si el invitado es mayor de edad 
        if(ticket[1] >= 18){
            //si el invitado entra durante y despues de las 2:00, se le permite la entrada sin pagar
            if(ticket[3] >= 2000 && this.ticketFree == true){
                console.log(`Felicidades ${ticket[0]} puedes ingresar sin pagar.`);
                console.log(`Hora de Entrada: ${ticket[3]}`);
                console.log(`N° de ticket: ${ticket[2]}`);
                ticketFree = false;
            }
            //si el invitado no tiene un ticket gratuito, se le cobra el coste de ingreso
            else{
                console.log(`Bienvenido ${ticket[0]}, debes pagar el coste de ingreso. Coste: $39.000.`);
                console.log(`Hora de Entreda: ${ticket[3]}`);
                console.log(`N° de ticket: ${ticket[2]}`);
            } 
        }
        //si el invitado es menor de edad
        else {
            console.log(`Bienvenido ${ticket[0]}, debes pagar el coste de ingreso. Coste: $39.000.`);
            console.log(`Hora de Entreda: ${ticket[3]}`);
            console.log(`N° de ticket: ${ticket[2]}`);
        }
    }
}

Invitados.forEach(element => {
    let invitado = new SistemOpen(element.name, element.age);
    let ticket = invitado.contInvitados();
    invitado.gestorPago(ticket);    
});

