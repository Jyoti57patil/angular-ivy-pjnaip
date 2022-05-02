import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'accordian';
  value: any = false;
  id: any;
  display(ids: any) {
    this.id = ids;
    this.value = !this.value;
  }
}
