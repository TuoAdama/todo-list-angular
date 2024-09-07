import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";

export const routes: Routes = [
  {
    path:"", component: HomeComponent,
  },
  {
    path: "todo/create", component: TodoFormComponent,
  }
];
