import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';

const routes: Routes = [
  { path: 'produtos', component: TabelaProdutosComponent },
  { path: 'produtos/form', component: FormProdutosComponent },
  { path: 'produtos/edit/:id', component: FormProdutosComponent },
  { path: '',   redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
