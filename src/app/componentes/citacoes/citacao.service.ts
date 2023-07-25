import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Citacao } from './citacao/citacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {

  private readonly API = 'http://localhost:3000/citacoes'

  constructor(private http: HttpClient) { }

  listar(): Observable<Citacao[]> {
    return this.http.get<Citacao[]>(this.API)
  }

  cadastrar(citacao: Citacao): Observable<Citacao> {
    return this.http.post<Citacao>(this.API, citacao)
  }
}
