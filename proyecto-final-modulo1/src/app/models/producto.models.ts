export class Producto{
    nombre: string;
    codigoReferencia: string;
    categoria: string;
    precio: string;
    moneda: string;
    descripcion: string;

    constructor(nombre:string,codigoReferencia: string, categoria: string, precio: string, moneda: string, descripcion: string){
        this.nombre= nombre;
        this.codigoReferencia= codigoReferencia;
        this.categoria= categoria;
        this.precio= precio;
        this.moneda= moneda;
        this.descripcion= descripcion;
    }
}