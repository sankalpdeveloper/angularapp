import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any

  constructor() {}

  ngOnInit(): void {
    this.user = localStorage.getItem('email')
  }

  // Pie Chart
  pieChartLabels: string[] = [
    'Chrome',
    'Safari',
    'Firefox',
    'Internet Explorer',
    'Other',
  ]
  pieChartData: number[] = [20, 20, 20, 20, 20]
  pieChartType: string = 'pie'

  // Bar Chart
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  }

  barChartLabels: string[] = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ]
  barChartType: string = 'bar'
  barChartLegend: boolean = true

  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)',
    },
    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)',
    },
  ]
  public barChartData: any[] = [
    { data: [55, 60, 75, 82, 56, 62, 80], label: 'Company A' },
    { data: [58, 55, 60, 79, 66, 57, 90], label: 'Company B' },
  ]
  randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
    ]
    let clone = JSON.parse(JSON.stringify(this.barChartData))
    clone[0].data = data
    this.barChartData = clone
  }

  // Line Chart
  lineChartType: string = 'line'
  lineChartData: any[] = [
    {
      data: [3, 1, 4, 2, 5],
      label: 'Anthracnose',
      fill: false,
    },
  ]
  lineChartLabels: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  lineChartColors: any[] = [
    {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(0, 0, 0, 1)',
    },
  ]
  lineChartOptions: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
  }

  // Chart events
  chartClicked(event: any) {
    console.log(event)
  }

  chartHovered(event: any) {
    console.log(event)
  }
}
