import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'


import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ProductoComponent } from './producto/producto.component';
import { ShowproductoComponent } from './producto/showproducto/showproducto.component';
import {ProductoService} from 'src/app/services/producto.service'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ShowproductoComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
