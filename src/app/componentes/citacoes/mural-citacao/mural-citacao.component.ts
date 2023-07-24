import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao/citacao';

@Component({
  selector: 'app-mural-citacao',
  templateUrl: './mural-citacao.component.html',
  styleUrls: ['./mural-citacao.component.css']
})
export class MuralCitacaoComponent implements OnInit {

  listaCitacoes: Array<Citacao> = []

  constructor() { }

  ngOnInit(): void {
  }

}
