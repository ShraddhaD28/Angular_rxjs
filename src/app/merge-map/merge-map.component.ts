import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

   // MergeMap = map + mergeAll
  // MergeMap : it is flattening Operator having subscribe inside subscribe


  //Example 1: Subscribe inside subscribe 
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    source.pipe(map(res=> this.getData(res))
    ).subscribe(res=> res.subscribe(res2=> {
      console.log(res2);
    })
  )
  
  //Example 2: Map + MergeAll

  source.pipe(map(res=> this.getData(res),
  mergeAll())
  ).subscribe(res=> {
    console.log(res);
  })


   //Example 3: MergeMap

   source.pipe(mergeMap(res=> this.getData(res)
   )).subscribe(res=> {
     console.log(res);
   })
 
  }

  getData(data){
    return of(data + " Video Uploaded");
  }

}
