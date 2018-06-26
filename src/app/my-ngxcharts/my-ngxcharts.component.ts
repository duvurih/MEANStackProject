import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ngxcharts',
  templateUrl: './my-ngxcharts.component.html',
  styleUrls: ['./my-ngxcharts.component.css']
})
export class MyNgxchartsComponent implements OnInit {

  view: any[]=[700,400];
  showLegend=true;
  colorScheme={
    domain: ['#5AA454','#A10A28','#C7B42C','#AAAAAA']
  };
  showLabels=true;
  explodeSlices=false;
  doughnut=false;

  data: any =[
    {"name":"Germany", "value":8940000},
    {"name":"USA", "value":5000000},
    {"name":"France", "value":7240000}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(value){
    console.log(value);
  }

}
