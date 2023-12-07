import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  bioSection = new FormGroup({
    firstName: new FormControl<string>('', [
      Validators.minLength(3),
      Validators.required
    ]),
    lastName: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    age: new FormControl<number>(null, [Validators.min(18), Validators.required])
  });

  constructor() {
  }

  ngOnInit() {
  }
}
