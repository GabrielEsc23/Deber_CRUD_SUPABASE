import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

import { PoemasService, Poema } from 'src/app/services/poemas';

@Component({
  selector: 'app-poemas',
  templateUrl: './poemas.page.html',
  styleUrls: ['./poemas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,

    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,

    RouterLink
  ]
})
export class PoemasPage implements OnInit {

  poemas: Poema[] = [];

  constructor(
    private poemasService: PoemasService
  ) {}

  ngOnInit() {
    this.cargar();
  }

  ionViewWillEnter() {
    this.cargar();
  }

  async cargar() {
    this.poemas = await this.poemasService.listar();
  }

  async eliminar(id: number) {

    const confirmar = confirm(
      '¿Eliminar este poema?'
    );

    if (!confirmar) return;

    await this.poemasService.eliminar(id);

    await this.cargar();
  }

}