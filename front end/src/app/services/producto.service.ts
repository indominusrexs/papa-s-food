import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    //http://localhost:3000/
        
    this.myAppUrl = 'http://localhost:3000/'; 
    this.myApiUrl = 'api/pedidos/';
  }
  // Obiente de la interfaces creadas
  getListProductos() : Observable<Producto[]>{
    return this.http.get<Producto[]>(this.myAppUrl+this.myApiUrl);
  }
  // Borrar producto
  deleteProducto(id:number): Observable<void>{ 
    return this.http.delete<void>(this.myAppUrl+this.myApiUrl+id);
  }
  // Nuevo producto n
  saveProducto(producto:Producto): Observable<void>{
    return this.http.post<void>(this.myAppUrl+this.myApiUrl, producto);
  }
  // Buscar un producto
  getProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(this.myAppUrl+this.myApiUrl+id);
  }
  // Actualizar un producto
  putProducto(id:number, producto:Producto): Observable<void>{
    return this.http.put<void>(this.myAppUrl+this.myApiUrl+id, producto);
  }
}

