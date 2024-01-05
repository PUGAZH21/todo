import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todoo } from './todoo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  baseurl='http://localhost:3000/'

getAll():Observable<Todoo[]>{
  return this.http.get<Todoo[]>(`${this.baseurl}lists`);
}

post(to:Todoo):Observable<Todoo>{
  return this.http.post<Todoo>(`${this.baseurl}pos`,to);
}


update(id:string,to:Todoo):Observable<Todoo>{
  return this.http.put<Todoo>(`${this.baseurl}upd/${id}`,to);
}

delete(id:string):Observable<Todoo>{
  return this.http.delete<Todoo>(`${this.baseurl}del/${id}`)
}
getbyid(id:string):Observable<Todoo>{
  return this.http.get<Todoo>(`${this.baseurl}getbyid/${id}`)
}

}

