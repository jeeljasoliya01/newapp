import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';




@Component({
  selector: 'app-docks',
  templateUrl: './docks.component.html',
  styleUrls: ['./docks.component.css']
})
export class DocksComponent implements OnInit {
  dockBasicItems!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.dockBasicItems = [
      {
        label: 'Finder',
        icon: "assets/images/icons/finder.svg"
      },
      {
        label: 'App Store',
        icon: "assets/images/icons/appstore.svg"
      },
      {
        label: 'Photos',
        icon: "assets/images/icons/photos.svg"
      },
      {
        label: 'Trash',
        icon: "assets/images/icons/trash.png"
      }
    ];
  }

}
