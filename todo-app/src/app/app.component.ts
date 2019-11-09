import { Component } from '@angular/core';
import { trigger,animate,style,transition,keyframes } from '@angular/animations'
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
   trigger("moveInLeft",[
      transition("void=> *",[style({transform:"translateX(300px)"}),
        animate(200,keyframes([
         style({transform:"translateX(300px)"}),
         style({transform:"translateX(0)"})
 
          ]))]),
transition("*=>void",[style({transform:"translateX(0px)"}),
        animate(100,keyframes([
         style({transform:"translateX(0px)"}),
         style({transform:"translateX(300px)"})
 
          ]))])    
     
    ])
]
})
export class AppComponent {
  title = 'todo-app';
  todoArray = []

  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
  }

  deleteItem(value){
    for(let i = 0; i < this.todoArray.length; i++){
      if(this.todoArray[i] == value){
        this.todoArray.splice(i, 1)
      }
    }
    console.log(this.todoArray)
  }

  //submit form
  todoSubmit(value:any){
    if(value!==""){
      this.todoArray.push(value.todo)
      //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    console.log(this.todoArray)
  }
}
