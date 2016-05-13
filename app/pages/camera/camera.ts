import {Page, NavController, NavParams} from 'ionic-angular';
import {SMS,DatePicker,LocalNotifications,Toast,Contacts} from 'ionic-native';

@Page({
    templateUrl: 'build/pages/camera/camera.html'
})
export class CameraPage {
    constructor(public nav:NavController, public params:NavParams) {
    }

    getContacts() {
        Contacts.find(["*"]).then((contact) => {
            console.log(contact)
        }, (err) => {
            console.log(err)
        })
    }


    getPic() {
        setTimeout(()=> {
            LocalNotifications.schedule({
                id: 1,
                text: "Single Notification",
                data: {secret: "Hello"}
            });
        }, 6000)
    }

    getDate() {
        DatePicker.show({
            date: new Date(),
            mode: 'date'
        }).then(
                date => console.log("Got date: ", date),
                err => console.log("Error occurred while getting date:", err)
        );
    }

    myBadge() {
        SMS.send('00923413542800', 'Hello world!');
    }

    myToast() {
        Toast.show("I'm a toast", 5000, "center").subscribe(
                toast => {
                console.log(toast);
            }
        );
    }
}