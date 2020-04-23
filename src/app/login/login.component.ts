import {Component, OnInit} from '@angular/core';
import {UserRegistationService} from '../user-registation.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any;
  username: string;
  password: string;

  constructor(private service: UserRegistationService) {
  }

  ngOnInit(): void {
  }

  public loginNow() {
    let resp = this.service.getLoginData(this.username, this.password);
    resp.subscribe((data) => this.users = data);
    console.log(this.users);
  }

}
