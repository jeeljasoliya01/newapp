import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css'],
})
export class ChildThreeComponent implements OnInit {
  @Input() childdata2: string = '';
  @Output() childupdate = new EventEmitter<string>();
  @Output() parentupdate = new EventEmitter<string>();
  @Output() childupdate1 = new EventEmitter<string>();
  @Output() childupdate2 = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  updatechild() {
    this.childupdate.emit('Value updated from CHild 3 for Child');
  }
  updateparent() {
    this.parentupdate.emit('Value updated from CHild 3 for Parent');
  }
  updatechild1() {
    this.childupdate1.emit('Value updated from CHild 3 for child 1');
  }
  updatechild2() {
    this.childupdate2.emit('Value updated from CHild 3 for child 2');
  }
}
