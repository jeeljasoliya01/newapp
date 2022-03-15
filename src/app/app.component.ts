import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newapp';
  firstNameInput: string = '';
  lastNameInput: string = '';
  selectedColor: string = '';
  selectedClassColor: string = '';
  selectedNumber: number = 0;


  getSelectedColor(): string {
    return this.selectedColor;
  }

  get Colors(): string{
    return this.selectedColor;
  }
  
  getClass(): string {
    return this.selectedNumber == 0
      ? 'bg-yellow'
      : this.selectedNumber == 1
      ? 'bg-lightblue'
      : this.selectedNumber == 2
      ? 'bg-lightgreen'
      : this.selectedNumber == 3
      ? 'bg-brown'
      : '';
  }

  get getClassVar(): string {
    return this.selectedNumber == 0
      ? 'bg-yellow'
      : this.selectedNumber == 1
      ? 'bg-lightblue'
      : this.selectedNumber == 2
      ? 'bg-lightgreen'
      : this.selectedNumber == 3
      ? 'bg-brown'
      : '';
  }

  showValues() {
    debugger;
  }
}
