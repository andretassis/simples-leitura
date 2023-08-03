import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['nome teste'],
      autor: ['autor teste'],
      estante: ['desejo-ler']
    })
  }

  cancelar() {
    this.router.navigate(['/minha-estante'])
  }
}
