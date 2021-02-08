import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {
  title = 'Add a topic description';
  editContent = false;
  titleBackgroundColor: string;
  titleCharsColor: string;
  addOptionActive: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  public editTitle(): void {
    this.editContent = !this.editContent;
  }

  disableEdit(): void {
    // In case when user clicks at edit button
    setTimeout(() => this.editContent = false, 300);
  }

  endEditing(event: Event): void {
    event.preventDefault();
    this.editContent = false;
  }

  whatHere(): void {
    alert(this.title);
  }
}
