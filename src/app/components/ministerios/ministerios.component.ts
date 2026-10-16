import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

export interface Ministerio {
  id: string;
  nome: string;
  categoria: 'geracoes' | 'ministerios';
  icone: string;
  encontros: string;
  lider: string;
  descricao: string;
  aberto?: boolean;
}

@Component({
  selector: 'app-ministerios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ministerios.component.html',
  styleUrl: './ministerios.component.scss'
})
export class MinisteriosComponent {
  categoriaAtiva: 'todos' | 'geracoes' | 'ministerios' = 'todos';

  readonly whatsappNumero = environment.whatsappNumero;

  ministerios: Ministerio[] = [
    {
      id: 'louvor',
      nome: 'Ministério de Louvor & Adoração',
      categoria: 'ministerios',
      icone: 'fa-solid fa-music',
      encontros: 'Quintas às 19:30 e Domingos às 19:00',
      lider: 'Camila Silva',
      descricao: 'Responsável pela música e adoração congregacional nos cultos, integrando cantores e instrumentistas na presença de Deus.',
      aberto: true
    },
    {
      id: 'jovens',
      nome: 'Juventude ADEV',
      categoria: 'geracoes',
      icone: 'fa-solid fa-fire',
      encontros: 'Sábados às 19:30',
      lider: 'Lucas Gabriel',
      descricao: 'Comunhão, discipulado e eventos dinâmicos para conectar jovens e adolescentes à Palavra de Deus.',
      aberto: false
    },
    {
      id: 'mulheres',
      nome: 'Ministério de Mulheres',
      categoria: 'geracoes',
      icone: 'fa-solid fa-heart',
      encontros: 'Terças às 19:30 e encontros mensais',
      lider: 'Pra. Débora Andrade',
      descricao: 'Fortalecimento espiritual feminino, mentoria e apoio às famílias através da oração e da comunhão cristã.',
      aberto: false
    },
    {
      id: 'homens',
      nome: 'Ministério de Homens',
      categoria: 'geracoes',
      icone: 'fa-solid fa-shield-halved',
      encontros: '1º sábado do mês às 08:00',
      lider: 'Pr. Carlos Andrade',
      descricao: 'Encorajamento e comunhão masculina, fortalecendo os homens no sacerdócio do lar e na vida cristã.',
      aberto: false
    },
    {
      id: 'kids',
      nome: 'ADEV Kids (Ministério Infantil)',
      categoria: 'geracoes',
      icone: 'fa-solid fa-child-reaching',
      encontros: 'Domingos às 09:00 e 19:00',
      lider: 'Equipe Educadoras ADEV Kids',
      descricao: 'Ensino bíblico lúdico e seguro para crianças de todas as idades durante os cultos e na Escola Dominical.',
      aberto: false
    },
    {
      id: 'diaconia',
      nome: 'Ação Social & Diaconia',
      categoria: 'ministerios',
      icone: 'fa-solid fa-hand-holding-heart',
      encontros: 'Recepção nos cultos e ações sociais',
      lider: 'Diácono André Santos',
      descricao: 'Acolhimento caloroso aos membros e visitantes, suporte aos cultos e assistência a famílias da comunidade.',
      aberto: false
    },
    {
      id: 'ensino',
      nome: 'Escola Bíblica Dominical (EBD)',
      categoria: 'ministerios',
      icone: 'fa-solid fa-book-bible',
      encontros: 'Domingos às 09:00',
      lider: 'Pr. Marcos Oliveira',
      descricao: 'Estudo sistemático e aprofundado das Escrituras para crescimento teológico e maturidade de fé.',
      aberto: false
    },
    {
      id: 'comunicacao',
      nome: 'Comunicação & Mídia',
      categoria: 'ministerios',
      icone: 'fa-solid fa-camera',
      encontros: 'Escalas nos cultos e transmissões',
      lider: 'Equipe de Mídia ADEV',
      descricao: 'Transmissão dos cultos no YouTube, fotografia, sonorização e divulgação do Evangelho nas redes sociais.',
      aberto: false
    }
  ];

  get ministeriosFiltrados(): Ministerio[] {
    if (this.categoriaAtiva === 'todos') {
      return this.ministerios;
    }
    return this.ministerios.filter(m => m.categoria === this.categoriaAtiva);
  }

  setCategoria(categoria: 'todos' | 'geracoes' | 'ministerios'): void {
    this.categoriaAtiva = categoria;
  }

  toggleMinisterio(index: number): void {
    this.ministeriosFiltrados[index].aberto = !this.ministeriosFiltrados[index].aberto;
  }

  solicitarParticipacao(m: Ministerio, event: MouseEvent): void {
    event.stopPropagation();
    const mensagem = `Olá! Gostaria de saber mais informações e participar do *${m.nome}* da ADEV Grande Colorado.`;
    const url = `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  falarComLideranca(): void {
    const mensagem = 'Olá! Gostaria de conversar com a liderança pastoral para entender como posso servir e me envolver nos ministérios da ADEV.';
    const url = `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
