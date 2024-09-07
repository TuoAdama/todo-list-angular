import {Status} from "../enum/Status";

export interface Todo {
  title: string;
  description: string;
  status: Status;
}
