import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos : Producto[] = [];
  productosFiltrado : Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
    
   }

   private cargarProductos()
   {

    return new Promise(  ( resolve, reject ) => {

      this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
          .subscribe( (resp: any) => {
            this.productos = resp;
            this.cargando = false;
            resolve(null);
          });

    });
    
   }

   public getProducto(id:string)
   {
    
     return this.http.get(`https://angular-portafolio-23938-default-rtdb.firebaseio.com/productos/${id}.json`);
   }

   buscarProducto(termino:string){
     if (this.productos.length===0)
     {
      console.log('if');
       this.cargarProductos().then( ()=>{
        this.filtrarProductos(termino);
       } );
       
     }
     else
     {
       console.log('else');
      this.filtrarProductos(termino);
     }     
   }

   private filtrarProductos(termino:string)
   {
     termino = termino.toLowerCase();
     this.productosFiltrado = [];
     this.productos.forEach(prod=>{
       if (prod.categoria.toLowerCase().indexOf( termino ) >= 0 || prod.categoria.toLowerCase().indexOf(termino)>=0) {
         this.productosFiltrado.push(prod);
       }


     } );
   }
}
