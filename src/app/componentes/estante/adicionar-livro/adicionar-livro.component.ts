import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstanteService } from '../estante.service';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: EstanteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3)
      ])],
      autor: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3)
      ])]
    })
  }

  adicionarLivro() {
    if(this.formulario.valid) {
      this.service.cadastrarLivro(this.formulario.value).subscribe(() => {
        this.router.navigate(['/minha-estante'])
    }) } return
  }

  cancelar() {
    this.router.navigate(['/minha-estante'])
  }

  habilitarBotao(){
    if (this.formulario.valid) {
      return "botao"
    } else {
      return "botao-desabilitado"
    }
  }
}
