import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuAlimentosComponent } from './menu-alimentos/menu-alimentos.component';
import { MenuEjercicioComponent } from './menu-ejercicio/menu-ejercicio.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'menu-principal', component: MenuPrincipalComponent },
  {path: 'menu-alimentos', component: MenuAlimentosComponent},
  {path: 'menu-ejercicios', component: MenuEjercicioComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
