import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `This is the message component 
            <div *ngFor="let message of messages">
            <mat-card>{{message.text}} by: {{message.owner}}</mat-card>
                  <button mat-button>Click me!</button>
            </div>`,
            
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages = [{text: 'some test', owner: 'Tim'}, {text:'other message', owner:'jnae'}];

  constructor() { }

  ngOnInit() {
  }

}
