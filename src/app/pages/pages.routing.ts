import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


const rutas: Routes = [
    {
        /*En este path se encuentran todas las rutas que se mostraran una vez
        se haya autenticado en el sistema*/
        path: 'dashboard', 
        component: PagesComponent,
        // Rutas hijas de este path
        children: [
          {path: '', component: DashboardComponent},
          {path: 'progress', component: ProgressComponent},
          {path: 'grafica1', component: Grafica1Component},
        
        ]
    },
    /*Otras fromas de declarar rutas*/
    // {path: 'path/:routerParam', component: MyComponent},
    // {path: 'staticPath', component: ...},
    // {path: '**', component: ...},
    // {path: 'oldPath', redirectTo: '/staticPath'},
    // {path: ... , component: ..., data: {message: 'mensaje'}},
]

@NgModule({
    imports: [
        RouterModule.forChild(rutas)
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRoutingModule{

}