import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { concatAll, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

// Concat Operator : which concat observable and show final result

    const sourceTech = interval(1000).pipe(map (v=> 'Tech Vedios #'+(v+1) ),take(5));
    const sourceNews = interval(1000).pipe(map (v=> 'News Vedios #'+(v+1) ),take(5));
    const sourceComedy = interval(1000).pipe(map (v=> 'Comedy Vedios #'+(v+1) ),take(5));

    const finalSource = concat(sourceTech , sourceNews , sourceComedy);
          finalSource.subscribe(res =>{
      console.log(res);
    });

// Merge Operator : which concat observable and show final result

const sourceTech1 = interval(1000).pipe(map (v=> 'Tech Vedios #'+(v+1) ),take(5));
const sourceNews2 = interval(3000).pipe(map (v=> 'News Vedios #'+(v+1) ),take(5));
const sourceComedy3 = interval(2000).pipe(map (v=> 'Comedy Vedios #'+(v+1) ),take(5));

const finalSource2 = merge(sourceTech1 , sourceNews2 , sourceComedy3);
      finalSource.subscribe(res =>{
  console.log(res);
});   


  }

}
