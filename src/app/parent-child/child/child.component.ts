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
  childdata3: string = '';

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.dataUpdate.emit('jeel');
  }
  childupdate($event: any) {
    this.childdata = $event;
  }
  childupdate1($event: any) {
    this.childdata1 = $event;
  }
  childupdate2($event: any) {
    this.childdata2 = $event;
  }
  childupdate3($event: any) {
    this.childdata3 = $event;
  }
  parentupdate($event: any) {
    this.dataUpdate.emit($event);
  }
  clearall($event: any) {
    this.childdata = '';
    this.childdata1 = '';
    this.childdata2 = '';
    this.childdata3 = '';
  }
}
