import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao/citacao';
import { CitacaoService } from '../citacao.service';

@Component({
  selector: 'app-mural-citacao',
  templateUrl: './mural-citacao.component.html',
  styleUrls: ['./mural-citacao.component.css']
})
export class MuralCitacaoComponent implements OnInit {

  listaCitacoes: Array<Citacao> = []
  paginaAtual: number = 1
  maisCitacoes: boolean = true

  constructor(private service: CitacaoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaCitacoes) => {
      this.listaCitacoes = listaCitacoes
    })
  }

  carregarMais() {
    this.service.listar(++this.paginaAtual).subscribe(listaCitacoes => {
      this.listaCitacoes.push(...listaCitacoes)
      if(!listaCitacoes.length) {
        this.maisCitacoes = false
      }
    })
  }

}
