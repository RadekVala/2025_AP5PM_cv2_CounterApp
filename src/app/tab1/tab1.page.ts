import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CounterComponent } from '../counter/counter.component';

interface SavedCounter {
  name: string,
  count: number
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CounterComponent],
})
export class Tab1Page {

  count = 0
  savedCounters: SavedCounter[] = []

  constructor() {}

  onSaved(event: { name: string, count: number}) {
     console.log('Ulozeno: ', event.name, ',', event.count)
  }
}
