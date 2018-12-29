import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.scss']
})
export class MycompComponent implements OnInit {

  private name: string = 'OGY';
  private days: string[] = ['sunday', 'monday', 'tuesday', 'wednesday'];

  constructor() {}

  ngOnInit() {
  }

  isWeekend(day: string): boolean {
    return day === 'sunday';
  }

}
