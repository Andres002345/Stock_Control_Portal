import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Producto } from 'src/app/models/producto-model';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductoService } from 'src/app/services/producto.service';
import { MatSpinner } from '@angular/material/progress-spinner';

import { forkJoin } from 'rxjs';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-showproducto',
  templateUrl: './showproducto.component.html',
  styleUrls: ['./showproducto.component.css'],
  providers: [ProductoService]
})

export class ShowproductoComponent implements OnInit {

  public responseData1: any;
  public responseData2: any;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  /*
  allProductos: Array<any> = [];
  
  productosTotal;
  productosPerPage;
  upToProductos;
  upToProductosBegining;

  allProductos2: Array<any> = [];
  productosTotal2;
  productosPerPage2;
  upToProductos2;
  upToProductosBegining2;
  */
 

  loading = true;
  producto: Producto[] = [
    { thumbnail: "", title: "", permalink: "http://mla-s1-p.mlstatic.com/916319-MLA28064987887_082018-I.jpg" },
  ];
  producto2: Producto[] = [
    { thumbnail: "", title: "", permalink: "http://mla-s1-p.mlstatic.com/916319-MLA28064987887_082018-I.jpg" },
  ];

  

  displayedColumns = ['title', 'price', 'thumbnail'];
 // @ViewChild('paginator', { static: true }) paginator: MatPaginator;


  listData = new MatTableDataSource<Producto>(this.producto);
  listData2 = new MatTableDataSource<Producto>(this.producto2);
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource([]);
  
  paginator: MatPaginator; 
  @ViewChild(MatPaginator, { static: true })
  set appBacon(paginator: MatPaginator) {
    this.paginator = paginator;
    //this.listData.paginator = this.paginator;
  }

  paginator2: MatPaginator; 
  @ViewChild(MatPaginator, { static: true })
  set appBacon2(paginator: MatPaginator) {
    this.paginator2 = paginator;
    //this.listData.paginator = this.paginator;
  }
  constructor(@Inject(ProductoService) private service: ProductoService) { }


  displayedRows: string[] = ['Title', 'Price', 'permalink']

  ngOnInit() {

    setTimeout(() => {

      this.loading = false;


    }, 2000);

    this.refreshProductoList();
  //  this.refreshProductoList2();
   
    //this.listData.data = new MatTableDataSource(this.producto);
   
    
  }
  ngAfterViewInit() {
   // this.listData.paginator =  this.paginator;
  
   
   
    
  }


  


  refreshProductoList() {
    this.service.getProductoList(Producto).subscribe(resultados => {

      type MyArrayType = any;
      var array4: MyArrayType;
      array4 = resultados[0];

      var array4_2: MyArrayType;
      array4_2 = resultados[1];


      var array3: Producto;
      array3 =
        { thumbnail: "", title: "array3", permalink: "array3" };
      var array5: Producto[];
      array5 = [
        { thumbnail: "", title: "", permalink: "" }];

        var array3_2: Producto;
        array3_2 =
          { thumbnail: "", title: "array3_2", permalink: "array3_2" };
        var array5_2: Producto[];
        array5_2 = [
          { thumbnail: "", title: "", permalink: "" }];  





        
      array4.results.forEach(element => {
        var array3: Producto = { thumbnail: "", title: "array3", permalink: "array3" };
        array3.thumbnail = element.thumbnail;
        array3.title = element.title;
        array3.permalink = element.permalink;
        array5.push(array3);
        this.listData.filteredData.push(array3);
        return;
      });

      array5.shift();
      this.listData.filteredData.shift();


      array4_2.results.forEach(element => {
        var array3_2: Producto = { thumbnail: "", title: "array3_2", permalink: "array3_2" };
        array3_2.thumbnail = element.thumbnail;
        array3_2.title = element.title;
        array3_2.permalink = element.permalink;
        array5_2.push(array3_2);
        this.listData.filteredData.push(array3_2);
        return;
      });


      array5_2.shift();


     // this.listData.paginator = this.paginator;
     // array5.shift();
     // this.listData.filteredData.shift();
      this.producto = array5.concat(array5_2);
      this.listData.paginator = this.paginator;
     
      //console.log(this.listData.paginator)
    });
  }

  /*
  refreshProductoList2() {
    this.service.getProductoList2(Producto).subscribe(resultados => {

      
      type MyArrayType = any;
      var array4: MyArrayType;
      array4 = resultados;
      
      var array3: Producto;
      array3 =
        { thumbnail: "", title: "array3", permalink: "array3" };
      var array5: Producto[];
      array5 = [
        { thumbnail: "", title: "", permalink: "" }];
      array4.results.forEach(element => {
        var array3: Producto = { thumbnail: "", title: "array3", permalink: "array3" };
        array3.thumbnail = element.thumbnail;
        array3.title = element.title;
        array3.permalink = element.permalink;
        array5.push(array3);
        this.listData2.filteredData.push(array3);
        return;
      });
      //this.listData2.paginator = this.paginator;
      array5.shift();
      this.listData2.filteredData.shift();
      this.producto2 = array5;
      this.listData2.paginator = this.paginator2;
     
    });
  }*/


 

}
