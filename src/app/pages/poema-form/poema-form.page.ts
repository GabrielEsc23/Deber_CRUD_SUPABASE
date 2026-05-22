import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonButtons
} from '@ionic/angular/standalone';

import { ActivatedRoute, Router,RouterLink } from '@angular/router';

import {
  PoemasService,
  Poema
} from '../../services/poemas';

@Component({
  selector: 'app-poema-form',
  templateUrl: './poema-form.page.html',
  styleUrls: ['./poema-form.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,

    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    RouterLink
  ]
})
export class PoemaFormPage implements OnInit {

  id: number | null = null;

  imagenSeleccionada!: File;

  audioSeleccionado!: File;

  poema: Poema = {

    titulo:'',
    autor:'',
    contenido:'',

    imagen_url:'',
    audio_url:'',
    video_url:''

  };

  constructor(
    private poemasService:PoemasService,
    private route:ActivatedRoute,
    private router:Router
  ) {}


  async ngOnInit(){

    const idParam=
    this.route.snapshot
    .paramMap.get('id');

    if(idParam){

      this.id=
      Number(idParam);

      const datos=

      await this
      .poemasService
      .obtenerPorId(
      this.id
      );

      if(datos){

        this.poema=
        datos;

      }

    }

  }



  seleccionarImagen(
    event:any
  ){

    this.imagenSeleccionada=

    event.target.files[0];

  }



  seleccionarAudio(
    event:any
  ){

    this.audioSeleccionado=

    event.target.files[0];

  }



  async guardar(){

    try{


      if(
      this.imagenSeleccionada
      ){

        const urlImagen=

        await this
        .poemasService
        .subirImagen(
          this.imagenSeleccionada
        );

        this.poema.imagen_url=
        urlImagen;

      }



      if(
      this.audioSeleccionado
      ){

        const urlAudio=

        await this
        .poemasService
        .subirAudio(
        this.audioSeleccionado
        );

        this.poema.audio_url=
        urlAudio;

      }



      if(this.id){

        await this
        .poemasService
        .actualizar(
        this.id,
        this.poema
        );

      }

      else{

        await this
        .poemasService
        .crear(
        this.poema
        );

      }


      this.router.navigate(
      ['/poemas']
      );

    }

    catch(error){

      console.log(
      'Error:',
      error
      );

    }

  }

}