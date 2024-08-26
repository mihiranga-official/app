import { Routes } from '@angular/router';
import path from 'path';
import { EmployeeComponent } from './component/employee/employee.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { TestcompoComponent } from './testcompo/testcompo.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { SectionRegistrationComponent } from './section-registration/section-registration.component';
import { MonthlyParameterComponent } from './monthly-parameter/monthly-parameter.component';
import { CalculationComponent } from './calculation/calculation.component';
import { CompoComponent } from './compo/compo.component';
import { TrainingComponentComponent } from './training-component/training-component.component';
import { NestedComponentComponent } from './nested-component/nested-component.component';
import { StyleComponentsComponent } from './style-components/style-components.component';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
   // {path:'',component:MonthlyParameterComponent},
   {path:'',component:InventoryComponent},
   {path:'jobcard',component:JobcardComponent},
   {path:'test',component:TestcompoComponent},
   {path:'compotwo',component:ComptwoComponent},
   {path:'sectionRegistration',component:SectionRegistrationComponent},
   {path:'parameter',component:MonthlyParameterComponent},
   {path:'calculation',component:CalculationComponent}

];
