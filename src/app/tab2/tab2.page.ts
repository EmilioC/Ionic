import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private actionSheetCtrl: ActionSheetController,
               private alertController: AlertController) {}

  onClick(){

    console.log('--TAB 2--')
    this.presentActionSheet();
  }

  alert(){
    this.presentAlert();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      //Obligamos a elegir opción 
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
}

    //Alert Button
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert',
        //Obligamos a elegir opción 
        backdropDismiss: false,
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        //Originalmente los botones no tienen opciones
        // buttons: ['OK','Fantastic', 'Impressive']
        //Pasamos objetos para dar funcionalidad al botón
        buttons:[{
          text:'Ok',
          handler:() =>{
            console.log('--CLICK -> OK --')
          }
        }
          ,
          {
            text:'No - Ok',
            handler:() =>{
              console.log('--CLICK -> No OK --')
            }
        }]
      });
      await alert.present();
    }
}
