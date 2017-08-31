import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-demo-app',
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.css']
})
export class DemoAppComponent implements OnInit {
  data: Observable<{}>;
  user: Observable<{}>;



  years = [{
    one: 1998,
    two: 1999,
    three: 2000,
    four: 2001
  },
    {
    one: 2005,
    two: 2006,
    three: 2007,
    four: 2008
  },
    {
    one: 2009,
    two: 2010,
    three: 2011,
    four: 2012
  }];

  constructor() { }

  ngOnInit() {
     this.user = this.getAsyncData().share();
  }

  getAsyncData() {

    return Observable.of({
      year: 1907,
      deaths: 1000
    },
      {
        year: 1908,
        deaths: 2000
      }).delay(2000);

    /*return Observable.of({
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 65,
      height: 172,
      mass: 77,
      homeworld: 'Tatooine'

    }).delay(2000);*/
  }

}
