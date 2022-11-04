import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders: string[] = ['male', 'female', 'no binary'];
  signupForm: FormGroup;
  forbiddenUsernames: string[] = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData':  new FormGroup({
        'username': new FormControl( null, [ Validators.required, this.forbiddenNames.bind(this) ]),
        'email': new FormControl( null, [ Validators.required, Validators.email ], this.forbiddenEmails.bind(this))
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log( this.signupForm )
  }

  onAddHobby(){
    const newControl = new FormControl( null );
    (<FormArray>this.signupForm.get('hobbies')).push(newControl);
  }

  
  public get hobbiesFormArrayControls(){
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  
  forbiddenNames( control: FormControl ):{[s: string]: boolean}{
    console.log(this.signupForm);
    
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails( control: FormControl ) : Promise<any> | Observable<any>{
    const promise: Promise<any> =  new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value == 'test@test.com'){
          resolve( { 'emailIsForbidden': true } )
        } else {
          resolve (null)
        }
      },1500);
    });
    return promise;
  }

}
