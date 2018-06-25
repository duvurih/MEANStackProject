import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatExpansionModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyHighchartsComponent } from './my-highcharts/my-highcharts.component';
import { MyNgxchartsComponent } from './my-ngxcharts/my-ngxcharts.component';
import { MyD3chartsComponent } from './my-d3charts/my-d3charts.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'highcharts', component: MyHighchartsComponent },
  { path: 'ngxcharts', component: MyNgxchartsComponent },
  { path: 'd3charts', component: MyD3chartsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyHighchartsComponent,
    MyNgxchartsComponent,
    MyD3chartsComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    //MatSortModule,
    MatExpansionModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }