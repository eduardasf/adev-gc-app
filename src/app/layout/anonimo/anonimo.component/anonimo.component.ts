import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-anonimo',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './anonimo.component.html',
  styleUrl: './anonimo.component.scss',
})
export class AnonimoComponent {
  isMenuOpen = false;
  currentYear: number = new Date().getFullYear();

  navLinks: NavLink[] = [
    { label: 'Início', path: '/', exact: true },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Eventos', path: '/eventos' },
    { label: 'Ministérios', path: '/ministerios' },
    { label: 'Contribua', path: '/contribua' },
    { label: 'Contato', path: '/contato' },
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
