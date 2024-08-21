import { Routes } from '@angular/router';
import path from 'path';
import { EmployeeComponent } from './component/employee/employee.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { TestcompoComponent } from './testcompo/testcompo.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { SectionRegistrationComponent } from './section-registration/section-registration.component';
import { MonthlyParameterComponent } from './monthly-parameter/monthly-parameter.component';
import { CalculationComponent } from './calculation/calculation.component';

export const routes: Routes = [
   // {path:'',component:EmployeeComponent},
   {path:'',component:CalculationComponent},
   {path:'jobcard',component:JobcardComponent},
   {path:'test',component:TestcompoComponent},
   {path:'compotwo',component:ComptwoComponent},
   {path:'sectionRegistration',component:SectionRegistrationComponent},
   {path:'parameter',component:MonthlyParameterComponent},
   {path:'calculation',component:CalculationComponent}

];
