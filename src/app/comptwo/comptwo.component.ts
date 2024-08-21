import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-comptwo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './comptwo.component.html',
  styleUrl: './comptwo.component.css'
})
export class ComptwoComponent implements OnInit {

  /**
   *
   */

  testForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {


  }
  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    // formGroup 
    this.testForm = this.formBuilder.group({
 // formControlers 
 
 //FormControlNames

 //id: [''],
//  divisionId:
      id: [''],
      divisionId: ['', [Validators.required]],
      sectionId: [''],
      shiftMethodId: [''],
      employeeRotateGroupId: [''],
      pieceRateItemId: [''],
      pieceRateHeaderId: [''],
      pieceRateEffectMonth: [''],
      inDate: [''],
      outDate: [''],
      inTime: [''],
      outTime: [''],
      effectMonth: [''],
      approvedStatus: [''],
      approvedBySalaryDept: [''],
      //formGroupName epfNumbers
      epfNumbers: this.formBuilder.group({
         //FormControlNames
        pieceRateHeaderId: [''],
        pieceRateEffectMonth: [''],
        inDate: [''],
        outDate: [''],
             //formGroupName inTime
        inTime: this.formBuilder.group({
           //FormControlNames
          outTime: [''],
          effectMonth: [''],
          approvedStatus: [''],
          approvedBySalaryDept: [''],
        }),
      }),
      isActive: [''],
      createdBy: [''],
      createdDate: [''],
      jobCardEntryLevelDatas: this.formBuilder.array([])

    }

    )
  }
  log() {
    console.log(this.testForm.value)
  }
}
