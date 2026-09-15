import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StatusService, ApiStatus } from './services/status.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private statusService = inject(StatusService);

  title = 'ADEV-GC';
  apiStatus: ApiStatus | null = null;
  loading = false;
  errorMessage = '';

  ngOnInit() {
    this.checkApi();
  }

  checkApi() {
    this.loading = true;
    this.errorMessage = '';
    this.statusService.checkStatus().subscribe({
      next: (data) => {
        this.apiStatus = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'A API ainda não está em execução ou não pôde ser alcançada.';
        this.loading = false;
      }
    });
  }
}
