import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural-citacao',
  templateUrl: './mural-citacao.component.html',
  styleUrls: ['./mural-citacao.component.css']
})
export class MuralCitacaoComponent implements OnInit {

  listaCitacoes = [
     {
       conteudo: 'Testando citação',
       autor: 'Autor da citacao',
       modelo: 'modelo1'
     },
     {
       conteudo: '	Lorem ipsum lacus senectus sagittis morbi convallis, habitasse vulputate bibendum integer commodo augue, fermentum aptent fringilla himenaeos condimentum. tortor nullam maecenas gravida bibendum tristique nibh sociosqu porta malesuada, fermentum luctus nec aliquam rutrum vehicula sit sollicitudin dui nam, lorem id dolor molestie taciti velit volutpat tempus. vitae class varius primis interdum commodo diam odio urna aliquet mollis faucibus.',
       autor: 'Autor da citacao2',
       modelo: 'modelo3'
     }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
