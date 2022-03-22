import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  userName = new Subject<any>();

  user = new BehaviorSubject<any>('Riya');

 vedioData = new ReplaySubject<string>(2);

 asyncData = new AsyncSubject();

  constructor() {
    console.log("subject in data service", this.vedioData)
   }

  print(id){
    let el = document.createElement('li');
    el.innerText = 'From-event operator';
    document.getElementById(id).appendChild(el);
  }

  print2(id){
    let el = document.createElement('li');
    el.innerText = 'From-event operator';
    document.getElementById(id).prepend(el);
  }
}
