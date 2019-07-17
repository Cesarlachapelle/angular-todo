import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VirtualTimeScheduler } from 'rxjs';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  clickAddTodo(){
    const modal = this.modalService.open(TodoFormComponent);
    modal.result.then(
      this.handelModalTodoFormClose.bind(this),
      this.handelModalTodoFormClose.bind(this)
    )
  }

  handelModalTodoFormClose()
  {
    alert("se ha cerrado");
  }
}
