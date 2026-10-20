import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FootballService } from '../../services/football';

@Component({
  selector: 'app-player-comparator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-comparator.html',
  styleUrl: './player-comparator.scss',
})
export class PlayerComparatorComponent {
  private footballService = inject(FootballService);

  searchQuery1 = '';
  searchQuery2 = '';

  loading1 = false;
  loading2 = false;

  player1Data: any = null;
  player2Data: any = null;

  error1 = '';
  error2 = '';

  searchPlayer(playerNumber: 1 | 2) {
    const query = playerNumber === 1 ? this.searchQuery1 : this.searchQuery2;
    if (!query.trim()) return;

    if (playerNumber === 1) {
      this.loading1 = true;
      this.error1 = '';
    } else {
      this.loading2 = true;
      this.error2 = '';
    }

    this.footballService.searchPlayer(query).subscribe({
      next: (response) => {
        if (playerNumber === 1) {
          this.loading1 = false;
          if (response.response && response.response.length > 0) {
            this.player1Data = response.response[0]; // Pobieramy pierwszego dopasowanego piłkarza
          } else {
            this.error1 = 'Nie znaleziono zawodnika.';
            this.player1Data = null;
          }
        } else {
          this.loading2 = false;
          if (response.response && response.response.length > 0) {
            this.player2Data = response.response[0];
          } else {
            this.error2 = 'Nie znaleziono zawodnika.';
            this.player2Data = null;
          }
        }
      },
      error: (err) => {
        if (playerNumber === 1) {
          this.loading1 = false;
          this.error1 = 'Błąd podczas pobierania danych.';
        } else {
          this.loading2 = false;
          this.error2 = 'Błąd podczas pobierania danych.';
        }
        console.error(err);
      }
    });
  }
}