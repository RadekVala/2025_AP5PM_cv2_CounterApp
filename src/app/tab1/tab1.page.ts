import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';

interface SavedCounter {
  name: string,
  count: number
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {

  count = 0
  savedCounters: SavedCounter[] = []

  constructor() {}

  onIncrement() {
    console.log('Increment');
    this.count++
  }

  onReset() {
    console.log('Reset');
    this.count = 0
  }
}
