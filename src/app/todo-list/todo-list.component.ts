import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {



  task = [{ taskName: 'task1', status: false }]

  delete(index: number): void {
    this.task.splice(index, 1)
  }


  constructor() {

  }
  onSubmit(form: NgForm) {

    this.task.push({
      taskName: form.controls['task'].value,
      status: false
    })
    form.reset();

  }

  ngOnInit(): void {

  }
}
