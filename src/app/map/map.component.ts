import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
sub1:Subscription;

  constructor() { }

  //map : Apply/modify projection with each value from source.

ngOnInit(): void {

const broadcast = interval(1000);

this.sub1 = broadcast.pipe( map(data=>{ console.log("data map",data) })).subscribe(res=>{
                console.log(res)

      setTimeout (()=>{ this.sub1.unsubscribe(); 
                },10000)     
});

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(map(val => val * 10));
const subscribe = example.subscribe(val => console.log(val));
//output: 11,12,13,14,15

const source1 = from([
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ryan', age: 50 }
]);
const example1 = source1.pipe(map(({ name }) => name));
const subscribe1 = example1.subscribe(val => console.log(val));
//output: "Joe","Frank","Ryan"
}


}