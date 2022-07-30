import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html', 
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {
  busDetails: Bus[]  = []
  constructor() { }

  ngOnInit(): void {
  }

}
