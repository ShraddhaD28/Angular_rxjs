import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, timer } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
vedioSubscription:Subscription

  constructor() { }
  
  // interval operator : Emit numbers in sequence based on provided timeframe.
  ngOnInit(): void {

    const broadCatVedios = interval(1000);

    this.vedioSubscription = broadCatVedios.subscribe(res=>{
      console.log("Login Success",res)

      if(res == 330000){
        this.vedioSubscription.unsubscribe();
      }
    });


    // const broadCast = timer(5000,1000);
    //  broadCast.subscribe(result=>{
    //    console.log("response",result);
    //  })


//pluck Operator : Select property to emit.

const source = from([
  { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
  { name: 'Sarah', age: 35 }
]);
const example = source.pipe(pluck('job','title'));
const subscribe = example.subscribe(val => console.log(val));

//output: "Developer" , undefined
//will return undefined when no job is found
  }

}
