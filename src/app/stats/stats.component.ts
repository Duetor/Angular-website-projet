import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

// Pie
  public pieChartLabels:string[] = ['Sud', 'Nord'];
  public pieChartData:number[] = [this.dataService.Nbrdepoint(), 10-this.dataService.Nbrdepoint()];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
