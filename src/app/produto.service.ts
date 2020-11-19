import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listaProdutos: Produto[] = [
    {id: 1, nome: 'Prod1', marca: 'Marca1', preco: 10, validade: new Date()},
    {id: 6, nome: 'Prod2', marca: 'Marca1', preco: 20, validade: new Date()},
    {id: 8, nome: 'Prod3', marca: 'Marca1', preco: 30, validade: new Date()},
    {id: 12, nome: 'Prod4', marca: 'Marca2', preco: 40, validade: new Date()},
    {id: 15, nome: 'Prod5', marca: 'Marca2', preco: 50, validade: new Date()},
  ];

  constructor() { }

  addProduto(produto: Produto) {
    this.listaProdutos.push(produto);

  }

  getProdutos() {
    return this.listaProdutos;
  }

  buscarPorId(id) {
    return this.listaProdutos.find( produto => produto.id === id);
  }

  editarProduto(id: number, produto: Produto) {
    const index = this.getIndice(id);
    if (index >= 0) {
      this.listaProdutos[index] = produto;
    }
  }

  deletarProduto(id) {
    const index = this.getIndice(id);
    if (index >= 0) {
      this.listaProdutos.splice(index, 1);
    }

  }

  private getIndice(id) {
    return this.listaProdutos.findIndex(prod => prod.id === id);
  }

}
