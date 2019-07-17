import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `This is the message component 
            <div *ngFor="let message of messages">
            <mat-card>
              <mat-card-header>
              <mat-card-title>{{message.owner}}</mat-card-title> 
              </mat-card-header>
              <mat-card-content>
              {{message.text}}  
              </mat-card-content>
            </mat-card>                   
            </div>`
    ,
            
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages = [{text: 'some test', owner: 'Tim'}, {text:'other message', owner:'jnae'}];

  constructor() { }

  ngOnInit() {
  }

}
