import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma : FormGroup;

  constructor(private fb : FormBuilder) { 

    this.crearFormulario();

  }

  ngOnInit() {
  }

  crearFormulario(){

    this.forma = this.fb.group({
      nombre : ['Kamarvi'],
      apellidos : ['Gamer'],
      correo : ['kamarvi_gamer@gmail.com'],
    });

  }


  guardar(){
    
    console.log(this.forma);

  }

}
