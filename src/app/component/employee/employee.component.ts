import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employeeForm!: FormGroup;//
  constructor(private formBuilder: FormBuilder)//dependecy injecting
  // dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service).

  {

  }
  ngOnInit(): void {
    this.createForm();//hadpu form eka initailze
  }
  createForm() {
    this.employeeForm = this.formBuilder.group({
      employeeName: [''],
      employeeCity: [''],
      employeetype: [''],
      employeeAdress: this.formBuilder.group({
        firstLane: [''],
        city: [''],
        country: ['']

      })
    })
  }
  log() {
    console.log(this.employeeForm.value)
  }
}
