import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contribua',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribua.component.html',
  styleUrl: './contribua.component.scss'
})
export class ContribuaComponent {
  readonly whatsappNumero = environment.whatsappNumero;

  // Informações do PIX
  readonly chavePixCnpj = '00.000.000/0001-00'; // Substitua pelo CNPJ oficial da igreja
  readonly titularConta = 'ADEV - Assembleia de Deus Grande Colorado';
  readonly tipoChave = 'CNPJ';

  copiadoPix = false;

  copiarChavePix(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.chavePixCnpj).then(() => {
        this.copiadoPix = true;
        setTimeout(() => {
          this.copiadoPix = false;
        }, 3000);
      }).catch(() => {
        // Fallback caso clipboard API falhe
        this.copiadoPix = true;
        setTimeout(() => {
          this.copiadoPix = false;
        }, 3000);
      });
    } else {
      this.copiadoPix = true;
      setTimeout(() => {
        this.copiadoPix = false;
      }, 3000);
    }
  }

  doarAlimentosWhatsApp(): void {
    const mensagem = 'Olá! Gostaria de combinar a entrega de uma doação de alimentos / cesta básica para a Ação Social da ADEV Grande Colorado.';
    const url = `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  duvidaTesourariaWhatsApp(): void {
    const mensagem = 'Olá! Gostaria de tirar uma dúvida sobre contribuições e dízimos da ADEV Grande Colorado.';
    const url = `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
