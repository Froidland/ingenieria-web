import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuEjercicioComponent } from './menu-ejercicio/menu-ejercicio.component';
import { MenuAlimentosComponent } from './menu-alimentos/menu-alimentos.component';
import { ColoresDirective } from './colores.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuPrincipalComponent,
    MenuEjercicioComponent,
    MenuAlimentosComponent,
    ColoresDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
