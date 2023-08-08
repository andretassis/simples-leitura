import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      titulo: [''],
      autor: [''],
      estante: ['']
    })
  }

  adicionarLivro() {
    this.service.cadastrarLivro(this.formulario.value).subscribe(() => {
      this.router.navigate(['/minha-estante'])
    })
  }

  cancelar() {
    this.router.navigate(['/minha-estante'])
  }
}
