import { Component, OnInit } from '@angular/core';

//3rd party
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-my-highcharts',
  templateUrl: './my-highcharts.component.html',
  styleUrls: ['./my-highcharts.component.css']
})
export class MyHighchartsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  secondChart = new Chart({
    title: { text: 'Sales Trend Comparison & Forecasting' },
    subtitle: { text: '2017 Sales Trend and Forecast' },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [
        {
          name: "2015",
          color: 'brown',
          data: [65.5, 33.5, 23.9, 120.8, 105.3, 130.9, 80.3, 89.9, 83.1, 79.1, 116.4, 139.2],
        },      
        {
            name: "2016",
            //animation: true,
            color: 'green',
            data: [23.9, 65.5, 33.5, 83.1, 79.1, 80.3, 89.9, 116.4, 120.8, 105.3, 130.9, 139.2],
        },
        {
            name: "2017",
            //animation: true,
            color: 'blue',
            data: [29.9, 75.5, 30.5, 75.1, 70.1, 90.3, 99.9, 106.4, 110.8, 115.3, 120.9, 129.2],
        }
    ]
    }
  );

  thirdChart = new Chart(
    {
      title: { text: 'Stock Trend' },
      chart: {
          type: 'column',
          margin: 75,
          options3d: {
              enabled: true,
              alpha: 15,
              beta: 15,
              depth: 50
          }
      },
      plotOptions: {
          column: {
              depth: 25
          }
      },
      series: [{
          //animation: true,
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    }
  );    

  constructor() { }

  ngOnInit() {
  }

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }  

}
