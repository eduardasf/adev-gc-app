import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface HorarioCulto {
  dia: string;
  frequencia: string;
  titulo: string;
  horario: string;
  descricao: string;
  aberto?: boolean;
}

export interface EventoEspecial {
  data: string;
  mes: string;
  frequencia: string;
  titulo: string;
  horario: string;
  descricao: string;
  destaque?: boolean;
  aberto?: boolean;
}

export interface SlideIgreja {
  imagem: string;
  tag: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-inicio.component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent implements OnInit, OnDestroy {
  // Configurações do WhatsApp a partir das variáveis de ambiente
  whatsappUrl: string = `https://wa.me/${environment.whatsappNumero}?text=${encodeURIComponent(environment.whatsappMensagemOracao)}`;

  // Slides do Card da Igreja
  slidesIgreja: SlideIgreja[] = [
    {
      imagem: 'assets/img/igreja.png',
      tag: 'NOSSO TEMPLO',
      titulo: 'ADEV Grande Colorado',
      descricao: 'Assembleia de Deus - Ministério Edificar Vidas',
    },
    {
      imagem: 'assets/img/igreja_culto.png',
      tag: 'ADORAÇÃO',
      titulo: 'Comunhão e Fé',
      descricao: 'Momentos inspiradores de louvor e ensino bíblico.',
    },
  ];

  slideIgrejaAtual: number = 0;
  private autoPlayTimer: any = null;
  isAutoPlayPausado: boolean = false;
  mostrarTooltipInicial: boolean = true;
  private tooltipTimer: any = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.iniciarAutoPlay();
      this.iniciarTimerTooltip();
    }
  }

  ngOnDestroy(): void {
    this.pararAutoPlay();
    if (this.tooltipTimer) {
      clearTimeout(this.tooltipTimer);
      this.tooltipTimer = null;
    }
  }

  iniciarTimerTooltip(): void {
    this.tooltipTimer = setTimeout(() => {
      this.mostrarTooltipInicial = false;
    }, 6000);
  }

  proximoSlideIgreja(): void {
    this.slideIgrejaAtual = (this.slideIgrejaAtual + 1) % this.slidesIgreja.length;
  }

  anteriorSlideIgreja(): void {
    this.slideIgrejaAtual =
      (this.slideIgrejaAtual - 1 + this.slidesIgreja.length) % this.slidesIgreja.length;
  }

  irParaSlideIgreja(index: number): void {
    this.slideIgrejaAtual = index;
  }

  iniciarAutoPlay(): void {
    this.pararAutoPlay();
    if (!this.isBrowser) return;
    this.autoPlayTimer = setInterval(() => {
      if (!this.isAutoPlayPausado) {
        this.proximoSlideIgreja();
      }
    }, 6000);
  }

  pararAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  pausarAutoPlay(): void {
    this.isAutoPlayPausado = true;
  }

  retomarAutoPlay(): void {
    this.isAutoPlayPausado = false;
  }

  abaAtiva: 'horarios' | 'eventos' = 'horarios';

  horarios: HorarioCulto[] = [
    {
      dia: 'TER',
      frequencia: 'Terça-feira',
      titulo: 'Culto de Ensino',
      horario: '19:00H',
      descricao:
        'Estudo aprofundado das Sagradas Escrituras para edificação, fortalecimento na fé e crescimento espiritual de toda a igreja.',
      aberto: false,
    },
    {
      dia: 'QUA',
      frequencia: 'Quarta-feira',
      titulo: 'Tarde de Milagres',
      horario: '15:00H',
      descricao:
        'Clamor com orações de cura, libertação e manifestação do poder e da graça de Deus.',
      aberto: false,
    },
    {
      dia: 'QUI',
      frequencia: 'Quinta-feira',
      titulo: 'Culto de Oração',
      horario: '19:30H',
      descricao:
        'Momento de intercessão pelas famílias, busca pelo Espírito Santo e intimidade com Deus.',
      aberto: false,
    },
    {
      dia: 'SÁB',
      frequencia: 'Sábado',
      titulo: 'Conexão Jovem',
      horario: '19:30H',
      descricao:
        'Culto vibrante da juventude com louvor contemporâneo, comunhão e ministração bíblica prática direcionada aos jovens.',
      aberto: false,
    },
    {
      dia: 'DOM',
      frequencia: 'Domingo pela manhã',
      titulo: 'Escola Bíblica Dominical (EBD)',
      horario: '09:00H',
      descricao:
        'Classes bíblicas divididas por faixas etárias (crianças, jovens e adultos) com ensino dinâmico da Palavra de Deus.',
      aberto: false,
    },
    {
      dia: 'DOM',
      frequencia: 'Domingo à noite',
      titulo: 'Culto da Família',
      horario: '19:00H',
      descricao:
        'Celebração congregacional com louvor, adoração e ministração especial da Palavra para todas as famílias.',
      aberto: false,
    },
  ];

  eventosEspeciais: EventoEspecial[] = [
    {
      data: '17-18',
      mes: 'OUT',
      frequencia: '17 e 18 de Outubro',
      titulo: '30º Aniversário da Igreja',
      horario: '19:30H',
      descricao:
        'Três décadas de fé, milagres e proclamação do Evangelho no Grande Colorado. Dois dias especiais com preletores e louvores convidados.',
      destaque: true,
      aberto: false,
    },
    {
      data: '01',
      mes: 'NOV',
      frequencia: '1º Domingo do Mês',
      titulo: 'Culto da Santa Ceia do Senhor',
      horario: '19:00H',
      descricao:
        'Celebração solene em memória de Cristo: comunhão, renovação de aliança e gratidão pelo sacrifício da cruz.',
      aberto: false,
    },
    {
      data: '14',
      mes: 'NOV',
      frequencia: 'Sábado Especial',
      titulo: 'Encontro de Casais: Famílias no Altar',
      horario: '19:30H',
      descricao:
        'Uma noite edificante para fortalecer os laços conjugais segundo os princípios de Deus, com palestra temática e comunhão.',
      aberto: false,
    },
    {
      data: '27',
      mes: 'NOV',
      frequencia: 'Sexta para Sábado',
      titulo: 'Grande Vigília da Unidade',
      horario: '22:30H',
      descricao:
        'Madrugada inteira de clamor, adoração profunda e busca pelo avivamento espiritual na presença do Senhor.',
      aberto: false,
    },
  ];

  setAba(aba: 'horarios' | 'eventos'): void {
    this.abaAtiva = aba;
  }

  toggleHorario(index: number): void {
    this.horarios[index].aberto = !this.horarios[index].aberto;
  }

  toggleEvento(index: number): void {
    this.eventosEspeciais[index].aberto = !this.eventosEspeciais[index].aberto;
  }

  compartilharWhatsApp(titulo: string, horario: string, diaOuData: string, event: MouseEvent): void {
    event.stopPropagation();
    const mensagem = `Paz do Senhor! Quero te convidar para o culto *${titulo}* na ADEV Grande Colorado!\n\n📅 ${diaOuData} às ${horario}\n📍 Local: ADEV Grande Colorado\n\nVenha adorar a Deus conosco!`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }
}

