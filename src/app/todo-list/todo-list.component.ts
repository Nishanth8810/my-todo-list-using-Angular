import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {



  task = [{ 
    taskName: 'Go to gym'
   },{
      taskName:'Practice Leetcode'
  },{
    taskName:'Drink Water'
  },
{
  taskName:'Walk for 10 min'
}]

  delete(index: number): void {
    this.task.splice(index, 1)
  }
    
  taskCompleted:string[]=[];
  
  completed(index:number):void{
    this.taskCompleted.push(this.task[index].taskName);
    this.task.splice(index,1)
  }

  constructor() {

  }
  onSubmit(form: NgForm) {
    this.task.push({
      taskName: form.controls['task'].value,
    })
    form.reset();

  }

  ngOnInit(): void {

  }
}
