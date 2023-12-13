import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomStepperComponent),
      multi: true,
    },
  ],
})
export class CustomStepperComponent implements ControlValueAccessor {
  value: number | null = null;
  onChange: any = () => {};
  onTouch: any = () => {};

  // -- ControlValueAccessor implementation --
  // Called when the form data model is updated programmatically
  writeValue(value: number): void {
    this.value = value;
  }

  // Called when the form control is updated by the user
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Called when the form control loses focus
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Called when the form control is disabled in code
  setDisabledState(isDisabled: boolean): void {
    // You can implement this method if your control needs to be disabled
  }

  // -- Internal Stepper Implementation --
  // Increase stepper by one
  increment(): void {
    // Increments the value by 1 if it is not null, otherwise sets the value to 1.
    this.updateValue(this.value !== null ? this.value + 1 : 1);
  }

  // Decrease stepper by one
  decrement(): void {
    this.updateValue(this.value !== null ? this.value - 1 : -1);
  }

  // Handles setting the new value and notifying the form of the change
  updateValue(newValue: number | null): void {
    if (newValue !== this.value) {
      this.value = newValue;
      this.onChange(newValue);
      this.onTouch();
    }
  }
}
