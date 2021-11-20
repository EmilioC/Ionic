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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

}
