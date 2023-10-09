import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuesComponent } from './menues/menues.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AddeditproductoComponent } from './components/addeditproducto/addeditproducto.component';
import { ListproductoComponent } from './components/listproducto/listproducto.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const routers : Routes=[
  {path:'', component: InicioComponent},
  {path:'', component: NavegacionComponent},
  {path:'', component: FooterComponent},
  {path:'', component: CabeceraComponent},
  {path:'nosotros', component: ContactoComponent},
  {path:'menu', component: MenuComponent},
  {path:'menues', component: MenuesComponent},
  {path:'pedidos', component: ListproductoComponent},
  {path:'add', component: AddeditproductoComponent},
  {path:'add/:id', component: AddeditproductoComponent},
  {path:'login', component: LoginComponent}, 
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    NavegacionComponent,
    FooterComponent,
    ContactoComponent,
    MenuesComponent,
    MenuComponent,
    LoginComponent,
    AddeditproductoComponent,
    ListproductoComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
