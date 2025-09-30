import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
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

  @Input() count = 0
  @Input() name = ''

  @Output() saved = new EventEmitter<{ name: string, count: number}>();
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

  onSave() {
    this.saved.emit({ name: this.name, count: this.count})
    this.count = 0
    this.name = ''
  }

}
