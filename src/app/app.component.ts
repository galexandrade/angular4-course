import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  detailClicks = [];
  showDetails = false;

  onDetailClick(){
    this.showDetails = this.showDetails ? false : true;
    let itemNumber = this.detailClicks.length > 0 ? this.detailClicks[this.detailClicks.length - 1] + 1 : 1;
    this.detailClicks.push(itemNumber);
  }
}
