import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  mensagem = '';
  botaoRealizar = 'Cadastrar';
  id: number;
  produto = new Produto();
  constructor(private produtoService: ProdutoService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.produto = Object.assign({}, this.produtoService.buscarPorId(this.id));
      console.log(this.produto);
      this.botaoRealizar = 'Editar';
    }
  }

  cadastrar() {
    if (!this.id) {
      this.produtoService.addProduto(this.produto);
      this.mensagem = this.produto.nome + ' cadastrado com sucesso';
      this.produto = new Produto();
    } else {
      this.produtoService.editarProduto(this.id, this.produto);
      this.mensagem = this.produto.nome + ' editado com sucesso';
    }
  }

  cancelar() {
    this.router.navigate(['/produtos']);
    // this.router.navigate(['/produtos/edit', '1']);
  }

}
