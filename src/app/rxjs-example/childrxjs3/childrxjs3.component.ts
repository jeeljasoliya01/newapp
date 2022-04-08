import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-childrxjs3',
  templateUrl: './childrxjs3.component.html',
  styleUrls: ['./childrxjs3.component.css']
})
export class Childrxjs3Component implements OnInit {
  thirdstring: string = ''
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.childData3.subscribe(data => {
      this.thirdstring = data
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
  changeChild2() {
    this.sharedService.updateChild2("Data passed using shared service for child one : " + Math.random())
  }
  clearall($event:any){
    this.sharedService.updateParent('');
    this.sharedService.updateChild('');
    this.sharedService.updateChild1('');
    this.sharedService.updateChild2('');
  } 

}
