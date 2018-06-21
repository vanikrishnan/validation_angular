import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
  selector: 'app-idform',
  templateUrl: './idform.component.html',
  styleUrls: ['./idform.component.css']
})
export class IdformComponent implements OnInit {
idformgroup: FormGroup;
  constructor(private httpService: Http)  {
this.idformgroup = new FormGroup({
firstName : new FormControl('',Validators.required),
fullName :new FormControl('',Validators.required),
desig : new FormControl('',Validators.required),
empcode : new FormControl('',[Validators.required, Validators.pattern(/^\d{7}$/)]),
bg :new FormControl('',[Validators.required, Validators.pattern(/^(A|B|AB|O)[+-]$/)]),
reason : new FormControl('New Employee',Validators.required),
dateofemp : new FormControl('',Validators.required),
email : new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@virtusa.com+$/)]),
contactFormGroup :new FormGroup({
  phno : new FormControl('',[Validators.required, Validators.pattern(/^\d{10}$/)]),
  contno:new FormControl('',[Validators.required, Validators.pattern(/^\d{10}$/)])
},this.checkifAtleastOneContactNumberIsPresent)
})
}

  ngOnInit() {
  }

  checkifAtleastOneContactNumberIsPresent(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    const contactNum = control.get('contno').value;
    const alternateContactNum = control.get('phno').value;
    if (contactNum === '' && alternateContactNum === '') {
      return {
        contactNumberMissing: true
      }
    }
    return null;
  }

  addDetails() {
    console.log(this.idformgroup.value);
    const url = 'https://idformvalidation-3f449.firebaseio.com/';
    this.httpService.post(url, this.idformgroup.value)
      .subscribe(rsp => console.log(rsp));
    console.log('Posted');
  }
  // https://id-application-form.firebaseio.com/applicationIds.json

}
