import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao/citacao';
import { CitacaoService } from '../citacao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-citacao',
  templateUrl: './excluir-citacao.component.html',
  styleUrls: ['./excluir-citacao.component.css']
})
export class ExcluirCitacaoComponent implements OnInit {

  citacao: Citacao = {
    id: 0,
    conteudo: '',
    autor: '',
    modelo: '',
  }

  constructor(
    private service: CitacaoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarId(parseInt(id!)).subscribe((citacao) => {
      this.citacao = citacao
    })
  }

  excluirCitacao() {
    if(this.citacao.id){
      this.service.excluir(this.citacao.id).subscribe(() => {
        this.router.navigate(['/meu-mural'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/meu-mural'])
  }

}
