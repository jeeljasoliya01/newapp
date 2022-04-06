import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent implements OnInit {
  @Input() childdata1: string = '';
  @Output() childupdate = new EventEmitter<string>();
  @Output() parentupdate = new EventEmitter<string>();
  @Output() childupdate1 = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  updatechild() {
    this.childupdate.emit('Value updated from CHild 2 for Child');
  }
  updateparent() {
    this.parentupdate.emit('Value updated from CHild 2 for Parent');
  }
  updatechild1() {
    this.childupdate1.emit('Value updated from CHild 2 for child 1');
  }
}
