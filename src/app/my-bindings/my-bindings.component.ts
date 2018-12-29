import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-bindings',
  templateUrl: './my-bindings.component.html',
  styleUrls: ['./my-bindings.component.scss']
})
export class MyBindingsComponent implements OnInit {

  name: string;
  @Input() newname: string;
  @Output() clicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeName(): void {
    this.name = this.name === 'yuichi' ? 'chouchou' : 'yuichi';
    const greeting = 'Hello, ' + this.newname;
    this.clicked.emit(greeting);
  }

}
