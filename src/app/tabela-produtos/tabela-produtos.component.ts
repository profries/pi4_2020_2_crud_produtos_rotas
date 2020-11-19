import { Component, OnInit, OnChanges, Input, Inject } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit, OnChanges {
preco: number;
produtos = [];

  constructor(private produtoService: ProdutoService) {
    this.produtos = this.produtoService.getProdutos();
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.produtos = this.produtoService.getProdutos();
  }

  deletar(id) {
    this.produtoService.deletarProduto(id);
  }

}
