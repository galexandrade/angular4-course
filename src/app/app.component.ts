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
    this.showDetails = !this.showDetails;
    this.detailClicks.push(this.detailClicks.length + 1);
  }
}
