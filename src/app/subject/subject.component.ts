import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  post:any;
  userName:string;

  userStream1=['Angular','Html','Css','Php','js'];
  userStream2=[];

  subscribeMode:boolean;

  subscription1:Subscription;

  constructor(private _dataService:DataserviceService) { 
    this._dataService.userName.subscribe(uname =>{
      this.userName = uname;
    })
  }

showdata;

ngOnInit(): void {
this._dataService.vedioData.subscribe(res=>{
  console.log(res,"relay subject vediodata")
  this.userStream1.push(res);
});

this._dataService.asyncData.subscribe(res=>{
  console.log(res,"async subject data");
  this.showdata = res;
})
  }

  AddPost(uname){
    //this.userName = uname.value;
    console.log("subject component value",uname.value);
    this._dataService.userName.next(uname.value);
    }

    subscription()
    {
      if(this.subscribeMode)
      {
        this.subscription1.unsubscribe();
      }else{
        this.subscription1 = this._dataService.vedioData.subscribe(res=>{
          this.userStream2.push(res);
        })
      }
    this.subscribeMode = !this.subscribeMode;

    }

AddVedio(video)
{
console.log("add", video.value);
this._dataService.vedioData.next(video.value)
console.log(this.userStream1,"work")
}

AsyncAdd(video)
{
console.log("add", video.value);
this._dataService.asyncData.next(video.value);
}

// AsyncSubject : Emits its last value on completion
onComplete()
{
this._dataService.asyncData.complete();
}

}
