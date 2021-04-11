import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina = {};
  cargada =false;
  equipo : Equipo[] = [];

  constructor(private http:HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp:InfoPagina) =>{
      this.cargada = true;
      this.info = resp;
    });
   }

   private cargarEquipo()
   {
    this.http.get('https://angular-portafolio-23938-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) =>{
      this.equipo = resp;
      //console.log( resp );
    });
   }


}
