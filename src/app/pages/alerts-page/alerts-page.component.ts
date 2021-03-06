import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts-page',
  templateUrl: './alerts-page.component.html',
  styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent implements OnInit {

  colTitles = ['Date', 'Heure', 'Station', '#vélos', 'Horizon (minutes)', 'Traité'];

  data: any = {
    listAlert: [
      ['28.03.2018', '12h47', 'Station A', 1, 30, {done: false}],
      ['28.03.2018', '12h59', 'Station B', 1, 40, {done: false}],
      ['28.03.2018', '13h12', 'Station B', 0, 30, {done: true}],
      ['28.03.2018', '14h03', 'Station C', 1, 20, {done: false}],
      ['28.03.2018', '14h17', 'Station D', 1, 30, {done: true}],
      ['28.03.2018', '14h26', 'Station C', 0, 60, {done: true}]
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
