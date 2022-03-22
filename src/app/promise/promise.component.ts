import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

Dell(){
    return true; 
}

Hp(){
  return false;
}

  ngOnInit(): void {

    let buyLaptop = new Promise((resolve,reject)=>{
      resolve('Promise is resolved');
      //reject('Promise is rejected');
    });
    buyLaptop.then(res=>{
      console.log("Success of then", res);
      if(this.Dell())
      {
        console.log("Dell is purchased");
      }else if(this.Hp())
      {
        console.log("Hp is purchased")
      }else{
        console.log("Laptop is not Available");
      }
    });

    buyLaptop.catch(res=>{
      console.log("Success of catch",res);
    });
  }

}
