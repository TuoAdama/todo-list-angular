import {Component, Input} from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todo-item-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-item-card.component.html',
  styleUrl: './todo-item-card.component.css'
})
export class TodoItemCardComponent {
  @Input({required: true}) todo?: Todo;
}
