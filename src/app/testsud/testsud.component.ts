import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-testsud',
  templateUrl: './testsud.component.html',
  styleUrls: ['./testsud.component.css']
})
export class TestsudComponent implements OnInit {

  constructor(private router: Router,private dataService:DataService) { }

  ngOnInit() {
  }
  fnChangeBorder(imageId: any,imageId2: any) : void {
    document.getElementById(imageId2).style.borderColor = "red";
    document.getElementById(imageId).style.borderColor = "green";
  }
  send(imageId: any,imageId2: any,imageId3: any,imageId4: any,imageId5: any,imageId6: any,imageId7: any,imageId8: any,imageId9: any,imageId10: any) : void {
    var count :number;
    count = 0;
    if(document.getElementById(imageId).style.borderColor == "green"){
      count = count + 1;
    }
    if(document.getElementById(imageId2).style.borderColor == "green"){
      count = count + 1;
    }
    if(document.getElementById(imageId3).style.borderColor == "green"){
      count = count + 1;
    }
    if(document.getElementById(imageId4).style.borderColor == "green"){
      count = count + 1;
    }
    if(document.getElementById(imageId5).style.borderColor == "green"){
      count = count + 1;
    }if(document.getElementById(imageId6).style.borderColor == "green"){
      count = count + 1;
    }if(document.getElementById(imageId7).style.borderColor == "green"){
      count = count + 1;
    }if(document.getElementById(imageId8).style.borderColor == "green"){
      count = count + 1;
    }
    if(document.getElementById(imageId9).style.borderColor == "green"){
      count = count + 1;
    }
    if(document.getElementById(imageId10).style.borderColor == "green"){
      count = count + 1;
    }
    this.dataService.GetNbrdepoint(count);
    if(this.dataService.isAuthValue()==true){
      this.router.navigate(['stats']);
    }
    else {
      this.router.navigate(['login']);
      alert('Send ! Now log yourself to see the resultat');
    }
  }
}
