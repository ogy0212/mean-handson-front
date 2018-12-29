import { Component, OnInit } from '@angular/core';

import { MydaysService } from './mydays.service';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.scss']
})
export class MycompComponent implements OnInit {

  private name: string = 'OGY';
  private days: string[] = this.mydaysService.getDays();

  constructor(public mydaysService: MydaysService) {}

  ngOnInit() {
  }

  isWeekend(day: string): boolean {
    return day === 'sunday';
  }

}
