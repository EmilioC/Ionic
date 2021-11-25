import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  // // Cerrar item slinding una vez seleccionado
  // con el this.ionList.closeSlidengItems();
  @ViewChild( IonList) ionList: IonList;
  
  constructor( private DataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.DataService.getUsuarios();
  }
  favorite ( user: any ){
    console.log( user);
    this.ionList.closeSlidingItems();
  }

  share( user: any){
    console.log( user.name );
    console.log( user.email );
    this.ionList.closeSlidingItems();
  }

  unread( user: any ){
    console.log( user );
    this.ionList.closeSlidingItems();
  }

}
