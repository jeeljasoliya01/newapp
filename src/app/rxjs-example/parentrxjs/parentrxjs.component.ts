import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-parentrxjs',
  templateUrl: './parentrxjs.component.html',
  styleUrls: ['./parentrxjs.component.css']
})
export class ParentrxjsComponent implements OnInit {
  updateSTring: string = '';
  constructor(private SharedService: SharedService) { }

  ngOnInit(): void {
    this.SharedService.parentData.subscribe(data => {
      this.updateSTring = data
    })
  }
  changeChild(){
    this.SharedService.updateChild("Data passed using shared service for child : " + Math.random())
  }
}
