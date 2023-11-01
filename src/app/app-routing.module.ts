
//Modulos
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component'
import { AuthRoutingModule } from './auth/auth.routing';


// Constante donde se definen las rutas de la aplicacion 
const rutas: Routes = [

  //path: '/dashboard' en PagesRoutingModule
  //path: '/auth' en AuthRoutingModule

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( rutas ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
