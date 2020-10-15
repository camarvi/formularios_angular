import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre :'kamarvi',
    apellido : 'Gamer78',
    correo : 'manquitogamer@gmail.com'
  }

  constructor(private paisService : PaisService) { 
     
    

  }

  ngOnInit() : void {

    this.paisService.getPaises().subscribe(paises => {
      
        console.log(paises);
    });

  }

  guardar( forma : NgForm){

    //console.log(forma);

    if (forma.invalid) {
      // recorrer los elementos del formulario para que se dispare las validaciones
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched(); //Lo pongo como pulsado
      });

      return;
    }

    console.log(forma.value);
  }



}
