import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuestionario-detalle-dise',
  imports: [CommonModule,FormsModule],
  templateUrl: './cuestionario-detalle-dise.component.html',
  styleUrl: './cuestionario-detalle-dise.component.css'
})
export class CuestionarioDetalleDiseComponent implements OnInit {

  cuestionario: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const cuestionarios = JSON.parse(localStorage.getItem('cuestionariosDiseñados') || '[]');
    this.cuestionario = cuestionarios.find((c: any) => c.id === id);
  }

}
