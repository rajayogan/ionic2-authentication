import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AuthService} from './authservice';
import {Userpage} from '../userpage/userpage';
import {Signup} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

usercreds = {
            name: '',
            password: ''
        };

  constructor(public navCtrl: NavController, public authservice: AuthService) {
    
        
        
  }

login(user) {
        this.authservice.authenticate(user).then(data => {
            if(data) {
                this.navCtrl.setRoot(Userpage);
            }
    });
}
    signup() {
        this.navCtrl.push(Signup);
    }

}
