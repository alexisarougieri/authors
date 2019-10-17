import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  index() {
    return this._http.get("/authors");
  }

  details(id: string) {
    return this._http.get("/details/" + id);
  }

  addAuthor(newAuthor) {
    return this._http.post("/add", newAuthor);
  }

  editAuthor(id: string, editAuthor: object) {
    return this._http.put(`/authors/${id}`, editAuthor);
  }

  deleteAuthor(id: string) {
    return this._http.delete(`/delete/${id}`);
  }
}
