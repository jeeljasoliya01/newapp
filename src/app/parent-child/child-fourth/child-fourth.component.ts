import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-fourth',
  templateUrl: './child-fourth.component.html',
  styleUrls: ['./child-fourth.component.css']
})
export class ChildFourthComponent implements OnInit {
  @Input() childdata3: string = '';
  @Output() childupdate = new EventEmitter<string>();
  @Output() parentupdate = new EventEmitter<string>();
  @Output() childupdate1 = new EventEmitter<string>();
  @Output() childupdate2 = new EventEmitter<string>();
  @Output() childupdate3 = new EventEmitter<string>();


  constructor() {}

  ngOnInit(): void {}

  updatechild() {
    this.childupdate.emit('Value updated from CHild 4 for Child');
  }
  updateparent() {
    this.parentupdate.emit('Value updated from CHild 4 for Parent');
  }
  updatechild1() {
    this.childupdate1.emit('Value updated from CHild 4 for child 1');
  }
  updatechild2() {
    this.childupdate2.emit('Value updated from CHild 4 for child 2');
  }
  updatechild3() {
    this.childupdate3.emit('Value updated from CHild 4 for child 3');
  }
  clearall(){
    this.childupdate.emit('')
    this.parentupdate.emit('')
    this.childupdate1.emit('')
    this.childupdate2.emit('')
    this.childupdate3.emit('')
  }

}
