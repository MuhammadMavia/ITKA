import {Page,NavController,Alert,Loading,ActionSheet,Modal,Toast,ViewController} from 'ionic-angular';
//import {Modal, NavController} from 'ionic/ionic'
import {Page01}from '../page01/page01'
import {CameraPage}from '../camera/camera'

@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor(public nav:NavController) {

    }

    doAlert() {
        let alert = Alert.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        this.nav.present(alert);
    }

    doPrompt() {
        let prompt = Alert.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'Email',
                    placeholder: 'Email'
                },
                {
                    name: 'Password',
                    placeholder: 'Password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log(data);
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log(data);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        this.nav.present(prompt);
    }

    doConfirm() {
        let confirm = Alert.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        this.nav.present(confirm);
    }

    presentLoading() {
        let loading = Loading.create({
            content: "Please wait...",
            duration: 3000
        });
        this.nav.present(loading);
    }

    presentToast() {
        let toast = Toast.create({
            message: 'User was added successfully',
            duration: 13000000
        });
        //setTimeout(function(){toast.dismiss()},1000);
        toast.onDismiss(() => {
            console.log('Dismissed toast');
        });

        this.nav.present(toast);
    }

    goToPage01() {
        this.nav.push(Page01, {name: "Hello World"})
    }

    goToCamera() {
        this.nav.push(CameraPage)
    }

    showModal() {
        let modal = Modal.create(MyModal);
        this.nav.present(modal)
    }

    presentActionSheet() {
        let actionSheet = ActionSheet.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: 'share',
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: 'arrow-dropright-circle',
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: 'heart-outline',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: 'close',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    }
}


/* Modal */

@Page({
    template: `
  <ion-content padding>
    <h2>I'm a modal!</h2>
    <button (click)="close()">Close</button>
  </ion-content>`
})
class MyModal {
    viewCtrl:any;

    constructor(viewCtrl:ViewController) {
        console.log(viewCtrl);
        this.viewCtrl = viewCtrl;
    }

    close() {
        this.viewCtrl.dismiss();
    }
}