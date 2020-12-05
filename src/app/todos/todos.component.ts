import {Component, OnInit} from '@angular/core';
import {TodosService} from '../services/todos.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

}
