import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos : Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();


   }

   private cargarProductos()
   {
    this.http.get('https://angular-portafolio-23938-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp:any) =>{
//          console.log("productos");
  //        console.log(resp); 
  
            this.productos = resp;
            // setTimeout(() => {
            //   this.cargando = false;  
            // }, 2000);
            this.cargando = false;  
        });
   }
}
