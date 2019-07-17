import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: ` 
            <div *ngFor="let message of messages">
            <mat-card style="margin:8px">            
                <mat-card-title>{{message.owner}}</mat-card-title>  
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
