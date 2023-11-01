import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [    
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ]
})
export class PagesModule { }
/*
  En caso de que no se desee importar de nuevo el módulo 'AppRoutingModule' en este modulo pages,
  se puede importar otro routing module de la siguiente forma 

  import { RouterModule } from '@angular/router';

  qNgModule({
    declarations: [

    ],
    imports: [
      RouterModule,
    ],
    exports: [

    ]
  })

*/