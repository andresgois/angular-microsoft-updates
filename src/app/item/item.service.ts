import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8080'
  private endpoint = 'api/update'

  constructor(private httpClient: HttpClient) {  }

  listar(pagina: Number):Observable<Item[]>{
    let url = `${this.baseUrl}/${this.endpoint}?page=`+pagina;
    return this.httpClient.get<Item[]>(url);
  }

  buscarPorAlias(alias):Observable<Item[]>{
    let url = `${this.baseUrl}/${this.endpoint}?alias=`+alias;
    return this.httpClient.get<Item[]>(url);
  }
}
