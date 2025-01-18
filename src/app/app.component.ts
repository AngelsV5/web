import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  template:`
        <main>
    <h1>Pa</h1>
    <section class="content">
      <router-outlet></router-outlet>
  </section>
    </main>

  `,
  styleUrl: './app.component.css',
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'Pruebas';
}
