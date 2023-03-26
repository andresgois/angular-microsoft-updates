import { Item } from './../../item.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../../item.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss']
})
export class ItemListarComponent implements OnInit {

  displayedColumns: string[] = ['identificador','alias','documentTitle','initialReleaseDate','currentReleaseDate', 'cvrfUrl'];
  itens$: Observable<Item[]>;
  dataSource:Item[] = []
  formGroupPesquisa: FormGroup;
  pageEvent: PageEvent;
  numPagina: Number;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroupPesquisa = this.formBuilder.group({
      alias: [null]
    })
    this.listarItens()
  }

  buscaPorAlias(){
    if(this.formGroupPesquisa.value.alias){
      this.itens$ = this.itemService.buscarPorAlias(this.formGroupPesquisa.value.alias)
      this.itens$.subscribe( value => {
        this.dataSource = value["content"]
      });
    }
  }

  listarItens(){
    this.numPagina = 0;
    if(this.pageEvent !== undefined){
      this.numPagina = this.pageEvent.pageIndex ? this.pageEvent.pageIndex: 0;
    }

    this.itens$ = this.itemService.listar(this.numPagina)
    this.itens$.subscribe( value => {
      this.dataSource = value["content"]
    });
  }

  limparPesquisa() {
    this.formGroupPesquisa.reset();
    this.listarItens();
  }
}
