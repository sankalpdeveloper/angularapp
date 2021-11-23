import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded: boolean = false
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded)
}
