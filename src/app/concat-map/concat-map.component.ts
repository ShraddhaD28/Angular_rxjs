import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  //concatMap : flattening operator subscribe having other subscribe it maintain order than other map

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News','cartoon','movies']);

    source.pipe(map(res=> this.getData(res))
    ).subscribe(res=> res.subscribe(res2=> {
      console.log(res2);
    })
  )

  //Example 2: Map + concatAll

  source.pipe(map(res=> this.getData(res),
  concatAll())
  ).subscribe(res=> {
    console.log(res);
  })

 //Example 3: concatMap (notification)

  source.pipe(concatMap(res=> this.getData(res)
   )).subscribe(res=> {
     console.log(res);
   })
 
  }

  getData(data){
    return of(data + " Video Uploaded");
  }

}
