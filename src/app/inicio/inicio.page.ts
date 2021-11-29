import { Component, OnInit } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

componentes: Observable<Componente[]>;

  constructor( private dataService: DataService,
               private menu: MenuController    
    ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  mostrarMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
