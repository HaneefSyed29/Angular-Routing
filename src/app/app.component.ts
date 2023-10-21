import { Component } from '@angular/core';
import { UserdataService } from './services/user/userdata.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  user:any = [];
  constructor(private userdata:UserdataService){
    console.warn(userdata.users());
    this.user = userdata.users();
  }
}
