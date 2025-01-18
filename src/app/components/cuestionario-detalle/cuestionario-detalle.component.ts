import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cuestionario } from '../../Entidades/cuestionario';

@Component({
  selector: 'app-cuestionario-detalle',
  imports: [CommonModule],
  templateUrl: './cuestionario-detalle.component.html',
  styleUrl: './cuestionario-detalle.component.css'
})
export class CuestionarioDetalleComponent implements OnInit {

  cuestionario: Cuestionario | null = null;  // Ahora es de tipo Cuestionario o null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const cuestionarios: Cuestionario[] = JSON.parse(localStorage.getItem('cuestionarios') || '[]');
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convertir a número
  
    // Buscar el cuestionario correspondiente al ID
    this.cuestionario = cuestionarios.find(c => c.id === id) || null;
    console.log(this.cuestionario); // Verifica si el cuestionario se encuentra correctamente
  }
  
  
  


}
