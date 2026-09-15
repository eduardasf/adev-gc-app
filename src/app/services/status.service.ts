import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ApiStatus {
  api: string;
  database: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  checkStatus(): Observable<ApiStatus> {
    return this.http.get<ApiStatus>(`${this.apiUrl}/status`);
  }
}
