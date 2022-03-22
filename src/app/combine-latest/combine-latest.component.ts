import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { combineLatest, CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  @ViewChild('val') val :ElementRef;
value="regular"
user:FormGroup;

point="voting";
point_1="vote"

  constructor(private fb:FormBuilder) { }

  onSubmit(){
  console.log(this.user.value);
  console.log(this.val.nativeElement )
  }

  ngOnInit(): void {

this.user = this.fb.group({
  regular1_v:[''],
});


 let names = ['riya','john','july','stella','shizuka'];
 let colors = ['red','yellow','pink','blue','white']

 //const nameObs ;
 //const colorObs
 //combineLatest(namesObs , colorObs).subscribe(res =>{ res});
  }

}
