import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnClickCount = [];
  btnClick: number = 0;

  onButtonClick() {
    this.btnClick += 1;
    this.btnClickCount.push(this.btnClick);
  }

  getClick() {
    return this.btnClick % 2 == 0 ? 'hidden' : 'visible';
  }
  
  getColor(btnClick) {
    return this.btnClick > 4 ? 'blue' : 'white';
}

}
