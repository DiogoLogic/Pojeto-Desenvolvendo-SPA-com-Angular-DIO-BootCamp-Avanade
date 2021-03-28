import { catchError, map, observeOn } from 'rxjs/operators';
import { funcionarios } from './func.modelo';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  baseUrlHttp = "http://localhost:3001/funcionarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    })
  }

  criarfuncionariohttp(func: funcionarios): Observable<funcionarios> {
    return this.http.post<funcionarios>(this.baseUrlHttp, func).pipe(
      map(obj => obj),
      catchError(e => this.errorHardler(e))
    );
  }

  errorHardler(e: any): Observable<any> {
    this.showMessage('Falha ao Conectar o Banco de Dados -> (HTTP)', true);
    return EMPTY

  }

  read(): Observable<funcionarios[]> {
    return this.http.get<funcionarios[]>(this.baseUrlHttp).pipe(
      map(obj => obj),
      catchError(e => this.errorHardler(e))
    );

  }
  readById(id: number): Observable<funcionarios> {
    const url = `${this.baseUrlHttp}/${id}`
    return this.http.get<funcionarios>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHardler(e))
    );

  }
  update(funcionarios: funcionarios): Observable<funcionarios> {
    const url = `${this.baseUrlHttp}/${funcionarios.id}`;
    return this.http.put<funcionarios>(url, funcionarios).pipe(
      map(obj => obj),
      catchError(e => this.errorHardler(e))
    );

  }
  delete(id: number): Observable<funcionarios> {
    const url = `${this.baseUrlHttp}/${id}`
    return this.http.delete<funcionarios>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHardler(e))
    );

  }
}
