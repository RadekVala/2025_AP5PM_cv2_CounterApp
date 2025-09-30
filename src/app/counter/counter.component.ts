import { Component, OnInit } from '@angular/core';
import { IonCard, IonButton, IonCardContent, IonInput } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [IonInput, IonCardContent, IonButton, IonCard, FormsModule],
})
export class CounterComponent  implements OnInit {

  count = 0
  name = ''

  constructor() { }

  ngOnInit() {
    console.log('Counter init')
  }

  onIncrement() {
    this.count++
  }

  onReset() {
    this.count = 0
  }

}
