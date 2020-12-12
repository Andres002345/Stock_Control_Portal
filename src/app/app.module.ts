import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductoComponent } from './producto/producto.component';
import { ShowproductoComponent } from './producto/showproducto/showproducto.component';
import {ProductoService} from '../app/services/producto.service'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ShowproductoComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
