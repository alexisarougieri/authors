import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor = { name: ''};

  errors: any;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.errors = "";
  }

  authorSubmit() {
    const observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe((data: any) => {
      if (data.message === 'fail') {
        this.errors = data.err.errors;
      }
      else {
       
        this.router.navigate(['/']);
      }
    })
  }
}
