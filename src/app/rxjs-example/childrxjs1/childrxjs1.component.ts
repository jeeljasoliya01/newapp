import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-childrxjs1',
  templateUrl: './childrxjs1.component.html',
  styleUrls: ['./childrxjs1.component.css']
})
export class Childrxjs1Component implements OnInit {
  onestring: string = ''
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.childData1.subscribe(data => {
      this.onestring = data
    })
  }
  changeParent() {
    this.sharedService.updateParent("Data passed using shared service for Parent : " + Math.random())
  }
  changeChild() {
    this.sharedService.updateChild("Data passed using shared service for child : " + Math.random())
  }

}
