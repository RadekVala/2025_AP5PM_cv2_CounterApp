import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonButton, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonButton, IonCard, IonContent],
})
export class CounterComponent  implements OnInit {

  count = 0

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
