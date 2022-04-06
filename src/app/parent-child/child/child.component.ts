import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() dataUpdate = new EventEmitter<any>();
  childdata: string = '';
  childdata1: string = '';
  childdata2: string = '';

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.dataUpdate.emit('jeel');
  }
  childupdate($event: any) {
    this.childdata = $event
  }
  childupdate1($event: any) {
    this.childdata1 = $event
  }
  childupdate2($event: any) {
    this.childdata2 = $event
  }
  parentupdate($event: any) {
    this.dataUpdate.emit($event)
  }
}
