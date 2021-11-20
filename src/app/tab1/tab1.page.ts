import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
  name1: string;
  name2: string;
  name3: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  componentes: Componente[] = [{
    icon: 'boat-outline',
    name: 'Carmen',
    redirecTo: '/tabs/tab3',
    name1:'Cosas maravillosas',
    name2:'Cosas maravillosas',
    name3:'Cosas maravillosas',
  },{
  icon: 'basketball-outline',
  name: 'Ramiro',
  redirecTo: '/tabs/tab3',
  name1:'Cosas maravillosas',
  name2:'Cosas maravillosas',
  name3:'Cosas maravillosas',
}];

  constructor() {}

  ngOnInit(){
    console.log("--OnINIT - TAB1PAGE");
  }
}
