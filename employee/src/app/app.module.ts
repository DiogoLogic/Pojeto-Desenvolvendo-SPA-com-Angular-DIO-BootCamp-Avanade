import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { CadfuncionariosComponent } from './crudcomponentes/cadfuncionarios/cadfuncionarios.component';
import { FuncionarioReadComponent } from './crudcomponentes/funcionario-read/funcionario-read.component';
import { FuncionarioRead2Component } from './crudcomponentes/funcionario-read2/funcionario-read2.component';
import { FuncionariosUpdateComponent } from './crudcomponentes/funcionarios-update/funcionarios-update.component';
import { FuncionariosDeleteComponent } from './crudcomponentes/funcionarios-delete/funcionarios-delete.component';



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,

    CadfuncionariosComponent,
    FuncionarioReadComponent,
    FuncionarioRead2Component,
    FuncionariosUpdateComponent,
    FuncionariosDeleteComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
