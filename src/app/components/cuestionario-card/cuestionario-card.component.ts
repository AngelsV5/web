import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario-card',
  imports: [CommonModule],
  templateUrl: './cuestionario-card.component.html',
  styleUrl: './cuestionario-card.component.css'
})
export class CuestionarioCardComponent  implements OnInit{
 // Esta variable contendrá todas las cards que se han guardado en localStorage
 datosCuestionarios: any[] = [];

 constructor(private router: Router) {}

 ngOnInit() {
   // Recuperar todos los cuestionarios desde localStorage
   const storedData = localStorage.getItem('cuestionariosDiseñados');
   if (storedData) {
     this.datosCuestionarios = JSON.parse(storedData);
   }
 }

 compartir(card: any) {
  // Crear el enlace público utilizando el ID existente
  const enlace = `${window.location.origin}/encdet/${card.id}`;

  // Copiar el enlace al portapapeles
  navigator.clipboard.writeText(enlace).then(() => {
    alert('Enlace copiado al portapapeles: ' + enlace);
  }).catch(err => {
    console.error('No se pudo copiar el enlace', err);
  });
}



}
