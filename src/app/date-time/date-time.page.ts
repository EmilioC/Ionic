import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

    fechaNaci: Date = new Date();
customYearValues = [3012, 3013, 3014];

    customPickerOptions = {
      buttons: [
        { 
          text: "Hello ",
          handler: ( event) =>{
            console.log(event);
          }
        },
          { 
            text: "People ",
            handler: ( event) =>{
              console.log(event.day.value);
            }
        }
      ]
    }

  constructor() { }

  ngOnInit() {
  }
  cambioFecha(nuevaFecha){
    console.log(new Date (nuevaFecha.detail.value));
    console.log("--FECHA CAMBIADA--");
  }

}
