import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Userpage} from '../pages/userpage/userpage';
import {Signup} from '../pages/signup/signup';
import {AuthService} from '../pages/home/authservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Userpage,
    Signup
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Userpage,
    Signup
  ],
  providers: [AuthService]
})
export class AppModule {}
