import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

export interface Ministerio {
  id: string;
  nome: string;
  categoria: 'geracoes' | 'ministerios';
  categoriaBadge: string;
  icone: string;
  encontros: string;
  lider: string;
  descricao: string;
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
      nome: 'Louvor & Adoração',
      categoria: 'ministerios',
      categoriaBadge: 'Música & Artes',
      icone: 'fa-solid fa-music',
      encontros: 'Quintas 19:30 e Domingos 19:00',
      lider: 'Camila Silva',
      descricao: 'Condução musical dos cultos, unindo cantores e instrumentistas no louvor congregacional com fundamentação bíblica.'
    },
    {
      id: 'jovens',
      nome: 'Juventude ADEV',
      categoria: 'geracoes',
      categoriaBadge: 'Jovens',
      icone: 'fa-solid fa-fire',
      encontros: 'Sábados às 19:30',
      lider: 'Lucas Gabriel',
      descricao: 'Comunhão, discipulado e encontros dinâmicos para fortalecer a fé de jovens e adolescentes no Evangelho.'
    },
    {
      id: 'mulheres',
      nome: 'Ministério Feminino',
      categoria: 'geracoes',
      categoriaBadge: 'Mulheres',
      icone: 'fa-solid fa-heart',
      encontros: 'Terças 19:30 e encontros mensais',
      lider: 'Pra. Débora Andrade',
      descricao: 'Acolhimento, mentoria bíblica e intercessão contínua pelas famílias e pelas necessidades da comunidade.'
    },
    {
      id: 'homens',
      nome: 'Ministério de Homens',
      categoria: 'geracoes',
      categoriaBadge: 'Homens',
      icone: 'fa-solid fa-shield-halved',
      encontros: '1º sábado do mês às 08:00',
      lider: 'Pr. Carlos Andrade',
      descricao: 'Encorajamento e comunhão masculina, desenvolvendo o sacerdócio no lar e a integridade na caminhada cristã.'
    },
    {
      id: 'kids',
      nome: 'ADEV Kids',
      categoria: 'geracoes',
      categoriaBadge: 'Infantil',
      icone: 'fa-solid fa-child-reaching',
      encontros: 'Domingos às 09:00 e 19:00',
      lider: 'Educadoras ADEV Kids',
      descricao: 'Cuidado seguro e ensino didático das Sagradas Escrituras em salinhas preparadas com carinho para cada faixa etária.'
    },
    {
      id: 'diaconia',
      nome: 'Ação Social & Diaconia',
      categoria: 'ministerios',
      categoriaBadge: 'Serviço',
      icone: 'fa-solid fa-hand-holding-heart',
      encontros: 'Recepção nos cultos e ações sociais',
      lider: 'Diácono André Santos',
      descricao: 'Acolhimento afetuoso nos cultos, suporte operacional e assistência com cestas básicas às famílias da comunidade.'
    },
    {
      id: 'ensino',
      nome: 'Escola Dominical (EBD)',
      categoria: 'ministerios',
      categoriaBadge: 'Ensino Bíblico',
      icone: 'fa-solid fa-book-bible',
      encontros: 'Domingos das 09:00 às 10:30',
      lider: 'Pr. Marcos Oliveira',
      descricao: 'Classes temáticas e estudo bíblico sistemático para todas as idades, promovendo discernimento e maturidade cristã.'
    },
    {
      id: 'comunicacao',
      nome: 'Comunicação & Mídia',
      categoria: 'ministerios',
      categoriaBadge: 'Mídia & Redes',
      icone: 'fa-solid fa-camera',
      encontros: 'Escalas nos cultos e transmissões',
      lider: 'Equipe de Mídia ADEV',
      descricao: 'Transmissão ao vivo no YouTube, sonorização, fotografia e expansão da mensagem de Cristo nas redes sociais.'
    },
    {
      id: 'oracao',
      nome: 'Intercessão & Oração',
      categoria: 'ministerios',
      categoriaBadge: 'Oração',
      icone: 'fa-solid fa-hands-praying',
      encontros: 'Vigílias e clamor semanal',
      lider: 'Equipe Pastoral & Obreiros',
      descricao: 'Ministério dedicado a clamar pela igreja, pela liderança, pelos lares, enfermos e pelo avivamento da comunidade.'
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

  solicitarParticipacao(m: Ministerio): void {
    const mensagem = `Olá! Tenho interesse em participar e servir no *${m.nome}* da ADEV Grande Colorado.`;
    const url = `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
