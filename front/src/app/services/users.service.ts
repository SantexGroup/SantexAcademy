import { Injectable } from '@angular/core';
import { UserModel } from '../core/model/users.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    private endpoint = 'http://localhost:4001/user'; //creamos una variable para el endpoint de los cursos

    constructor(private http: HttpClient) { }

    // Con model
    getUsers(): Observable<UserModel []> { //creamos un metodo que va a devolver un observable con el array de cursos

        return this.http.get<UserModel []>(this.endpoint) //hacemos un get del endpoint que será el array de cursos

    }

    getUsersId(id: number): Observable<UserModel []> {

        const url = `${this.endpoint}/${id}`

        return this.http.get<UserModel []>(url)
    }


}
