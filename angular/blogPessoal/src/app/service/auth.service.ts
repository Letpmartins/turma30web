import { UserLogin } from '../model/UserLogin';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://generationblogpessoalleticia.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://generationblogpessoalleticia.herokuapp.com/usuarios/cadastrar', user)
  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('https://generationblogpessoalleticia.herokuapp.com/usuarios/atualizar', user)
  }

  getByUser(id: number): Observable<User> {
    return this.http.get<User>(`https://generationblogpessoalleticia.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }

  adm(){
    let ok = false

    if(environment.tipo == 'adm'){
      ok = true
    }
    return ok
  }
}
