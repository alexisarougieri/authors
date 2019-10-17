import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    let observable = this._httpService.index();
    observable.subscribe((data: any) => {
      this.authors = data;
    })
  }

  deleteAuthor(id: string) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe((data: any) => {
      this.getAllAuthors();
    })
  }

}
