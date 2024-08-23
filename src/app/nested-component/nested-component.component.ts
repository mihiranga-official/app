import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nested-component.component.html',
  styleUrl: './nested-component.component.css'
})
export class NestedComponentComponent implements OnInit {

  nestedCompoForm!: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.creteNestedForm();
  }
  ngOnInit(): void {

  }
  creteNestedForm() {
    this.nestedCompoForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: this.formBuilder.group({
        dateOfBirth: [''],
        address: [''],
        city: [''],
        state: [''],

        zipCode: this.formBuilder.group({
          userName: [''],
          password: [''],
          securityQuestion: [''],
          securityAnswer: [''],

          accountNumber: this.formBuilder.group({
            accountType: [''],
            bankName: [''],
            branchCode: [''],

            routingNumber: this.formBuilder.group({
              companyName: [''],
              jobTitle: [''],
              department: [''],
              employeeID: [''],

              startDate: this.formBuilder.group({
                endDate: [''],
                supervisorName: [''],

                supervisorPhone: this.formBuilder.group({
                  vehicleMake: [''],
                  vehicleModel: [''],
                  licensePlate: [''],

                  VIN: this.formBuilder.group({
                    insuranceProvider: [''],
                    policyNumber: [''],
                    coverageType: [''],

                    expirationDate: this.formBuilder.group({
                      emergencyContactName: [''],
                      emergencyContactPhone: [''],
                      relationship: [''],

                      medicalConditions: this.formBuilder.group({
                        allergies: [''],
                        medications: [''],
                        passportNumber: [''],

                        issueDate: this.formBuilder.group({
                          issuingCountry: [''],
                          nationality: [''],
                          visaType: [''],
                          visaNumber: [''],

                          visaExpiration: this.formBuilder.group({
                            educationLevel: [''],
                            institutionName: [''],

                            graduationYear: this.formBuilder.group({
                              major: [''],
                              minor: [''],
                              GPA: [''],
                              honors: [''],

                              extracurricularActivities: this.formBuilder.group({
                                projectName: [''],

                                projectDescription: this.formBuilder.group({
                                  teamSize: [''],
                                  role: [''],
                                  responsibilities: [''],
                                  technologiesUsed: [''],
                                }),
                              }),
                            }),



                          }),

                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),

          }),
        }),
      }),










    })


  }
  onClick(){
    console.log(this.nestedCompoForm.value);
    
  }
}
