import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


// Constante donde se definen las rutas de la aplicacion 
const rutas: Routes = [

  {
    /*En este path se encuentran todas las rutas que se mostraran una vez
    se haya autenticado en el sistema*/
    path: '', 
    component: PagesComponent,
    // Rutas hijas de este path
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafica1', component: Grafica1Component},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  
  
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  
  {path: '**', component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( rutas )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
