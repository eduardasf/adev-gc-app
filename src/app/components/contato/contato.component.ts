import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  readonly whatsappNumero = environment.whatsappNumero;
  readonly whatsappFormatado = '(61) 99999-9999';
  readonly telefoneFixo = '556133333333';
  readonly telefoneFixoFormatado = '(61) 3333-3333';
  readonly instagramUrl = 'https://www.instagram.com/adevgrandecolorado/';
  readonly youtubeUrl = 'https://www.youtube.com/@AdevGrandeColorado/videos';
  readonly mapsUrl = 'https://maps.app.goo.gl/WzZqagbht1sHD5tr6';

  abrirWhatsApp(): void {
    const url = `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(environment.whatsappMensagemOracao)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
