import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  page = {
    title: 'Interfaces web avancees',
    subtitle: 'Projet un web site!',
    content: 'Julien Lagadec David Salama',
    image: 'assets/Images/acueil.jpg'
  }
  ngOnInit() {

  }

}
