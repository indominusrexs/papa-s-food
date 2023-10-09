import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-listproducto',
  templateUrl: './listproducto.component.html',
  styleUrls: ['./listproducto.component.css']
})
export class ListproductoComponent implements OnInit {
  listaProductos: Producto[]=[];
  loading: boolean = false;
  constructor(private _productoService: ProductoService) {

  }

  ngOnInit() {
    this.getListProductos();
  }
  getListProductos() {
    this.loading = true;
    this._productoService.getListProductos().subscribe((data)=> {
      this.listaProductos = data;
    this.loading = false;
    })
  }
  deleteProducto(id:number){
    this.loading=true;
    this._productoService.deleteProducto(id).subscribe((data)=> {
      console.log(data);
      this.getListProductos();
      this.loading=false;
    })
  }

}
