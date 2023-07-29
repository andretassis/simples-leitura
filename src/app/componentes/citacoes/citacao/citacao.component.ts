import { Component, Input, OnInit } from '@angular/core';
import { Citacao } from './citacao';
import { CitacaoService } from '../citacao.service';

@Component({
  selector: 'app-citacao',
  templateUrl: './citacao.component.html',
  styleUrls: ['./citacao.component.css']
})
export class CitacaoComponent implements OnInit {

  @Input() citacao: Citacao = {
    id: 0,
    conteudo: 'Testando citaçãodasdsadasdsadadsadsadsadadasdsadasdadsaassa',
    autor: 'Autor da citacao',
    modelo: 'modelo1',
    favorito: false
  }

  constructor( private service: CitacaoService) { }

  ngOnInit(): void {
  }

  larguraCitacao(): string {
    if (this.citacao.conteudo.length >= 256) {
      return 'citacao-g'
    }
    return 'citacao-p'
  }

  marcarFavorito() {
    if(this.citacao.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  favoritarCitacao() {
    this.service.favoritar(this.citacao).subscribe()
    console.log(this.citacao.favorito)
  }

}
