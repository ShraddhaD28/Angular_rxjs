import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

//SwitchMap Operator used in search functionlity for cancelling request

  //Example 1: Subscribe inside subscribe 
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

  //   source.pipe(map(res=> this.getData(res))
  //   ).subscribe(res=> res.subscribe(res2=> {
  //     console.log(res2);
  //   })
  // )

//Example 2: Map + MergeAll

// source.pipe(map(res=> this.getData(res),
// switchAll())
// ).subscribe(res=> {
//   console.log(res);
// })

//Example 3: MergeMap

source.pipe(switchMap(res=> this.getData(res)
)).subscribe(res=> {
  console.log(res);
})


  }

  getData(data){
    return of(data + " Video Uploaded");
  }
}
