class Pedido {
    constructor(id, listProducto){
        this.id = id
        this.listProducto = listProducto
        this.total = 0
    }
    calcularTotal(){
        this.total = this.listProducto.reduce((acc, {precio}) =>{
            acc += acc + precio
            return this.total
        },0)
    }
}