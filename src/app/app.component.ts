import { Component } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'angular-todo-app';
  public todos: Todo[] = [{id: 1, title: 'Buy a beer', completed: false, date: new Date()},
                          {id: 2, title: 'Buy a bread', completed: true, date: new Date()},
                          {id: 3, title: 'Buy a milk', completed: true, date: new Date()}];
}
