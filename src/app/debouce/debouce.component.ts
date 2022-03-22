import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouce',
  templateUrl: './debouce.component.html',
  styleUrls: ['./debouce.component.scss']
})
export class DebouceComponent implements OnInit ,AfterViewInit{
@ViewChild('myinput1') myinput1:ElementRef;
@ViewChild('myinput2') myinput2:ElementRef;
data;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {

   const searchterm1 =  fromEvent<any>(this.myinput1.nativeElement , 'keyup')
   .pipe(
     map(event => event.target.value),
     debounceTime(1000))
   .subscribe(res =>{
      console.log(res);
      this.data = res;
    });


    const searchterm2 =  fromEvent<any>(this.myinput2.nativeElement , 'keyup')
    .pipe(
      map(event => event.target.value),debounceTime(500),
       distinctUntilChanged())
    .subscribe(res =>{
      console.log(res);
    });

  }

}
