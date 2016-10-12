import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthService} from '../home/authservice';
import {HomePage} from '../home/home';


/*
  Generated class for the Userpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html'
})
export class Userpage {

  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {}
  
  logout() {
        this.authservice.logout();
        this.navCtrl.setRoot(HomePage);
    }
    
    getinfo() {
        this.authservice.getinfo().then(data => {
        if(data.success) {
            var alert = this.alertCtrl.create({
                title: data.success,
                subTitle: data.msg,
                buttons: ['ok']
            });
            alert.present();
        }
            
    })
    }        


  ionViewDidLoad() {
    console.log('Hello Userpage Page');
  }

}
