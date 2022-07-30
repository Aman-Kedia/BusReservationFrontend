import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { RegisterService } from '../register-service';

import { UserRoute } from '../route';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  r: UserRoute = new UserRoute();
  minDate: String;
  originList: any;
  destinationList: any;

  constructor(private route: Router, private registerService: RegisterService) { }

  ngOnInit() {
    this.minDate = moment().format('YYYY-MM-DD')
    this.registerService.getOrigin()
      .subscribe(
        data => {
          this.originList = data;
        }
      );

    this.registerService.getDestination()
      .subscribe(
        data => {
          this.destinationList = data;
        }
      );

  }
  onSubmit(): void {
    console.log(this.r.origin + " " + this.r.destination + " " + this.r.date)
  }

}
