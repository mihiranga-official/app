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

    this.createForm()
  }
  ngOnInit(): void {
    //this.createForm()
  }
  createForm() {
    this.testForm = this.formBuilder.group({
      id: [''],
      divisionId: ['',[Validators.required,Validators.maxLength(10)]],
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
      epfNumbers: this.formBuilder.group({
        pieceRateHeaderId: [''],
        pieceRateEffectMonth: [''],
        inDate: [''],
        outDate: [''],
        inTime: this.formBuilder.group({
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
