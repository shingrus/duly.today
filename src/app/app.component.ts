import { Component } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duly.today';
  constructor () {
    console.log('App Component constructed');
  }
}
