import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-monthly-parameter',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './monthly-parameter.component.html',
  styleUrl: './monthly-parameter.component.css'
})
export class MonthlyParameterComponent implements OnInit {

  parameterForm!:FormGroup;
  constructor(private formBuilder:FormBuilder){
    
  }
  ngOnInit(): void {
   this.createFormForParameter()
  }

createFormForParameter(){
  this.parameterForm=this.formBuilder.group({
        parameterId:[''],
        parameterActive:[''],
        parameterMonth:[''],
        parameterWorkingDays:[''],
        parameterAverageHoursPerShift:[''],
        parameterActualDays:[''],
        parameterWorkingHoursPerMonth:[''],
        parameterMaximumPriceratePayRatio:[''],
      
        

  })
}

}

