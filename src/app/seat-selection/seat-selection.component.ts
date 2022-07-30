import { Component, OnInit, ViewChild } from '@angular/core';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {

  constructor() { }

  passenger : Passenger = new Passenger();
  seat_selected : string;
  occupied: String = '';
  errorMessage : String
  @ViewChild('seat') seat : any

  ngOnInit(): void {
    // console.log(this.seats.seats.length)
  }

  afterViewInit(){
    
  }

  selected(element : HTMLElement){
    // element.className+=" selected"
    this.errorMessage=''
    console.log(element)
    if(element.className === "seat" || element.className==="seat aisle"){
      this.seat_selected = element.className;
      element.className+=" selected";      
    }else if(element.className==="seat occupied" || element.className==="seat aisle occupied"){
      this.errorMessage = "You can't select already occupied seat"
    }
    else{
      element.className=this.seat_selected;
      this.seat_selected=''
    }
  }

}
