import { Component } from '@angular/core';
import { PlayerComparatorComponent } from './components/player-comparator/player-comparator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayerComparatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {} 