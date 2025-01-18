import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cuestionario-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './cuestionario-form.component.html',
  styleUrl: './cuestionario-form.component.css'
})
export class CuestionarioFormComponent {
  nombre: string = '';
  email: string = '';
  pregunta1: string = '';
  pregunta2: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const datosFormulario = {
      id: this.generarIdIncremental(), // Generar un ID incremental
      nombre: this.nombre,
      email: this.email,
      pregunta1: this.pregunta1,
      pregunta2: this.pregunta2
    };
  
    // Recuperar los datos previos de localStorage, si existen
    let cuestionarios = JSON.parse(localStorage.getItem('cuestionarios') || '[]');
    
    // Agregar el nuevo cuestionario a la lista
    cuestionarios.push(datosFormulario);
  
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('cuestionarios', JSON.stringify(cuestionarios));
  
    // Redirigir a la página de las cards
    this.router.navigate(['/cards']);
  }
  
  generarIdIncremental(): number {
    // Obtener el último ID generado de localStorage
    const ultimoId = parseInt(localStorage.getItem('ultimoId') || '0', 10);
  
    // Incrementar el ID
    const nuevoId = ultimoId + 1;
  
    // Guardar el nuevo ID en localStorage
    localStorage.setItem('ultimoId', nuevoId.toString());
  
    return nuevoId;
  }

}
