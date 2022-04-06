import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
})
export class ChildOneComponent implements OnInit {
  @Input() childdata: string = '';
  @Output() childupdate = new EventEmitter<string>();
  @Output() parentupdate = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  updatechild() {
    this.childupdate.emit('Value updated from CHild 1 for Child');
  }
  updateparent() {
    this.parentupdate.emit('Value updated from CHild 1 for Parent');
  }
}
