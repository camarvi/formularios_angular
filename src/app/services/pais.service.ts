import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

URI : 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private http : HttpClient) {


   }

   getPaises() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(
        map( (resp: any[])=>{
          // Utilizo el metodo map de los arrays
          return resp.map( pais => {
            return {
              nombre : pais.name,
              codigo : pais.alpha3Code
            }
          })
        })
        );
    
  // El codigo anterior se puede simplificar de la siguiente forma

  //   .pipe(
  //      map( (resp : any[] )) =>
  //        resp.map(pais => ({ nombre: pais.nombre , codigo: pais.alpha3Code })
  //        ) 
  //       )
  //      );  
  //

   }
}
