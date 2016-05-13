import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
//import {HomePage} from './pages/home/home';
import {ContactPage} from './pages/contact/contact';
import {SmsPage} from './pages/sms/sms';


@App({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    rootPage:any = ContactPage;
    //rootPage:any = SmsPage;
    //rootPage: any = Page01;
    constructor(platform:Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }
}
