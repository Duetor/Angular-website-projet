import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
})
export class MyNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  ngOnInit() {
    this.router.navigate(['home']);
    document.getElementById('log').style.display = "none";
  }
  constructor(private breakpointObserver: BreakpointObserver,private router: Router,private dataService:DataService) {}
  iSlogin(): void {
    if(this.dataService.isAuthValue()==true){
      this.router.navigate(['stats']);
    }
    else {
      this.router.navigate(['login']);
      alert('You need to be log first username : admin password : admin');
    }
  }
  iSloginT():void{
    if(this.dataService.isAuthValue()==false){
      this.router.navigate(['login']);
    }
    else {
      return alert('You already are login');
    }
  }
  logout(): void {
    this.dataService.isAuthVal(false);
    this.visible('log');
    this.router.navigate(['login']);
  }
  visible(lienId: any): void {
    if (this.dataService.isAuthValue() == true) {
      document.getElementById(lienId).style.display = "block";
    }
    else {
      document.getElementById(lienId).style.display = "none";
    }
  }
}
