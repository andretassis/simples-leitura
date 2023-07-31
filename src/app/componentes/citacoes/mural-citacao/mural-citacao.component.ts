import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao/citacao';
import { CitacaoService } from '../citacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mural-citacao',
  templateUrl: './mural-citacao.component.html',
  styleUrls: ['./mural-citacao.component.css']
})
export class MuralCitacaoComponent implements OnInit {

  listaCitacoes: Array<Citacao> = []
  paginaAtual: number = 1
  maisCitacoes: boolean = true
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritos: Citacao[] = []
  titulo: string = 'Meu Mural'

  constructor(
    private service: CitacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaCitacoes) => {
      this.listaCitacoes = listaCitacoes
    })
  }

  carregarMais() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaCitacoes => {
      this.listaCitacoes.push(...listaCitacoes)
      if(!listaCitacoes.length) {
        this.maisCitacoes = false
      }
    })
  }

  pesquisar() {
    this.maisCitacoes = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaCitacoes => {
      this.listaCitacoes = listaCitacoes
    })
  }

  listarFavoritos() {
    this.titulo = 'Citações Favoritas'
    this.favoritos = true
    this.maisCitacoes = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaCitacoesFavoritas => {
      this.listaCitacoes = listaCitacoesFavoritas
      this.listaFavoritos = listaCitacoesFavoritas
  })
  }

  recarregarTodas() {
    this.favoritos = false
    this.paginaAtual = 1
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

}
