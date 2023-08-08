import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Livro } from "./livro/livro";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EstanteService {
  private readonly API = 'http://localhost:3001/livros'

  constructor (private http: HttpClient) {}

  listarLivro(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API)
  }

  cadastrarLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro)
  }
}
