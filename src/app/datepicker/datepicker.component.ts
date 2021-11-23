import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  startDate = new Date()
  endDate = new Date()
  minDate: any
  today = new Date()
  model = new Date('2021-10-01');
  constructor() {
    const current = new Date()
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    }
  }

  ngOnInit(): void {}
}
