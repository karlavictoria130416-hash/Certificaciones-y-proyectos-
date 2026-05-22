import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-siesta',
  templateUrl: './siesta.page.html',
  styleUrls: ['./siesta.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, CommonModule],
})
export class SiestaPage {}
