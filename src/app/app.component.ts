import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm=new FormGroup({
    sn: new FormControl('',[Validators.required]),
    title: new FormControl({ value: '', disabled: this.isDisabled },[Validators.required]),
    price: new FormControl({ value: '', disabled: this.isDisabled },[Validators.required]),
    rating: new FormControl({value:'',disabled:true})
  })
  
  set isDisabled(value: boolean) {
    this.isDisabled = value;
    if(value) {
     this.loginForm.controls['title'].disable();
    } else {
       this.loginForm.controls['price'].enable();
     }
   }
  //  this.loginForm.get('myCheckbox').valueChanges
    // .subscribe((value: any) => {
      // if(value) {
        // this.loginForm.get('myEmailField').setValidators(Validators.required);
      // } else {
        // this.myForm.get('myEmailField').clearValidators();
      // })
    // }
  
  submitted: boolean = false;
  loginUser(){
    this.submitted =true;
    console.log(this.loginForm.value);
      this.loginForm.reset();
  }
   get sn(){
    return this.loginForm.get('sn');
  }
  get title(){
    return this.loginForm.get('title');
  }
  get price(){
    return this.loginForm.get('price');
  }

}
