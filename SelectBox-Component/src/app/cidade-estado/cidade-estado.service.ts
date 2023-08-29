import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeEstadoService {

  constructor(private http: HttpClient) { }

  getEstados(): Observable<any[]> {
    return this.http.get<any[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
  }

  getMunicipios(siglaUF: string): Observable<any[]>{
    return this.http.get<any[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + siglaUF + '/distritos?orderBy=nome')
  }
}
