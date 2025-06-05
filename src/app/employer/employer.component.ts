import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms'

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  position = new UntypedFormControl('');

  constructor() { }

  ngOnInit(): void {
  }
  callingFunction() {
    this.position.setValue('backend engineer');
   }
}
