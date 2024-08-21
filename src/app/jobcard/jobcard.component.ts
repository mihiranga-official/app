import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobcard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './jobcard.component.html',
  styleUrl: './jobcard.component.css'
})
export class JobcardComponent implements OnInit {

  jobForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.newForm()
  }

  newForm() {
    this.jobForm = this.formBuilder.group({
      jobCardMonth: ['',Validators.required],
      jobDivision: [''],
      jobShift: [''],
      jobSection: [''],
      jobInDate: [''],
      jobInTime: [''],
      jobOutDate: [''],
      jobOutTime: [''],
    })


  }
  output() {
    console.log(this.jobForm.value);

  }
}
