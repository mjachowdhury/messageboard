import { Component } from '@angular/core';
import { MessageComponent } from './message/message.component';
 

@Component({
  selector: 'app-root',
  template: '<h1>Hello {{ title}} </h1><app-message></app-message>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Frontend App';
}
