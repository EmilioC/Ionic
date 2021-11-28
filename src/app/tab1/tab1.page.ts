import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Componente } from '../interfaces/interfaces';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService) {
  }

  ngOnInit(){
    this.componentes = this.dataService.getMenuOpts();
  }
}
