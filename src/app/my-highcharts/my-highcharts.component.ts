import { Component, OnInit } from '@angular/core';

//3rd party
import { Chart } from 'angular-highcharts';

import { DataContextService } from './../common/data-context.service';

@Component({
  selector: 'app-my-highcharts',
  templateUrl: './my-highcharts.component.html',
  styleUrls: ['./my-highcharts.component.css']
})
export class MyHighchartsComponent implements OnInit {
  financialData: any[]=[];
  lineChart: any;
  financialTrendChart: any;
  stockTrendChart:any;

  constructor(private dataContextService: DataContextService){}

  ngOnInit() {
    this.dataContextService.httpGetFinancialData().subscribe(data =>{
        console.log('financial data');
        console.log(data);
        this.financialData=data;
        this.showFinancialTrendChart();
    });

    this.showLineChart();
    this.showStockTrendChart();
  } 

  // add point to chart serie
  add() {
    this.lineChart.addPoint(Math.floor(Math.random() * 10));
  }  

  showFinancialTrendChart(){
    this.financialTrendChart = new Chart({
      title: { text: 'Sales Trend Comparison & Forecasting' },
      subtitle: { text: '2017 Sales Trend and Forecast' },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: this.financialData
      }
    );    
  }

  showLineChart(){
    this.lineChart = new Chart({
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
  }

  showStockTrendChart(){
    this.stockTrendChart = new Chart(
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
  }

}
