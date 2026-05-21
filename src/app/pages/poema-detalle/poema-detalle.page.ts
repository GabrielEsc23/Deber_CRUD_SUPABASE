import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-poema-detalle',
  templateUrl: './poema-detalle.page.html',
  styleUrls: ['./poema-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PoemaDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
