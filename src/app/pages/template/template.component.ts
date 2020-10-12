import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre :'Kamarvi',
    apellido : 'ManquitoGamer',
    correo : 'manquitogamer@gmail.com'
  }

  constructor() { }

  ngOnInit() {
  }

  guardar( forma : NgForm){

    console.log(forma);
    console.log(forma.value);
  }



}
