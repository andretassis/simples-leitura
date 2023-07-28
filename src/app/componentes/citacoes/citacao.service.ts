import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Citacao } from './citacao/citacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {

  private readonly API = 'http://localhost:3000/citacoes'

  constructor(private http: HttpClient) { }

  listar(pagina: number): Observable<Citacao[]> {
    const itensPorPagina = 6
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    return this.http.get<Citacao[]>(this.API, {params})
  }

  cadastrar(citacao: Citacao): Observable<Citacao> {
    return this.http.post<Citacao>(this.API, citacao)
  }

  editar(citacao: Citacao): Observable<Citacao> {
    const url = `${this.API}/${citacao.id}`
    return this.http.put<Citacao>(url, citacao)
  }

  excluir(id: number): Observable<Citacao> {
    const url = `${this.API}/${id}`
    return this.http.delete<Citacao>(url)
  }

  buscarId(id: number): Observable<Citacao> {
    const url = `${this.API}/${id}`
    return this.http.get<Citacao>(url)
  }
}
