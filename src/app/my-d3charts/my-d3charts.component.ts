import { Component, OnInit, AfterContentInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-my-d3charts',
  templateUrl: './my-d3charts.component.html',
  styleUrls: ['./my-d3charts.component.css']
})
export class MyD3chartsComponent implements AfterContentInit {
  radius = 10;
  constructor() { }

  ngAfterContentInit() {
    d3.select('p').style('color', 'red');
  }
  colorMe() {
    d3.select('button').style('color', 'red');
  }

  clicked(event: any) {
    d3.select(event.target).append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', () => {
        return this.radius;
      })
      .attr('fill', 'red');
  }}
