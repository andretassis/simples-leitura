import { Component, OnInit } from '@angular/core';
import { EstanteService } from './estante.service';
import { Livro } from './livro/livro';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})
export class EstanteComponent implements OnInit {

  listaDeLivros: Array<Livro> = []

  constructor(private service: EstanteService) { }

  ngOnInit(): void {
    this.service.listarLivro().subscribe(listaDeLivros => {
      this.listaDeLivros = listaDeLivros
    })
  }

}
