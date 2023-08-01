import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigate(['/minha-estante'])
  }
}
