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

  alertPrompt(){
    this.presentAlertPrompt();
  }

  alertCheckBox(){
    this.presentAlertCheckbox();
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
        buttons:[
          {
          text:'Ok',
          handler:() =>{
            console.log('--CLICK -> OK --')
          }
        },
          {
            text:'No - Ok',
            //Añadimos opción cancelar ya que backdropDimiss: false
            role:'cancel',
            handler:() =>{
              console.log('--CLICK -> No OK --')
            }
        }]
      });
      await alert.present();
    }

//Present Alert Promp

async presentAlertPrompt() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Placeholder 1'
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3'
      },
      {
        name: 'name3',
        value: 'http://ionicframework.com',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      },
      {
        name: 'name8',
        type: 'password',
        placeholder: 'Advanced Attributes',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 4,
          inputmode: 'decimal'
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        //Recoger datos formulario
        handler: (data:any) => {
          console.log(data);
        }
      }
    ]
  });

  await alert.present();
}

//Alert Check Box

async presentAlertCheckbox() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Checkbox',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        handler: () => {
          console.log('Checkbox 1 selected');
        },
        checked: true
      },

      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2',
        handler: () => {
          console.log('Checkbox 2 selected');
        }
      },

      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'value3',
        handler: () => {
          console.log('Checkbox 3 selected');
        }
      },

      {
        name: 'checkbox4',
        type: 'checkbox',
        label: 'Checkbox 4',
        value: 'value4',
        handler: () => {
          console.log('Checkbox 4 selected');
        }
      },

      {
        name: 'checkbox5',
        type: 'checkbox',
        label: 'Checkbox 5',
        value: 'value5',
        handler: () => {
          console.log('Checkbox 5 selected');
        }
      },

      {
        name: 'checkbox6',
        type: 'checkbox',
        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
        value: 'value6',
        handler: () => {
          console.log('Checkbox 6 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (data:any) => {
          console.log('--Buttons ALERT CHECK BOX--');
          console.log(data);
        }
      }, {
        text: 'Ok',
        handler: (data:any) => {
          console.log('--TEXT ALERT CHECK BOX--');
          console.log(data);
        }
      }
    ]
  });

  await alert.present();
}

}
