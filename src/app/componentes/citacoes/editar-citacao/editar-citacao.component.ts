import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao/citacao';
import { CitacaoService } from '../citacao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-citacao',
  templateUrl: './editar-citacao.component.html',
  styleUrls: ['./editar-citacao.component.css']
})
export class EditarCitacaoComponent implements OnInit {

  citacao: Citacao =  {
    id: 0,
    conteudo: '',
    autor: '',
    modelo: ''
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

  editarCitacao() {
      this.service.editar(this.citacao).subscribe(() => {
        this.router.navigate(['/meu-mural'])
      }
    )}

  cancelar() {
    this.router.navigate(['/meu-mural'])
  }
}
