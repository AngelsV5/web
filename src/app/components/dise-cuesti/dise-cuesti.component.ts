import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dise-cuesti',
  imports: [CommonModule, FormsModule],
  templateUrl: './dise-cuesti.component.html',
  styleUrl: './dise-cuesti.component.css'
})
export class DiseCuestiComponent {
  titulo: string = '';
  nuevaPregunta: string = '';
  tipoPregunta: string = 'texto';
  preguntas: { texto: string; tipo: string; opciones?: string[] }[] = [];
  nuevaOpcion: string = '';
  opciones: string[] = []; // Asignación de un arreglo vacío por defecto
  
  constructor(private router: Router) {}

  agregarPregunta() {
    if (this.nuevaPregunta.trim()) {
      const nuevaPregunta = {
        texto: this.nuevaPregunta,
        tipo: this.tipoPregunta,
        opciones: this.tipoPregunta === 'radio' || this.tipoPregunta === 'checkbox' ? [...this.opciones] : []
      };
      
  
      this.preguntas.push(nuevaPregunta);
      this.nuevaPregunta = '';
      this.tipoPregunta = 'texto';
      this.opciones = [];
    }
  }
  

  eliminarPregunta(index: number) {
    this.preguntas.splice(index, 1);
  }

  guardarCuestionario() {
    const cuestionario = {
      id: this.generarIdIncremental(),
      titulo: this.titulo,
      preguntas: this.preguntas
    };

    const cuestionarios = JSON.parse(localStorage.getItem('cuestionariosDiseñados') || '[]');
    cuestionarios.push(cuestionario);
    localStorage.setItem('cuestionariosDiseñados', JSON.stringify(cuestionarios));

    alert('Cuestionario guardado correctamente.');
    this.router.navigate(['/cards']);
  }

  generarIdIncremental(): number {
    const ultimoId = parseInt(localStorage.getItem('ultimoIdDiseño') || '0', 10);
    const nuevoId = ultimoId + 1;
    localStorage.setItem('ultimoIdDiseño', nuevoId.toString());
    return nuevoId;
  }

  agregarOpcion() {
    if (this.nuevaOpcion.trim()) {
      this.opciones.push(this.nuevaOpcion);
      this.nuevaOpcion = '';
    }
  }
  
  eliminarOpcion(index: number) {
    this.opciones.splice(index, 1);
  }
  

}
