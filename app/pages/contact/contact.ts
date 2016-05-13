import {Page, NavController, NavParams} from 'ionic-angular';
import {Contacts} from 'ionic-native';
import {SmsPage} from '../sms/sms';

@Page({
    templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
    contacts:any;

    constructor(public nav:NavController, public params:NavParams) {
        this.getContacts();
    }

    goToSms(contact) {
        this.nav.push(SmsPage,contact)
    }

    getContacts() {
        Contacts.find(["*"]).then((contact) => {
            this.contacts = contact;
            console.log(contact)
        }, (err) => {
            console.log(err)
        })
    }
}