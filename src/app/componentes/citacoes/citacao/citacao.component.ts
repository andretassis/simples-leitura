import { Component, Input, OnInit } from '@angular/core';
import { Citacao } from './citacao';
import { CitacaoService } from '../citacao.service';

@Component({
  selector: 'app-citacao',
  templateUrl: './citacao.component.html',
  styleUrls: ['./citacao.component.css']
})
export class CitacaoComponent implements OnInit {

  @Input() listaFavoritos: Citacao[] = []

  @Input() citacao: Citacao = {
    id: 0,
    conteudo: '',
    autor: '',
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
    this.service.favoritar(this.citacao).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.citacao), 1)
    })
  }

}
