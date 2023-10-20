import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//Module Interface
import { UserList } from '../interfaces/user-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {
 

  private endpoint: string = 'users';
  private api: string = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers():Observable<UserList[]>{
    return this.http.get<UserList[]>(`${this.api}/${this.endpoint}`);
  }

  getUserById(id:number):Observable<UserList>{
    return this.http.get<UserList>(`${this.api}/${this.endpoint}/${id}`);
  }

  deleteById (id: number){
    return this.http.delete<UserList>(`${this.api}/${this.endpoint}/${id}`);
  }

  insertUser(user:UserList){
    return this.http.post(`${this.api}/${this.endpoint}`, user);
  }

  editUser(user:UserList, id: number){
    return this.http.put(`${this.api}/${this.endpoint}/${id}`, user)
  }
}
