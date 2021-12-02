import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imput',
  templateUrl: './imput.page.html',
  styleUrls: ['./imput.page.scss'],
})
export class ImputPage implements OnInit {


  nombre: string = 'Fernando';
  usuario = { 
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit( formulario: NgForm ) {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
