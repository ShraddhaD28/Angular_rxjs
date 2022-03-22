import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { toArray, take, } from 'rxjs/operators';


@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
subs : Subscription;
  constructor() { }

  ngOnInit(): void {
// to array and take method
    const source= interval(2000);

    this.subs = source.pipe(
      take(10),
      toArray() 
      ).subscribe(res=>{
      console.log(res,"res");
    });


    // Custome Observable
    const customObs1 = Observable.create(observer =>{
      observer.next('Data emit 1');
      observer.error();

      customObs1.subscribe(res=>{
        console.log(res)
      })
      
    })
  }

}
