import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "itens",
    loadChildren: () => import('./item/item-listar/item-listar.module').then( modulo => modulo.ItemListarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
