import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from 'src/app/models/producto-model';
import {Observable} from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  readonly APIUrl = "https://api.mercadolibre.com/sites/MLA/search?nickname=GARIOTTI";
  readonly APIUrl2 = "https://api.mercadolibre.com/sites/MLA/search?nickname=OUTLETIT383";

  getProductoList(Producto): Observable<any[]>{
    let response1 = this.http.get<Producto[]>(this.APIUrl);
    let response2 = this.http.get<Producto[]>(this.APIUrl2);
    return forkJoin([response1, response2]);
  }
  /*
  getProductoList2(Producto): Observable<Producto[]>{
    
    return this.http.get<Producto[]>(this.APIUrl2)
  }
  */
}
