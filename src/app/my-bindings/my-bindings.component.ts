import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MydaysService } from './../mycomp/mydays.service';

@Component({
  selector: 'app-my-bindings',
  templateUrl: './my-bindings.component.html',
  styleUrls: ['./my-bindings.component.scss']
})
export class MyBindingsComponent implements OnInit {

  name: string;
  @Input() newname: string;
  @Output() clicked = new EventEmitter();
  days = this.mydaysService.getDays();

  constructor(public mydaysService: MydaysService) {
  }

  ngOnInit() {
  }

  changeName(): void {
    if (!this.name) {
      this.name = 'anonymous';
    }
    const greeting = 'Hello, ' + this.name;
    this.clicked.emit(greeting);
  }

}
