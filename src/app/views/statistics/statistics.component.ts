import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit {
  @Input() data: Array<{label: string, value: any}> = [];

  /**
   *
   */
  constructor() {
  
    
  }
  ngOnInit(): void {
  
  }
}
