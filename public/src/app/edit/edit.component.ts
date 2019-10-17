import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author = {
    name: ''
  };
  data: any;
  errors: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getOneById(params.id);
    });
  }

  getOneById(id) {
    const observable = this._httpService.details(id);
    observable.subscribe((data: any) => {
      this.author = data;
    });
  }

  editSubmit(id, author) {
    const observable = this._httpService.editAuthor(id, author);
    observable.subscribe((data: any) => {
      if (data.message === 'fail') {
        this.errors = data.err.errors; // data.err.errors is display as whole JSON object
        console.log(data.err.errors)
      }
      else {
        console.log("should be here")
        this.router.navigate(['/']);
      }
    });
  }

}
