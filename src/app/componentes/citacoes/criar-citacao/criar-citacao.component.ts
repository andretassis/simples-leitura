import { Component, OnInit } from '@angular/core';
import { CitacaoService } from '../citacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-citacao',
  templateUrl: './criar-citacao.component.html',
  styleUrls: ['./criar-citacao.component.css']
})
export class CriarCitacaoComponent implements OnInit {

  citacao = {
    conteudo: '',
    autor: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: CitacaoService,
    private router: Router
    ) { }

  criarCitacao() {
    return this.service.cadastrar(this.citacao).subscribe(() => {
      this.router.navigate(['/meu-mural'])
    })
  }

  cancelar() {
    this.router.navigate(['/meu-mural'])
  }


  ngOnInit(): void {
  }

}
