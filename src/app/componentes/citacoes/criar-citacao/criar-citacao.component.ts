import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-citacao',
  templateUrl: './criar-citacao.component.html',
  styleUrls: ['./criar-citacao.component.css']
})
export class CriarCitacaoComponent implements OnInit {

  citacao = {
    id: 1,
    conteudo: 'Citação de teste.',
    autor: 'Testando Autor',
    modelo: ''
  }

  criarCitacao() {
    alert('Citação criada!')
  }

  cancelar() {
    alert('Cancelamento realizado!')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
