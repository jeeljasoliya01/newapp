import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-childrxjs2',
  templateUrl: './childrxjs2.component.html',
  styleUrls: ['./childrxjs2.component.css']
})
export class Childrxjs2Component implements OnInit {

  secondstring: string = ''
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.childData2.subscribe(data => {
      this.secondstring = data
    })
  }
  changeParent() {
    this.sharedService.updateParent("Data passed using shared service for Parent : " + Math.random())
  }
  changeChild() {
    this.sharedService.updateChild("Data passed using shared service for child : " + Math.random())
  }
  changeChild1() {
    this.sharedService.updateChild1("Data passed using shared service for child one : " + Math.random())
  }
}
