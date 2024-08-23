import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-training-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './training-component.component.html',
  styleUrl: './training-component.component.css'
})
export class TrainingComponentComponent implements OnInit {

  trainingForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createTrainingCompo()
  }
  ngOnInit(): void {
  }
  createTrainingCompo() {
    this.trainingForm = this.formBuilder.group({
      employeeID: [''],
      department: this.formBuilder.group({
        jobTitle: ['']
      }),

      hireDate: this.formBuilder.group({
        workEmail: [''],
      }),

      workPhoneNumber: this.formBuilder.group({
        certifications: [''],
      }),
      officeLocation: this.formBuilder.group({
        managerName: [''],
      }),

      emergencyContactName: this.formBuilder.group({
        emergencyContactPhone: [''],
      }),

      emergencyContactRelationship: this.formBuilder.group({
        linkedinProfile: [''],
      }),

      githubProfile: this.formBuilder.group({
        skills: [''],
       
      }),



    })

  }
  clickMe(){
      console.log(this.trainingForm.value);
      
  }
}
