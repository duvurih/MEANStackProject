import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDatepickerInputEvent, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatExpansionModule } from '@angular/material';

//3rd party
import { Chart } from 'angular-highcharts';

import { DataContextService } from './../common/data-context.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent  implements OnInit {
  cards = [
    { id:1, title: 'HighCharts', cols: 1, rows: 1 },
    { id:2, title: 'd3js-Charts', cols: 1, rows: 2 },
    { id:3, title: 'ngx-Charts', cols: 1, rows: 1 }
  ];

  posts: PostElement[] =[];
  displayedColumns = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<PostElement>(this.posts);;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  highChartSample = new Chart({
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Jane',
        data: [3, 2, 1, 3, 4]
    }, {
        type: 'column',
        name: 'John',
        data: [2, 3, 5, 7, 6]
    }, {
        type: 'column',
        name: 'Joe',
        data: [4, 3, 3, 9, 0]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13
        }, {
            name: 'John',
            y: 23
        }, {
            name: 'Joe',
            y: 19
        }],
        size: 100
    }]
  });  

  constructor(private dataContextService: DataContextService){}

  ngOnInit() {
    this.dataContextService.httpGet().subscribe(data =>{
      this.posts = data;
      this.dataSource = new MatTableDataSource<PostElement>(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;      
    });
  }  

}

export interface PostElement {
  id: number;
  title: number;
  body: string;
}
