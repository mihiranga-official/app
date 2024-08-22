import { Component, OnInit } from '@angular/core';
import { JobcardComponent } from "../jobcard/jobcard.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-testcompo',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './testcompo.component.html',
  styleUrl: './testcompo.component.css'
})
export class TestcompoComponent implements OnInit {
  
  testCompo!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.createTest();
  }

  ngOnInit(): void {
    
  }

  createTest() {
    this.testCompo = this.formBuilder.group({

      firstName: [''],
      middleName: [''],
      lastName: [''],
      phoneNumber: [''],
      nicNumber: [''],
      email: [''],

      addressLine: this.formBuilder.group({
        addressLineOne: [''],
        addressLineTwo: [''],
        province: [''],
        city: [''],
        country: [''],
        zipcode: [''],
                     cardDetails: this.formBuilder.group({
                      cardHolderName:[''],
                      cardNumber:[''],
                      expireDate:[''],
                      expireMonth:[''],
                      cvcNumber:['']


        }),
      }),

       formArray : this.formBuilder.array([this.generateFormGroup()]) 


    })
  }

  public log(): void {
    console.log(this.testCompo.value);
  }



  generateFormGroup() : FormGroup {
    return this.formBuilder.group({

      firstName: [''],
      middleName: [''],
      lastName: [''],
      phoneNumber: [''],
      nicNumber: [''],
      email: [''],

    });
  }




}
