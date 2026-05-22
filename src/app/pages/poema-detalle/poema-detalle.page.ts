import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonButtons
} from '@ionic/angular/standalone';

import { ActivatedRoute,RouterLink } from '@angular/router';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PoemasService, Poema } from 'src/app/services/poemas';

@Component({
  selector: 'app-poema-detalle',
  templateUrl: './poema-detalle.page.html',
  styleUrls: ['./poema-detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,

    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,

    IonButton,
    RouterLink
  ]
})
export class PoemaDetallePage implements OnInit {

  poema!: Poema;

  videoSeguro!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private poemasService: PoemasService,
    private sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const datos =
      await this.poemasService.obtenerPorId(id);

    if(datos){

      this.poema = datos;

      this.prepararVideo();

    }

  }


  prepararVideo() {

let url=this.poema.video_url;

let id='';


if(url.includes('watch?v=')){

id=url.split('watch?v=')[1];

}

else if(url.includes('youtu.be/')){

id=url.split('youtu.be/')[1];

}

else if(url.includes('embed/')){

id=url.split('embed/')[1];

}


const embed=

`https://www.youtube.com/embed/${id}`;


this.videoSeguro=

this.sanitizer
.bypassSecurityTrustResourceUrl(
embed
);

}

}