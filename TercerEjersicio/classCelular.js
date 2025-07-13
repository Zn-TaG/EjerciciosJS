export class celular {
    constructor(color, peso, resolucionPantalla, camara, memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.camara = camara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
        this.discoDuro = 120; // en GB
        this.listAplicaciones = []; 
    }
    open(){
        console.log(`iniciando celular`);
        this.encendido = true;
    }
    reiniciar(){
        console.log(`reiniciando celular`);
        if(this.encendido == true){
            this.encendido = false;
            this.open();
        }
    }
    tomarFoto(){
        if(this.encendido == true){
            console.log(`La foto ha sido tomada con una resolución de ${this.resolucionPantalla} y una cámara de ${this.camara} megapíxeles, el tamaño de la foto es 16 KB`);
        }
    }
    grabarVideo(){
        if(this.encendido == true){
            console.log(`El video ha sido grabado con una resolución de ${this.resolucionPantalla} y una cámara de ${this.camara} megapíxeles, el tamaño del video es 20 MB`);
        }
    }
    appStore(application){
        if(this.encendido == true){
            console.log(`Abriendo la tienda de aplicaciones`);
            let option = prompt(`Aplicaciones disponibles: 0.WhatsApp, 1.Instagram, 2.Facebook, 3.Twitter`);

            console.log(`Descargando aplicación`);
            for(let element in application){
                if(element == option){
                    let app = application[element];
                    this.listAplicaciones.push(app);
                    this.discoDuro -= application[element].tamaño;
                    console.log(`Aplicaciones instalada`);
                }
            }
        }
    }
    unstallApp(){
        if(this.encendido == true){
            this.listAplicaciones.forEach(element => {
                console.log(`Aplicación instalada: ${element.aplication}, Tamaño: ${element.tamaño} MB`);
            });
            let appToUnstall = prompt(`Ingrese el nombre de la aplicación que desea desinstalar:`);

            this.listAplicaciones.forEach(element => {
                if(element.aplication.toLowerCase() === appToUnstall.toLowerCase()){
                    this.discoDuro += element.tamaño;
                    console.log(`Desinstalando aplicación: ${element.aplication}`);

                    this.listAplicaciones.slice(element, 1);
                    console.log(`Aplicación desinstalada ${this.listAplicaciones.length}`);
                } 
                else {
                    console.log(`La aplicación ${appToUnstall} no está instalada.`);
                }
            });
        }
    }

}