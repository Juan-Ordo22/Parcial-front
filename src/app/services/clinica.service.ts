import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clinica } from '../models/clinica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private api = 'http://localhost:8080/api/clinicas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Clinica[]> {
    return this.http.get<Clinica[]>(this.api);
  }

  crear(cli: Clinica): Observable<Clinica> {
    return this.http.post<Clinica>(this.api, cli);
  }
}
