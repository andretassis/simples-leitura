import { Component, OnInit } from '@angular/core';
import { CitacaoService } from '../citacao.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-citacao',
  templateUrl: './criar-citacao.component.html',
  styleUrls: ['./criar-citacao.component.css']
})
export class CriarCitacaoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: CitacaoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }


    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        conteudo: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autor: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: ['modelo1']
      })
    }

    criarCitacao() {
      console.log(this.formulario)
      if(this.formulario.valid) {
        return this.service.cadastrar(this.formulario.value).subscribe(() => {
          this.router.navigate(['/meu-mural'])
        })
      } else {
        return alert('Formulário inválido! Verifique o preenchimento dos campos!')
      }
    }

    cancelar() {
      this.router.navigate(['/meu-mural'])
    }
}
