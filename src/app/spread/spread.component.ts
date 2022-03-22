import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent implements OnInit {
  staticStatement1 = ["welcome", "to", "our", "channel", "UxTrendz"];
  staticStatement2 = ["Thanxx", "for", "subscribing", "UxTrendz"];

  Statement3 = [this.staticStatement1,this.staticStatement2,"please","like","share"]

  details = ['riya', 'uxtrendz']

  constructor() { }

  ngOnInit(): void {
    console.log(...this.staticStatement1);
    console.log(...this.staticStatement2);
    console.log(...this.Statement3);
    //this.myFuction(...this.details)
  }

   myFuction(name,channel){
    console.log("my name is"+name+ "my favourite channl is"+channel)
   }



}
