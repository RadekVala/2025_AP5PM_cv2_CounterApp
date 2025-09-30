import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonContent],
})
export class CounterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Counter init')
  }

}
