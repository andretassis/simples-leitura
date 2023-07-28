import { Component, OnInit } from '@angular/core';
import { CitacaoService } from '../citacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-citacao',
  templateUrl: './editar-citacao.component.html',
  styleUrls: ['./editar-citacao.component.css']
})
export class EditarCitacaoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: CitacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarId(parseInt(id!)).subscribe((citacao) => {
      this.formulario = this.formBuilder.group({
        id: [citacao.id],
        conteudo: [citacao.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern((/(.|\s)*\S(.|\s)*/))
        ])],
        autor: [citacao.autor, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [citacao.modelo]
      })
    })

  }

  editarCitacao() {
    if(this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/meu-mural'])
      }
    )}
    }

  cancelar() {
    this.router.navigate(['/meu-mural'])
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao-desabilitado'
    }
  }
}
