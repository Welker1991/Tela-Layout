import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { TotemsAppComponent } from './components/totem/totem/totems-app.component';
import { CelularComponent } from './components/celular/celular/celular.component';
import { TabletComponent } from './components/tablet/tablet/tablet.component';
import { DesktopComponent } from './components/desktop/desktop/desktop.component';
import { LaptopComponent } from './components/laptop/laptop/laptop.component';
import { CreateTotemComponent } from './components/totem/create-totem/create-totem.component';
import { CreateDesktopComponent } from './components/desktop/create-desktop/create-desktop.component';
import { CreateLaptopComponent } from './components/laptop/create-laptop/create-laptop.component';
import { CreateCelularComponent } from './components/celular/create-celular/create-celular.component';
import { UpdateCelularComponent } from './components/celular/update-celular/update-celular.component';
import { UpdateDesktopComponent } from './components/desktop/update-desktop/update-desktop.component';
import { UpdateLaptopComponent } from './components/laptop/update-laptop/update-laptop.component';
import { CreateTabletComponent } from './components/tablet/create-tablet/create-tablet.component';
import { UpdateTabletComponent } from './components/tablet/update-tablet/update-tablet.component';
import { TotemService } from './components/totem/totem/totems-app.component.services';
import { UpdateTotemComponent } from './components/totem/update-totem/update-totem.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'cadastrar-totem', component: CreateTotemComponent },
  { path: 'listar-totem', component: TotemsAppComponent },
  { path: 'cadastrar-desktop', component: CreateDesktopComponent },
  { path: 'listar-desktop', component: DesktopComponent },
  { path: 'cadastrar-laptop', component: CreateLaptopComponent },
  { path: 'listar-laptop', component: LaptopComponent },
  { path: 'cadastrar-celular', component: CreateCelularComponent },
  { path: 'listar-celular', component: CelularComponent },
  { path: 'cadastrar-tablet', component: CreateTabletComponent },
  { path: 'listar-tablet', component: TabletComponent },
  { path: 'atualizar-totem', component: UpdateTotemComponent },
  { path: 'atualizar-desktop', component: UpdateDesktopComponent },
  { path: 'atualizar-laptop', component: UpdateLaptopComponent },
  { path: 'atualizar-celular', component: UpdateCelularComponent },
  { path: 'atualizar-tablet', component: UpdateTabletComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TotemsAppComponent,
    CelularComponent,
    TabletComponent,
    DesktopComponent,
    LaptopComponent,
    CreateTotemComponent,
    CreateDesktopComponent,
    CreateLaptopComponent,
    CreateCelularComponent,
    CreateTabletComponent,
    UpdateTotemComponent,
    UpdateDesktopComponent,
    UpdateLaptopComponent,
    UpdateCelularComponent,
    UpdateTabletComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HttpClientModule, TotemService, UpdateTotemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
