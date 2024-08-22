import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './compo.component.html',
  styleUrl: './compo.component.css'
})
export class CompoComponent implements OnInit {

  compo!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
this.createCompoForm();
  }
  ngOnInit(): void {

  }
  createCompoForm() {
    this.compo = this.formBuilder.group({
      username: [''],
      password: [''],
      confirmPassword: [''],
      dateJoined: [''],

      profilePicture: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: this.formBuilder.group({
          postalCode: [''],
          country: [''],
          phoneNumber: this.formBuilder.group({
            email: [''],
            newsletterSubscription: this.formBuilder.group({
              termsAndConditions: [''],
            })
          })
        })

      })





    })
  }

}
