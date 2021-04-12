import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDesc } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto : ProductoDesc ={};
  produtoID:string ="";
  constructor(private route:ActivatedRoute,
              public productoService:ProductosService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(parametros =>{
      //console.log(parametros['id']);
      this.productoService.getProducto(parametros['id']).subscribe(
        (producto:ProductoDesc)=>{
          this.produtoID = parametros['id'];
          //console.log(this.produtoID)
          this.producto = producto;
          //console.log(producto)
        }
      );

    });
  }

}
