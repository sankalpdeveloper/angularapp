import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent implements OnInit {
  dropdownList: any = []
  selectedItems: any = []
  dropdownSettings = {}

  switchArray: any = [
    {
      id: 1,
      status: 'Approved',
    },
    {
      id: 2,
      status: 'Rejected',
    },
    {
      id: 3,
      status: 'Pending',
    },
    {
      id: 4,
      status: 'Approved',
    },
    {
      id: 5,
      status: 'Pending',
    },
    {
      id: 6,
      status: 'Rejected',
    },
    {
      id: 7,
      status: 'Pending',
    },
    {
      id: 8,
      status: 'Rejected',
    },
    {
      id: 9,
      status: 'Approved',
    },
    {
      id: 10,
      status: 'Pending',
    },
  ]
  switchPrint: any
  constructor() {}

  ngOnInit(): void {
    // Multiselect Dropdown
    this.dropdownList = [
      { id: 1, itemName: 'Singing' },
      { id: 2, itemName: 'Dancing' },
      { id: 3, itemName: 'Reading' },
      { id: 4, itemName: 'Playing' },
      { id: 5, itemName: 'Traveling' },
    ]
    this.selectedItems = [{ id: 2, itemName: 'Dancing' }]
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Your Hobby',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
    }
    console.log(this.switchArray, 'Switch Array')
  }

  // Multiselect Dropdown  functions
  onItemSelect(item: any) {
    console.log(item)
    console.log(this.selectedItems)
  }
  OnItemDeSelect(item: any) {
    console.log(item)
    console.log(this.selectedItems)
  }
  onSelectAll(items: any) {
    console.log(items)
  }
  onDeSelectAll(items: any) {
    console.log(items)
  }

  switchData(event: any) {
    console.log(event, 'event')
    for (let i = 0; i < this.switchArray.length; i++) {
      switch (event) {
        case 'Approved':
          if (this.switchArray[i].status == 'Approved') {
            this.switchPrint = this.switchArray[i]
            console.log(this.switchPrint)
          }
          break
        case 'Rejected':
          if (this.switchArray[i].status == 'Rejected') {
            this.switchPrint = this.switchArray[i]
            console.log(this.switchPrint)
          }
          break
        case 'Pending':
          if (this.switchArray[i].status == 'Pending') {
            this.switchPrint = this.switchArray[i]
            console.log(this.switchPrint)
          }
          break
      }
    }
  }
}
