import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }


  get apellidoNoValido(){
    return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }


  crearFormulario(){

    this.forma = this.fb.group({
      nombre : ['', [Validators.required, Validators.minLength(5) ]],
      apellidos : ['', [Validators.required, Validators.minLength(5) ]],
      correo : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion : this.fb.group({
        distrito : ['', Validators.required],
        ciudad : ['', Validators.required],
      })
    });

  }


  guardar(){
    
    console.log(this.forma);

    if (this.forma.invalid) {
      // recorrer los elementos del formulario para que se dispare las validaciones
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched(); //Lo pongo como pulsado
      });

    }

  }

}
