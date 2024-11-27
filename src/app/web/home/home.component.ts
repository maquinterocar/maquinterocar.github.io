import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

  year = signal(new Date().getFullYear());

  private fb = inject(FormBuilder);

  get name() {
    return this.formJoin.get('name')?.invalid && this.formJoin.get('name')?.touched;
  }
  get email() {
    return this.formJoin.get('email')?.invalid && this.formJoin.get('email')?.touched;
  }


  formJoin = this.fb.group({
    name: [, Validators.required],
    email: [, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    message: [, Validators.required],
  });


  send() {
    if (this.formJoin.invalid) {
      alert('Debe completar todos los campos');
    }
    console.log(this.formJoin.value);
  }

}
