//Modulos
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const rutas: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    
]

@NgModule({
    imports: [
        RouterModule.forChild(rutas)
    ],
    exports: [
        RouterModule
    ]
})

export class AuthRoutingModule{

}