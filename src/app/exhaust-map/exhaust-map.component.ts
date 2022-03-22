import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit ,AfterViewInit{
url;
@ViewChild('btn')  btn:ElementRef;

//Many clicks will submit only one request at Time 
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
      fromEvent<any>(this.btn.nativeElement, 'click').pipe(
        exhaustMap((res)=> res)
      ).subscribe(res=>{
       console.log(res);
   });
  }

 
}
