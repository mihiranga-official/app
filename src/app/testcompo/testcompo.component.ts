import { Component } from '@angular/core';
import { JobcardComponent } from "../jobcard/jobcard.component";

@Component({
  selector: 'app-testcompo',
  standalone: true,
  imports: [JobcardComponent],
  templateUrl: './testcompo.component.html',
  styleUrl: './testcompo.component.css'
})
export class TestcompoComponent {

}
