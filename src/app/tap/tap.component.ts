import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  userStream1=['Angular','Html','Css','Php','js'];
  myColor:string='';

  constructor() { }

  ngOnInit(): void {

const Arr = ['Angular','Html','Css','Php','js'];
const colors = ['red','green','blue']
let obsSubs:Subscription;

    const source = interval(2000);

   obsSubs = source.pipe(
     tap(res=>{
       this.myColor = colors[res]
       console.log("tap before",res);
       if(res==4){
         obsSubs.unsubscribe();
       }
      }),
          map(res =>  Arr[res] ),
          tap(res=> console.log("tap after map",res))
      
      ).subscribe(res=>{
      console.log(res,"data");
    })
  }

}
