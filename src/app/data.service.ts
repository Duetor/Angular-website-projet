import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isAuth: boolean;
  NbrdepointSud :number;
  constructor() {
    this.isAuth = false;
  }
  isAuthValue() {
    return this.isAuth;
  }
  isAuthVal(verite: boolean) {
    this.isAuth = verite;
  }
  Nbrdepoint(){
    return this.NbrdepointSud;
  }
  GetNbrdepoint(point:number){
    this.NbrdepointSud = point;
  }
}
