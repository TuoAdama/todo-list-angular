import { Component } from '@angular/core';
import {Todo} from "../../models/Todo";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  form: FormGroup = new FormGroup({
    title: new FormControl<String>('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl<String>('', [Validators.required]),
    description: new FormControl<String>('', [Validators.required, Validators.minLength(3)]),
  })

  onSubmit(){
    let todo: Todo = this.form.value as Todo
  }
}
