import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{

  userLogin!:FormGroup
  constructor(private formBuilder:FormBuilder){
    this.loginForm()
  }
  ngOnInit(): void {
  
  }

  loginForm(){
    this.userLogin=this.formBuilder.group({
      userName:[''],
      passWord:['']
    })
  }
}
