import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-childrxjs',
  templateUrl: './childrxjs.component.html',
  styleUrls: ['./childrxjs.component.css']
})
export class ChildrxjsComponent implements OnInit {
  newData: string = ''
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.childData.subscribe(data => {
      this.newData = data
    })
  }
  changeParent() {
    this.sharedService.updateParent("Data passed using shared service for Parent : " + Math.random())
  }
}
