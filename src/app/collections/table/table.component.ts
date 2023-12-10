import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  
  @Input() classNames = '';
  @Input() data: Array<any> = [];
  @Input() headers: Array<{key: string, label: string}> = [];
  /**
   *
   */
  constructor() {
  }
  ngOnInit(): void {
  
  }

}
