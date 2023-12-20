import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person1',
  standalone: true,
  imports: [],
  templateUrl: './person1.component.html',
  styleUrl: './person1.component.css'
})
export class Person1Component {

  // We are trying to say that

  // We want to output a new Event to the broker / parent

  @Output() newMessage = new EventEmitter()

  // out : any = x

  message = "Hi i am person 1"


  sendMsg(){
    // it will do something to send message or data
    this.newMessage.emit(this.message)
  }
}
