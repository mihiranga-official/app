import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent implements OnInit {
 
  calculationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.createCalculation()
  }
  createCalculation() {
    this.calculationForm = this.formBuilder.group({
      Id: [''],
      years: [''],
      stdMax: [''],
      effMonth: [''],
      rateType: [''],
      baseType: [''],
      stdHour: [''],
      stdRate: [''],


    })


  }
  logout() {
    console.log(this.calculationForm.value);

  }
}

