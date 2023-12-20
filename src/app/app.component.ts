import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Person1Component } from './person1/person1.component';
import { Person2Component } from './person2/person2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Person1Component, Person2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  latestMessage !: any

  takeMessage(message : any){
    console.log("Parent received the message");
    this.latestMessage = message
  }

}
