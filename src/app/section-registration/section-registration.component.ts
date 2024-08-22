import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './section-registration.component.html',
  styleUrl: './section-registration.component.css'
})
export class SectionRegistrationComponent implements OnInit {
  ngOnInit(): void {
    this.createRegistration();
  }

  registartion!: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }
  createRegistration() {
    this.registartion = this.formBuilder.group({
      userId: [''],
      selectDivision: [''],
      sectionOrder: [''],
      sectionName: ['']


    })
  }
}
