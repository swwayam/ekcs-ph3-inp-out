import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person2',
  standalone: true,
  imports: [],
  templateUrl: './person2.component.html',
  styleUrl: './person2.component.css'
})
export class Person2Component {
  @Input() messageFromParent !: any
  
  message = "Hi I am Person 2"

  sendMsg(){
    
  }

}
