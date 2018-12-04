import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import {MyNavComponent} from '../my-nav/my-nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private dataService:DataService,private mynavcomponent:MyNavComponent) { }
  username: string;
  password: string;

  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
        this.dataService.isAuthVal(true);
        this.mynavcomponent.visible('log');
        this.router.navigate(['stats']);
    }
    else {
      alert("username : admin / password : admin");
    }
  }
}

