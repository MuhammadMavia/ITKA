import {Page, NavController, NavParams} from 'ionic-angular';
import {SMS} from 'ionic-native';

@Page({
    templateUrl: 'build/pages/sms/sms.html'
})
export class SmsPage {
    counts:any;
    durations:any;
    sentMsgs:any;
    smsData:any;
    selectedContact:any;

    constructor(public nav:NavController, public params:NavParams) {
        //SMS.send('00923413542800', 'Hello world!');
        this.selectedContact = params.data;
        this.smsData = {};
        this.sentMsgs = 0;
        this.counts = [];
        this.durations = [];
        for (var i = 5; i <= 180; i += 5) {
            this.counts.push(i);
        }
        for (var i = 1; i < 60; i++) {
            this.durations.push(i);
        }
        console.log(params);
        console.log(this.selectedContact)
    }

    sendMsgs(sms) {
        console.log(sms);
        if (this.sentMsgs++ < (sms.count || 1)) {
            var num = this.selectedContact.phoneNumbers[0].value;
            num = num.replace(" ", '');
            num = num.replace(" ", '');
            console.log(num);
            console.log(this.selectedContact.phoneNumbers);
            SMS.send(num, sms.msg || 'Hello world!').then(
                (a)=>console.log(a, 1),
                (a)=>console.log(a, 5)
            );
            setTimeout(()=>this.sendMsgs(sms), parseInt(sms.duration) * 1000);
            console.log(`Sent ${ this.sentMsgs - 1}`);
        }
        else {
            this.sentMsgs = 0;
            console.log('Sent All');
        }
    }

    //SMS.send('00923413542800', 'Hello world!');
}