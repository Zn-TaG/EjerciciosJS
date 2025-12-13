
export class RepositorioUsuarios {
    constructor(){
        this.usuarios = [];
    }
    agregarUsuario(usuario){
        if(this.usuarios.some(u => u.nombre == usuario.nombre)){
            throw new Error("El usuario ya existe");
        }
        else{
            usuario.fecha = new Date();
            this.usuarios.push(usuario);
        }
    }
    buscarPorNombre(nombre){
        return this.usuarios.filter(u => u.nombre === nombre);
    }
    listar(){
        return this.usuarios;
    }
}