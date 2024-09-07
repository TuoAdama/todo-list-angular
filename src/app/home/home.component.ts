import {Component} from '@angular/core';
import {TodoItemCardComponent} from "../todo-item-card/todo-item-card.component";
import {Status} from "../../enum/Status";
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TodoItemCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected readonly Status = Status;
  todos: Todo[] = [
    {title: "Todo 1", description: "this a description 1", status: Status.TODO},
    {title: "Todo 2", description: "this a description 2", status: Status.LOADING},
    {title: "Todo 3", description: "this a description 3", status: Status.DONE},
    {title: "Todo 4", description: "this a description 4", status: Status.DONE},
    {title: "Todo 5", description: "this a description 5", status: Status.LOADING},
    {title: "Todo 6", description: "this a description 6", status: Status.DONE},
    {title: "Todo 7", description: "this a description 7", status: Status.TODO},
  ]
}
