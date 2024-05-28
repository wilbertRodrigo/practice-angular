import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private _usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  //GET Request
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._usersUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this._usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<User[]>(`${this._usersUrl}/?name=${term}`);
  }

  //DELETE Request
  deleteUser(id: number): Observable<User> {
    const url = `${this._usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions);
  }
  //PUT Reques
  updateHero(user: User): Observable<any> {
    return this.http.put(this._usersUrl, user, this.httpOptions);
  }

  //POST Request
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this._usersUrl, user, this.httpOptions);
  }
}
