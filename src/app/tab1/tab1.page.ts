import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { CounterComponent } from '../counter/counter.component';
import { NgFor } from '@angular/common';

export interface SavedCounter {
  name: string,
  count: number
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, CounterComponent, NgFor],
})
export class Tab1Page {

  count = 0
  savedCounters: SavedCounter[] = []

  constructor() {}

  onSaved(counter: SavedCounter) {
     console.log('Ulozeno: ', counter.name, ',', counter.count)
     this.savedCounters.unshift(counter)
  }
}
