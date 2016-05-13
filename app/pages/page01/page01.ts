import {Page, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home'

@Page({
    templateUrl: 'build/pages/Page01/Page01.html'
})
export class Page01 {
    constructor(public nav:NavController, public params:NavParams) {
    }

    goToHomePage() {
        this.nav.push(HomePage)
    }
}