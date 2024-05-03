import { Component, TemplateRef } from '@angular/core';
import { Todo } from 'src/app/class/todo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoValue: string = '';

  todoList: Todo[] = [
    {
      content: "entregar o projeto",
      value: false
    },
    {
      content: "não falhar",
      value: false
    },
    {
      content: "estudar angular",
      value: false
    },
  ];
  finishedList: Todo[] = [
    
  ]
  constructor(private modalService: NgbModal){}

  addTodo() {
    if(this.todoValue ===""){
      alert("Insira uma tarefa")
    }else {
      this.todoList.push({content:this.todoValue, value:false})
      this.todoValue=""
    }

  }
  changeTodo(i:number){
    const item = this.todoList.splice(i,1)
    this.finishedList.push(item[0])
  }
  changeFinished(i:number){
    const item = this.finishedList.splice(i,1)
    this.todoList.push(item[0])
  }
  pegarValor(){

  }
  
  openModal(content: TemplateRef<Element>, i: number, type: String) {
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result)=>{
        if(type == 'todoList'){
          this.todoList.splice(i,1)
        }else {
          this.finishedList.splice(i,1)
        }
      },
      (reason)=>{

      }
    )
  }
}