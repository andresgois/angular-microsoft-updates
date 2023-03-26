import { Item } from './../../item.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss']
})
export class ItemListarComponent implements OnInit {

  displayedColumns: string[] = ['identificador','alias','documentTitle','initialReleaseDate','currentReleaseDate', 'cvrfUrl'];
  itens$: Observable<Item[]>;
  dataSource:Item[] = []

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.listarItens()
  }

  listarItens(){
    this.itens$ = this.itemService.listar()
    this.itens$.subscribe( value => {
      this.dataSource = value["content"]
      console.log(this.dataSource)
    });
  }
}
