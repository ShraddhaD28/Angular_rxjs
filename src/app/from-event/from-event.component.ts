import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {
@ViewChild('addBtn') addBtn:ElementRef
  constructor(private dataService:DataserviceService) { }


  //of operator : Emit variable amount of values in a sequence and then emits a complete notification.
  ngOnInit(): void {

    const obs1 = of({a:'Riya', b:'Shraddha' , c:'Durbule'});
    
    obs1.subscribe(res=>{
      console.log("of operator",res);
    })

    //From operator : Turn an array, promise, or iterable into an observable

    const obs3 = from(['Uxtrendz','john','july']);
    obs3.subscribe(res=>{
      console.log(res,"data of from operator")
    })

  }

  //From-Event operator :Turn event into observable sequence.

  ngAfterViewInit(){
    let count=0;

    fromEvent(this.addBtn.nativeElement , 'click').subscribe(res=>{
      console.log("Video",+ count++)
      this.dataService.print('addList1');
      this.dataService.print('addList2');
    });
  }

  








  

}
