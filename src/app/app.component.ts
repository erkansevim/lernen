import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl
  template: `<input type="text" [(ngModel)]="names"> 
  <ul>
    <li *ngFor="let name of names;index as s">{{name}} -aaaaaaa {{s}}</li>
  </ul>
  
  
  `
  
  
  ,


  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'erkan';
  names: string[] = ["erkan", "izzet", "betul"];
}
