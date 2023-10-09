import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addeditproducto',
  templateUrl: './addeditproducto.component.html',
  styleUrls: ['./addeditproducto.component.css']
})

export class  AddeditproductoComponent implements OnInit {
  formProducto: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string= "Agregar ";

  constructor (private fb: FormBuilder,
    private _productoService: ProductoService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.formProducto = this.fb.group({
      // Se pueden hacer validaciones
      nombre: ['', Validators.required],
      imagen: [null, Validators.required],      
      precio: [null, Validators.required],
  })
  //Recoge id cuando editamos o agregamos null
  this.id= Number(aRouter.snapshot.paramMap.get('id'));
  console.log(this.id);
}

  ngOnInit(): void {
    if (this.id != 0){
      this.operacion = 'Editar ';
      this.getProducto(this.id);
    }
  }

  getProducto(id: number)  {
    this.loading = true;
    this._productoService.getProducto(id).subscribe((data:Producto)=> {
      console.log(data);
      this.loading=false;
      this.formProducto.patchValue({
        nombre: data.nombre, 
        imagen: data.imagen,
        precio: data.precio  
      })
    })
  }

  addProducto(): void {
  //console.log('addProducto')
  const producto : Producto = {
    nombre: this.formProducto.value.nombre,
    imagen: this.formProducto.value.imagen,
    precio: this.formProducto.value.precio
  }
  this.loading=true;
  if (this.id!=0){
    // Editar - update product
    producto.id = this.id;
    this._productoService.putProducto(this.id, producto).subscribe(()=> {
      console.log('Producto Actualizado con exito');
      this.loading=false;
      this.router.navigate(['/pedidos']);

    })
  }else {
    // Es Agregar
    this._productoService.saveProducto(producto).subscribe(() => {
      console.log('Producto Agregado');
      this.loading=false;
      this.router.navigate(['/pedidos']);
    })
  }

  }
}
